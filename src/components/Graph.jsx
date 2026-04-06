import React, { useEffect, useRef } from 'react'
import cytoscape from 'cytoscape'
import { NODES, EDGES } from '../data/nodes.js'

const NODE_COLORS = {
  national: '#005EB8',      // NHS Blue
  regional: '#41B6E6',      // NHS Light Blue
  trust: '#00A499',         // NHS Teal
  individual: '#768692',    // NHS Grey
}

const EDGE_COLORS = {
  policy: '#005EB8',
  regulation: '#DA291C',    // NHS Red
  oversight: '#41B6E6',
  employment: '#768692',
  governance: '#768692',
  support: '#00A499',
  advocacy: '#AE2573',      // NHS Purple
  stakeholder: '#005EB8',
  evidence: '#E8EDEE',
}

const SUBTYPE_SHAPES = {
  'policy-owner': 'star',
  'regulator': 'diamond',
  'professional-body': 'hexagon',
  'research-advocacy': 'pentagon',
  'icb': 'roundrectangle',
  'acute': 'rectangle',
  'mental-health': 'rectangle',
  'community': 'rectangle',
  'ambulance': 'rectangle',
  'prison': 'rectangle',
  'primary-care': 'rectangle',
  'preceptee': 'ellipse',
  'preceptor': 'ellipse',
  'trust-lead': 'ellipse',
  'exec': 'ellipse',
}

export default function Graph({ onNodeSelect, selectedNodeId, darkMode }) {
  const containerRef = useRef(null)
  const cyRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const bg = darkMode ? '#0a1628' : '#f0f4f8'
    const labelColor = darkMode ? '#e8edee' : '#1a2332'

    const elements = [
      ...NODES.map(n => ({
        data: {
          id: n.id,
          label: n.label,
          type: n.type,
          subtype: n.subtype,
          tier: n.tier,
        },
        classes: `tier-${n.tier} type-${n.type}`,
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
            'background-color': (ele) => NODE_COLORS[ele.data('type')] || '#768692',
            'shape': (ele) => SUBTYPE_SHAPES[ele.data('subtype')] || 'ellipse',
            'label': 'data(label)',
            'color': labelColor,
            'font-size': (ele) => ele.data('tier') === 0 ? 13 : ele.data('tier') === 1 ? 11 : 10,
            'font-family': '"Frutiger", "Arial", sans-serif',
            'text-wrap': 'wrap',
            'text-max-width': 100,
            'text-valign': 'bottom',
            'text-margin-y': 4,
            'width': (ele) => ele.data('tier') === 0 ? 52 : ele.data('tier') === 1 ? 40 : 32,
            'height': (ele) => ele.data('tier') === 0 ? 52 : ele.data('tier') === 1 ? 40 : 32,
            'border-width': 2,
            'border-color': (ele) => NODE_COLORS[ele.data('type')] || '#768692',
            'border-opacity': 0.6,
          },
        },
        {
          selector: 'node:selected, node.highlighted',
          style: {
            'border-width': 3,
            'border-color': '#FFB81C',  // NHS Warm Yellow
            'border-opacity': 1,
            'overlay-opacity': 0,
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 1.5,
            'line-color': (ele) => EDGE_COLORS[ele.data('edgeType')] || '#768692',
            'line-opacity': darkMode ? 0.4 : 0.3,
            'target-arrow-shape': 'triangle',
            'target-arrow-color': (ele) => EDGE_COLORS[ele.data('edgeType')] || '#768692',
            'target-arrow-opacity': darkMode ? 0.5 : 0.4,
            'curve-style': 'bezier',
            'arrow-scale': 0.8,
          },
        },
        {
          selector: 'edge:selected',
          style: {
            'line-opacity': 0.9,
            'width': 2.5,
          },
        },
        {
          selector: '.dimmed',
          style: {
            'opacity': 0.15,
          },
        },
      ],
      layout: {
        name: 'concentric',
        concentric: (ele) => {
          if (ele.isEdge()) return 0
          const tier = ele.data('tier')
          return tier === 0 ? 4 : tier === 1 ? 3 : tier === 2 ? 2 : 1
        },
        levelWidth: () => 1,
        minNodeSpacing: 40,
        spacingFactor: 1.4,
        padding: 60,
        avoidOverlap: true,
      },
      userZoomingEnabled: true,
      userPanningEnabled: true,
      boxSelectionEnabled: false,
      autounselectify: false,
    })

    cy.on('tap', 'node', (evt) => {
      const id = evt.target.id()
      onNodeSelect(id)
    })

    cy.on('tap', (evt) => {
      if (evt.target === cy) {
        onNodeSelect(null)
        cy.elements().removeClass('dimmed highlighted')
      }
    })

    cyRef.current = cy

    return () => {
      cy.destroy()
      cyRef.current = null
    }
  }, [darkMode])

  // Highlight selected node
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return

    cy.elements().removeClass('dimmed highlighted')

    if (selectedNodeId) {
      const selected = cy.getElementById(selectedNodeId)
      if (selected.length) {
        const connected = selected.connectedEdges().connectedNodes()
        cy.elements().addClass('dimmed')
        selected.removeClass('dimmed').addClass('highlighted')
        connected.removeClass('dimmed')
        selected.connectedEdges().removeClass('dimmed')
      }
    }
  }, [selectedNodeId])

  return (
    <div className="graph-container">
      <div ref={containerRef} className="cy-container" />
      <div className="graph-legend">
        <div className="legend-title">Entity Type</div>
        {Object.entries(NODE_COLORS).map(([type, color]) => (
          <div key={type} className="legend-item">
            <span className="legend-dot" style={{ background: color }} />
            <span className="legend-label">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </div>
        ))}
        <div className="legend-title legend-title--edge">Relationship</div>
        <div className="legend-item">
          <span className="legend-line" style={{ background: EDGE_COLORS.regulation }} />
          <span className="legend-label">Regulation</span>
        </div>
        <div className="legend-item">
          <span className="legend-line" style={{ background: EDGE_COLORS.oversight }} />
          <span className="legend-label">Oversight</span>
        </div>
        <div className="legend-item">
          <span className="legend-line" style={{ background: EDGE_COLORS.support }} />
          <span className="legend-label">Support</span>
        </div>
        <div className="legend-item">
          <span className="legend-line" style={{ background: EDGE_COLORS.advocacy }} />
          <span className="legend-label">Advocacy</span>
        </div>
      </div>
      <div className="graph-hint">
        Click any node for details · Scroll to zoom · Drag to pan
      </div>
    </div>
  )
}
