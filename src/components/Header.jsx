import React from 'react'

export default function Header({ darkMode, onToggleDark, onFramework, onGaps, onSearch, activePanel }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <span className="logo-nhs">NHS</span>
          <span className="logo-title">Preceptorship Transparency</span>
        </div>
        <p className="header-strapline">
          Who is accountable for newly registered nurses? Where are the gaps?
        </p>
      </div>

      <nav className="header-nav">
        <button
          className={`nav-btn ${activePanel === 'framework' ? 'active' : ''}`}
          onClick={onFramework}
          title="View the Core and Gold Standard framework requirements"
        >
          📋 Framework
        </button>
        <button
          className={`nav-btn nav-btn--gaps ${activePanel === 'gaps' ? 'active' : ''}`}
          onClick={onGaps}
          title="View accountability gaps — data that should exist but doesn't"
        >
          ⚠ Gaps
        </button>
        <button
          className={`nav-btn ${activePanel === 'search' ? 'active' : ''}`}
          onClick={onSearch}
          title="Search all entities"
        >
          🔍 Search
        </button>
        <button
          className="nav-btn nav-btn--icon"
          onClick={onToggleDark}
          title="Toggle dark/light mode"
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  )
}
