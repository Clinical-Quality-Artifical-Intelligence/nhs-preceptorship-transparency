import React, { useEffect, useRef } from 'react'
import cytoscape from 'cytoscape'
import { NODES, EDGES, SECTOR_COLORS } from '../data/nodes.js'

const EDGE_COLORS = {
  policy:      '#005EB8',
  regulation:  '#C62828',
  oversight:   '#41B6E6',
  employment:  '#768692',
  governance:  '#768692',
  support:     '#00A499',
  advocacy:    '#AE2573',
  stakeholder: '#005EB8',
  evidence:    '#2E7D32',
}

const SUBTYPE_SHAPES = {
  'policy-owner':    'star',
  'government':      'star',
  'regulator':       'diamond',
  'professional-body': 'hexagon',
  'research-advocacy': 'pentagon',
  'federation':      'pentagon',
  'icb':             'roundrectangle',
  'acute':           'rectangle',
  'mental-health':   'rectangle',
  'community':       'rectangle',
  'ambulance':       'rectangle',
  'prison':          'rectangle',
  'primary-care':    'rectangle',
  'university':      'triangle',
  'union':           'hexagon',
  'ombudsman':       'diamond',
  'investigator':    'diamond',
  'guardian':        'ellipse',
  'charity':         'ellipse',
  'think-tank':      'ellipse',
  'platform':        'ellipse',
  'training':        'ellipse',
  'preceptee':       'ellipse',
  'preceptor':       'ellipse',
  'trust-lead':      'ellipse',
  'exec':            'ellipse',
}

export default function Graph({ onNodeSelect, selectedNodeId, darkMode, activeSector }) {
  const containerRef = useRef(null)
  const cyRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const labelColor = darkMode ? '#e8edee' : '#1a2332'

    const elements = [
      ...NODES.map(n => ({
        data: {
          id: n.id,
          label: n.label,
          type: n.type,
          subtype: n.subtype,
          sector: n.sector,
          tier: n.tier,
        },
        classes: `tier-${n.tier} sector-${n.sector}`,
      })),
      ...EDGES.map((e, i) => ({
        data: {
          id: `e-${i}`,
          source: e.source,
          target: e.target,
          label: e.label,
          edgeType: e.type,
        },
        classes: `edge-${e.type}`,
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
            'label': 'data(label)',
            'color': labelColor,
            'font-size': ele => {
              const t = ele.data('tier')
              return t === 0 ? 13 : t === 1 ? 11 : 10
            },
            'font-family': '"Frutiger", "Arial", sans-serif',
            'text-wrap': 'wrap',
            'text-max-width': 90,
            'text-valign': 'bottom',
            'text-margin-y': 4,
            'width': ele => {
              const t = ele.data('tier')
              return t === 0 ? 52 : t === 1 ? 38 : t === 2 ? 28 : 22
            },
            'height': ele => {
              const t = ele.data('tier')
              return t === 0 ? 52 : t === 1 ? 38 : t === 2 ? 28 : 22
            },
            'border-width': 2,
            'border-color': ele => SECTOR_COLORS[ele.data('sector')] || '#768692',
            'border-opacity': 0.5,
          },
        },
        {
          selector: 'node.highlighted',
          style: {
            'border-width': 4,
            'border-color': '#FFB81C',
            'border-opacity': 1,
            'overlay-opacity': 0,
            'z-index': 999,
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 1.2,
            'line-color': ele => EDGE_COLORS[ele.data('edgeType')] || '#768692',
            'line-opacity': darkMode ? 0.35 : 0.25,
            'target-arrow-shape': 'triangle',
            'target-arrow-color': ele => EDGE_COLORS[ele.data('edgeType')] || '#768692',
            'target-arrow-opacity': darkMode ? 0.45 : 0.35,
            'curve-style': 'bezier',
            'arrow-scale': 0.7,
          },
        },
        {
          selector: 'node.dimmed, edge.dimmed',
          style: { 'opacity': 0.08 },
        },
        {
          selector: 'node.sector-hidden, edge.sector-hidden',
          style: { 'display': 'none' },
        },
      ],
      layout: {
        name: 'concentric',
        concentric: ele => {
          if (ele.isEdge()) return 0
          const t = ele.data('tier')
          return t === 0 ? 5 : t === 1 ? 4 : t === 2 ? 3 : t === 3 ? 2 : 1
        },
        levelWidth: () => 1,
        minNodeSpacing: 22,
        spacingFactor: 1.1,
        padding: 60,
        avoidOverlap: true,
      },
      userZoomingEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: false,
      autounselectify: false,
    })

    cy.on('tap', 'node', evt => {
      onNodeSelect(evt.target.id())
    })

    cy.on('tap', evt => {
      if (evt.target === cy) {
        onNodeSelect(null)
        cy.elements().removeClass('dimmed highlighted sector-hidden')
      }
    })

    cyRef.current = cy
    return () => { cy.destroy(); cyRef.current = null }
  }, [darkMode])

  // Sector filter
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return
    cy.elements().removeClass('sector-hidden')
    if (activeSector) {
      cy.nodes().forEach(n => {
        if (n.data('sector') !== activeSector) {
          n.addClass('sector-hidden')
        }
      })
      cy.edges().forEach(e => {
        const src = cy.getElementById(e.data('source'))
        const tgt = cy.getElementById(e.data('target'))
        if (src.hasClass('sector-hidden') || tgt.hasClass('sector-hidden')) {
          e.addClass('sector-hidden')
        }
      })
    }
  }, [activeSector])

  // Highlight selected node
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return
    cy.elements().removeClass('dimmed highlighted')
    if (selectedNodeId) {
      const sel = cy.getElementById(selectedNodeId)
      if (sel.length) {
        cy.elements().addClass('dimmed')
        sel.removeClass('dimmed').addClass('highlighted')
        sel.connectedEdges().removeClass('dimmed')
        sel.connectedEdges().connectedNodes().removeClass('dimmed')
      }
    }
  }, [selectedNodeId])

  return (
    <div className="graph-container">
      <div ref={containerRef} className="cy-container" />
      <div className="graph-hint">
        Click any node for details · Scroll to zoom · Drag to pan
      </div>
    </div>
  )
}
