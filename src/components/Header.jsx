import React, { useState } from 'react'
import { SECTOR_COLORS, SECTOR_LABELS } from '../data/nodes.js'

function NetworkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="3" fill="white" />
      <circle cx="4"  cy="5"  r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="22" cy="5"  r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="4"  cy="21" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="22" cy="21" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="13" cy="2"  r="1.5" fill="rgba(255,255,255,0.5)" />
      <line x1="13" y1="13" x2="4"  y2="5"  stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
      <line x1="13" y1="13" x2="22" y2="5"  stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
      <line x1="13" y1="13" x2="4"  y2="21" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
      <line x1="13" y1="13" x2="22" y2="21" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
      <line x1="13" y1="13" x2="13" y2="2"  stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
    </svg>
  )
}

export default function Header({
  onSearch, activePanel,
  activeSector, onSectorFilter,
  onPanelToggle,
}) {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <NetworkIcon />
          <div>
            <div className="brand-title">Preceptorship Transparency</div>
            <div className="brand-sub">
              Explore accountability for newly registered nurses &amp; AHPs in England · by{' '}
              <a href="https://github.com/Clinical-Quality-Artifical-Intelligence" target="_blank" rel="noopener noreferrer">
                CQAI
              </a>
            </div>
          </div>
        </div>

        <nav className="header-nav">
          <button
            className="hdr-btn"
            onClick={() => setShowCategories(c => !c)}
          >
            <span>⬡</span> Categories
          </button>
          <button
            className={`hdr-btn ${activePanel === 'framework' ? 'hdr-btn--active' : ''}`}
            onClick={() => onPanelToggle('framework')}
          >
            <span>📋</span> Framework
          </button>
          <button
            className={`hdr-btn ${activePanel === 'gaps' ? 'hdr-btn--active' : ''}`}
            onClick={() => onPanelToggle('gaps')}
          >
            <span>⚠</span> Gaps
          </button>
          <button
            className={`hdr-btn ${activePanel === 'search' ? 'hdr-btn--active' : ''}`}
            onClick={onSearch}
          >
            <span>🔍</span> Search
          </button>
        </nav>
      </div>

      {/* Categories dropdown */}
      {showCategories && (
        <div className="categories-dropdown">
          <div className="cat-title">Filter by sector</div>
          <div className="cat-grid">
            <button
              className={`cat-item ${!activeSector ? 'cat-item--active' : ''}`}
              onClick={() => { onSectorFilter(null); setShowCategories(false) }}
            >
              <span className="cat-dot" style={{ background: '#64748b' }} />
              All sectors
            </button>
            {Object.entries(SECTOR_LABELS).map(([key, label]) => (
              <button
                key={key}
                className={`cat-item ${activeSector === key ? 'cat-item--active' : ''}`}
                onClick={() => {
                  onSectorFilter(activeSector === key ? null : key)
                  setShowCategories(false)
                }}
              >
                <span className="cat-dot" style={{ background: SECTOR_COLORS[key] }} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
