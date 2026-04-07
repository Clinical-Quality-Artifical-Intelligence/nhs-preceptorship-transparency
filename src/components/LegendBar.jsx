import React from 'react'
import { SECTOR_COLORS, SECTOR_LABELS } from '../data/nodes.js'

const SHAPE_LEGEND = [
  { shape: 'star',     label: 'Gov / Policy owner' },
  { shape: 'diamond',  label: 'Regulator' },
  { shape: 'hexagon',  label: 'Professional body / Union' },
  { shape: 'triangle', label: 'University / HEI' },
  { shape: 'rect',     label: 'NHS Trust' },
  { shape: 'circle',   label: 'Service / Individual role' },
]

function ShapeIcon({ shape }) {
  const s = 10
  switch (shape) {
    case 'star': return (
      <svg width={s+2} height={s+2} viewBox="0 0 12 12">
        <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9 3,11 3.5,7.5 1,5 4.5,4.5" fill="currentColor" />
      </svg>
    )
    case 'diamond': return (
      <svg width={s} height={s} viewBox="0 0 10 10">
        <polygon points="5,0 10,5 5,10 0,5" fill="currentColor" />
      </svg>
    )
    case 'hexagon': return (
      <svg width={s} height={s} viewBox="0 0 10 10">
        <polygon points="5,0 9.3,2.5 9.3,7.5 5,10 0.7,7.5 0.7,2.5" fill="currentColor" />
      </svg>
    )
    case 'triangle': return (
      <svg width={s} height={s} viewBox="0 0 10 10">
        <polygon points="5,0 10,10 0,10" fill="currentColor" />
      </svg>
    )
    case 'rect': return (
      <svg width={s} height={s-2} viewBox="0 0 10 8">
        <rect width="10" height="8" fill="currentColor" />
      </svg>
    )
    default: return (
      <svg width={s} height={s} viewBox="0 0 10 10">
        <circle cx="5" cy="5" r="5" fill="currentColor" />
      </svg>
    )
  }
}

export default function LegendBar({ visible, darkMode }) {
  if (!visible) return null

  return (
    <div className="legend-bar">
      <div className="legend-section">
        <span className="legend-section-title">Sector</span>
        <div className="legend-items">
          {Object.entries(SECTOR_LABELS).map(([key, label]) => (
            <div key={key} className="legend-item">
              <span className="legend-dot" style={{ background: SECTOR_COLORS[key] }} />
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="legend-divider" />

      <div className="legend-section">
        <span className="legend-section-title">Shape</span>
        <div className="legend-items">
          {SHAPE_LEGEND.map(({ shape, label }) => (
            <div key={shape} className="legend-item">
              <span className="legend-shape" style={{ color: darkMode ? '#8baed4' : '#4a6fa5' }}>
                <ShapeIcon shape={shape} />
              </span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="legend-divider" />

      <div className="legend-section legend-section--ring">
        <span className="legend-section-title">Ring</span>
        <div className="legend-items">
          {[
            { label: 'National policy & regulation', tier: 0 },
            { label: 'Sector leads & ICBs', tier: 1 },
            { label: 'Organisations', tier: 2 },
            { label: 'Universities & individual roles', tier: 3 },
          ].map(({ label, tier }) => (
            <div key={tier} className="legend-item">
              <span className="legend-tier">{tier + 1}</span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
