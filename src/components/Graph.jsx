import React, { useEffect, useRef, useState, useCallback } from 'react'
import cytoscape from 'cytoscape'
import { NODES, EDGES, SECTOR_COLORS } from '../data/nodes.js'

const EDGE_COLORS = {
  policy:      '#3a6bc4',
  regulation:  '#c0392b',
  oversight:   '#2980b9',
  employment:  '#95a5a6',
  governance:  '#95a5a6',
  support:     '#27ae60',
  advocacy:    '#8e44ad',
  stakeholder: '#3a6bc4',
  evidence:    '#16a085',
}

const SUBTYPE_SHAPES = {
  'policy-owner':      'star',
  'government':        'star',
  'regulator':         'diamond',
  'professional-body': 'hexagon',
  'research-advocacy': 'pentagon',
  'federation':        'pentagon',
  'ombudsman':         'diamond',
  'investigator':      'diamond',
  'university':        'triangle',
  'union':             'hexagon',
  'icb':               'roundrectangle',
  'acute':             'rectangle',
  'mental-health':     'rectangle',
  'community':         'rectangle',
  'ambulance':         'rectangle',
  'prison':            'rectangle',
}

function nodeSize(tier) {
  return tier === 0 ? 18 : tier === 1 ? 13 : tier === 2 ? 10 : 8
}

