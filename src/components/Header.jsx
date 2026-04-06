import React from 'react'
import { SECTOR_COLORS, SECTOR_LABELS } from '../data/nodes.js'

// Simple network graph SVG icon — no NHS branding
function NetworkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="3.5" fill="white" />
      <circle cx="5"  cy="5"  r="2.5" fill="rgba(255,255,255,0.75)" />
      <circle cx="23" cy="5"  r="2.5" fill="rgba(255,255,255,0.75)" />
      <circle cx="5"  cy="23" r="2.5" fill="rgba(255,255,255,0.75)" />
      <circle cx="23" cy="23" r="2.5" fill="rgba(255,255,255,0.75)" />
      <circle cx="14" cy="3"  r="2"   fill="rgba(255,255,255,0.55)" />
      <line x1="14" y1="14" x2="5"  y2="5"  stroke="white" strokeWidth="1.4" strokeOpacity="0.7" />
      <line x1="14" y1="14" x2="23" y2="5"  stroke="white" strokeWidth="1.4" strokeOpacity="0.7" />
      <line x1="14" y1="14" x2="5"  y2="23" stroke="white" strokeWidth="1.4" strokeOpacity="0.7" />
      <line x1="14" y1="14" x2="23" y2="23" stroke="white" strokeWidth="1.4" strokeOpacity="0.7" />
      <line x1="14" y1="14" x2="14" y2="3"  stroke="white" strokeWidth="1.4" strokeOpacity="0.7" />
    </svg>
  )
}

export default function Header({
  darkMode, onToggleDark,
  onFramework, onGaps, onSearch,
  activePanel,
  activeSector, onSectorFilter,
}) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <div className="header-logo">
            <NetworkIcon />
            <div className="logo-text">
              <span className="logo-title">Preceptorship Transparency</span>
              <span className="logo-sub">NHS England Accountability Map</span>
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <button className={`nav-btn ${activePanel === 'framework' ? 'active' : ''}`} onClick={onFramework}>
            📋 Framework
          </button>
          <button className={`nav-btn nav-btn--gaps ${activePanel === 'gaps' ? 'active' : ''}`} onClick={onGaps}>
            ⚠ Gaps
          </button>
          <button className={`nav-btn ${activePanel === 'search' ? 'active' : ''}`} onClick={onSearch}>
            🔍 Search
          </button>
          <button className="nav-btn nav-btn--icon" onClick={onToggleDark} title="Toggle dark/light mode">
            {darkMode ? '☀' : '☾'}
          </button>
        </nav>
      </div>

      <div className="sector-bar">
        <span className="sector-bar-label">Filter:</span>
        <div className="sector-pills">
          <button
            className={`sector-pill ${!activeSector ? 'active' : ''}`}
            style={!activeSector ? { background: '#444', borderColor: '#444' } : {}}
            onClick={() => onSectorFilter(null)}
          >
            All
          </button>
          {Object.entries(SECTOR_LABELS).map(([key, label]) => (
            <button
              key={key}
              className={`sector-pill ${activeSector === key ? 'active' : ''}`}
              style={activeSector === key
                ? { background: SECTOR_COLORS[key], borderColor: SECTOR_COLORS[key], color: 'white' }
                : { borderColor: SECTOR_COLORS[key], color: SECTOR_COLORS[key] }
              }
              onClick={() => onSectorFilter(activeSector === key ? null : key)}
            >
              <span
                className="sector-dot"
                style={{ background: SECTOR_COLORS[key] }}
              />
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