export default function Graph({
  onNodeSelect, selectedNodeId, darkMode,
  activeSector, viewMode, onViewModeChange,
  onCyReady,
}) {
  const containerRef = useRef(null)
  const ringCanvasRef = useRef(null)
  const cyRef = useRef(null)
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, label: '' })

  // Build and mount cytoscape
  useEffect(() => {
    if (!containerRef.current) return

    const elements = [
      ...NODES.map(n => ({
        data: { id: n.id, label: n.label, type: n.type, subtype: n.subtype, sector: n.sector, tier: n.tier },
      })),
      ...EDGES.map((e, i) => ({
        data: { id: `e${i}`, source: e.source, target: e.target, edgeType: e.type },
      })),
    ]

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': ele => SECTOR_COLORS[ele.data('sector')] || '#768692',
            'shape': ele => SUBTYPE_SHAPES[ele.data('subtype')] || 'ellipse',
            'width':  ele => nodeSize(ele.data('tier')),
            'height': ele => nodeSize(ele.data('tier')),
            'label': '',   // no labels by default
            'border-width': 1.5,
            'border-color': ele => SECTOR_COLORS[ele.data('sector')] || '#768692',
            'border-opacity': 0.4,
          },
        },
        {
          selector: 'node.labelled',
          style: {
            'label': 'data(label)',
            'color': darkMode ? '#e8edee' : '#1e3a5f',
            'font-size': 9,
            'font-family': '"Inter", "Arial", sans-serif',
            'font-weight': 500,
            'text-wrap': 'wrap',
            'text-max-width': 80,
            'text-valign': 'bottom',
            'text-margin-y': 3,
            'text-background-color': darkMode ? '#0f1f3d' : '#f8fafc',
            'text-background-opacity': 0.85,
            'text-background-padding': '2px',
            'text-background-shape': 'roundrectangle',
          },
        },
        {
          selector: 'node.highlighted',
          style: {
            'border-width': 3,
            'border-color': '#f39c12',
            'border-opacity': 1,
            'background-color': ele => SECTOR_COLORS[ele.data('sector')] || '#768692',
            'width':  ele => nodeSize(ele.data('tier')) * 1.5,
            'height': ele => nodeSize(ele.data('tier')) * 1.5,
            'label': 'data(label)',
            'color': darkMode ? '#fff' : '#1e3a5f',
            'font-size': 11,
            'font-weight': 700,
            'font-family': '"Inter", "Arial", sans-serif',
            'text-wrap': 'wrap',
            'text-max-width': 100,
            'text-valign': 'bottom',
            'text-margin-y': 4,
            'text-background-color': darkMode ? '#0f1f3d' : '#ffffff',
            'text-background-opacity': 0.92,
            'text-background-padding': '3px',
            'text-background-shape': 'roundrectangle',
            'z-index': 999,
          },
        },
        {
          selector: 'node.neighbour',
          style: {
            'label': 'data(label)',
            'color': darkMode ? '#c8d8e8' : '#2c4a6e',
            'font-size': 9,
            'font-family': '"Inter", "Arial", sans-serif',
            'font-weight': 500,
            'text-wrap': 'wrap',
            'text-max-width': 80,
            'text-valign': 'bottom',
            'text-margin-y': 3,
            'text-background-color': darkMode ? '#0f1f3d' : '#f8fafc',
            'text-background-opacity': 0.8,
            'text-background-padding': '2px',
            'text-background-shape': 'roundrectangle',
            'border-width': 2,
            'border-color': ele => SECTOR_COLORS[ele.data('sector')] || '#768692',
            'border-opacity': 0.8,
            'z-index': 10,
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 1,
            'line-color': ele => EDGE_COLORS[ele.data('edgeType')] || '#aaa',
            'line-opacity': darkMode ? 0.3 : 0.2,
            'target-arrow-shape': 'triangle',
            'target-arrow-color': ele => EDGE_COLORS[ele.data('edgeType')] || '#aaa',
            'target-arrow-opacity': darkMode ? 0.4 : 0.25,
            'curve-style': 'bezier',
            'arrow-scale': 0.6,
          },
        },
        {
          selector: 'edge.active',
          style: {
            'line-opacity': 0.75,
            'width': 1.8,
            'target-arrow-opacity': 0.9,
            'z-index': 5,
          },
        },
        {
          selector: '.dimmed',
          style: { 'opacity': 0.06 },
        },
      ],
      layout: {
        name: 'concentric',
        concentric: ele => {
          if (ele.isEdge()) return 0
          const t = ele.data('tier')
          return t === 0 ? 5 : t === 1 ? 4 : t === 2 ? 3 : 2
        },
        levelWidth: () => 1,
        minNodeSpacing: 18,
        spacingFactor: 1.15,
        padding: 50,
        avoidOverlap: true,
        animate: false,
      },
      userZoomingEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: false,
      minZoom: 0.2,
      maxZoom: 6,
    })

    // Show labels when zoomed in enough
    cy.on('zoom', () => {
      const z = cy.zoom()
      if (z > 1.8) {
        cy.nodes().not('.highlighted').not('.neighbour').addClass('labelled')
      } else {
        cy.nodes().not('.highlighted').not('.neighbour').removeClass('labelled')
      }
      drawRings(cy)
    })

    cy.on('pan', () => drawRings(cy))

    cy.on('layoutstop', () => drawRings(cy))

    cy.on('tap', 'node', evt => {
      onNodeSelect(evt.target.id())
    })

    cy.on('tap', evt => {
      if (evt.target === cy) {
        onNodeSelect(null)
      }
    })

    cy.on('mouseover', 'node', evt => {
      const node = evt.target
      const rp = node.renderedPosition()
      const rect = containerRef.current.getBoundingClientRect()
      setTooltip({
        visible: true,
        x: rp.x + rect.left,
        y: rp.y + rect.top - nodeSize(node.data('tier')) - 10,
        label: node.data('label'),
        sector: node.data('sector'),
      })
    })

    cy.on('mouseout', 'node', () => setTooltip(t => ({ ...t, visible: false })))

    cyRef.current = cy
    if (onCyReady) onCyReady(cy)

    return () => { cy.destroy(); cyRef.current = null }
  }, [darkMode])

  // Ring guide line drawing
  const drawRings = useCallback((cy) => {
    const canvas = ringCanvasRef.current
    if (!canvas || !cy || cy.nodes().length === 0) return
    const ctx = canvas.getContext('2d')
    const w = canvas.width = canvas.offsetWidth
    const h = canvas.height = canvas.offsetHeight
    ctx.clearRect(0, 0, w, h)

    // Group rendered positions by tier
    const tierPositions = {}
    cy.nodes(':visible').forEach(n => {
      const t = n.data('tier')
      const rp = n.renderedPosition()
      if (!tierPositions[t]) tierPositions[t] = []
      tierPositions[t].push(rp)
    })

    if (Object.keys(tierPositions).length === 0) return

    // Compute overall centroid in rendered space
    const all = Object.values(tierPositions).flat()
    const cx = all.reduce((s, p) => s + p.x, 0) / all.length
    const cy2 = all.reduce((s, p) => s + p.y, 0) / all.length

    // Draw a ring for each tier
    ctx.lineDash = []
    Object.entries(tierPositions).forEach(([tier, positions]) => {
      const r = positions.reduce((s, p) =>
        s + Math.sqrt(Math.pow(p.x - cx, 2) + Math.pow(p.y - cy2, 2)), 0) / positions.length
      if (r < 8) return
      ctx.beginPath()
      ctx.arc(cx, cy2, r, 0, Math.PI * 2)
      ctx.strokeStyle = darkMode
        ? 'rgba(100,150,220,0.10)'
        : 'rgba(0,60,140,0.07)'
      ctx.lineWidth = 1
      ctx.stroke()
    })
  }, [darkMode])

  // Sector filter
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return
    cy.elements().removeClass('dimmed')
    if (activeSector) {
      cy.nodes().forEach(n => {
        if (n.data('sector') !== activeSector) n.addClass('dimmed')
      })
      cy.edges().forEach(e => {
        const s = cy.getElementById(e.data('source'))
        const t = cy.getElementById(e.data('target'))
        if (s.hasClass('dimmed') || t.hasClass('dimmed')) e.addClass('dimmed')
      })
    }
    drawRings(cy)
  }, [activeSector, drawRings])

  // Selection highlight + focus view
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return

    cy.elements().removeClass('dimmed highlighted neighbour active')
    cy.nodes().removeClass('labelled')

    if (!selectedNodeId) {
      drawRings(cy)
      return
    }

    const sel = cy.getElementById(selectedNodeId)
    if (!sel.length) return

    if (viewMode === 'focus') {
      // Focus view: show only selected + neighbours
      const neighbourhood = sel.closedNeighborhood()
      cy.elements().addClass('dimmed')
      neighbourhood.removeClass('dimmed')
      sel.connectedEdges().removeClass('dimmed').addClass('active')
      sel.addClass('highlighted')
      sel.connectedNodes().addClass('neighbour')

      // Rearrange to focus layout
      neighbourhood.layout({
        name: 'concentric',
        concentric: ele => ele.id() === selectedNodeId ? 2 : 1,
        levelWidth: () => 1,
        padding: 60,
        animate: true,
        animationDuration: 400,
        fit: true,
      }).run()
    } else {
      // Full view: highlight selected and dim others
      cy.elements().addClass('dimmed')
      sel.removeClass('dimmed').addClass('highlighted')
      sel.connectedEdges().removeClass('dimmed').addClass('active')
      sel.connectedNodes().removeClass('dimmed').addClass('neighbour')
    }

    drawRings(cy)
  }, [selectedNodeId, viewMode, drawRings])

  // Recentre function exposed via onCyReady
  const handleRecentre = () => {
    const cy = cyRef.current
    if (!cy) return
    cy.animate({ fit: { eles: cy.elements(), padding: 50 }, duration: 400 })
  }

  const handleRandom = () => {
    const cy = cyRef.current
    if (!cy) return
    const nodes = cy.nodes()
    const rand = nodes[Math.floor(Math.random() * nodes.length)]
    onNodeSelect(rand.id())
    cy.animate({ center: { eles: rand }, zoom: 2, duration: 400 })
  }

  // Expose controls via ref pattern — attach to container dataset
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current._recentre = handleRecentre
      containerRef.current._random = handleRandom
    }
  })

  return (
    <div className="graph-wrap">
      {/* Ring guide lines canvas */}
      <canvas
        ref={ringCanvasRef}
        className="ring-canvas"
        style={{ pointerEvents: 'none' }}
      />

      {/* Cytoscape container */}
      <div ref={containerRef} className="cy-container" />

      {/* Hover tooltip */}
      {tooltip.visible && (
        <div
          className="node-tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <span
            className="tooltip-dot"
            style={{ background: SECTOR_COLORS[tooltip.sector] }}
          />
          {tooltip.label}
        </div>
      )}

      <p className="graph-hint">Hover to explore · Click to select · Scroll to zoom</p>
    </div>
  )
}
