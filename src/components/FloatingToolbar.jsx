import React from 'react'

export default function FloatingToolbar({
  viewMode, onViewMode,
  showLegend, onToggleLegend,
  darkMode, onToggleDark,
  onRecentre, onRandom,
  graphRef,
}) {
  const handleRecentre = () => {
    if (graphRef?.current?._recentre) graphRef.current._recentre()
    else if (onRecentre) onRecentre()
  }

  const handleRandom = () => {
    if (graphRef?.current?._random) graphRef.current._random()
    else if (onRandom) onRandom()
  }

  return (
    <div className="floating-toolbar">
      <div className="toolbar-group">
        <button
          className={`tb-btn ${viewMode === 'full' ? 'tb-btn--active' : ''}`}
          onClick={() => onViewMode('full')}
          title="Full view — all entities in rings"
        >
          <TbIcon d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm0 3a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
          Full
        </button>
        <button
          className={`tb-btn ${viewMode === 'focus' ? 'tb-btn--active' : ''}`}
          onClick={() => onViewMode('focus')}
          title="Radial view — focus on selected entity"
        >
          <TbIcon d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 11h2a7 7 0 0 1 7-7V2C6.477 2 2 6.477 2 12h1zm16 0h1A9 9 0 0 0 12 3V2a10 10 0 0 1 10 10h-1a9 9 0 0 0-9-9v1a8 8 0 0 1 8 8z" />
          Radial
        </button>
      </div>

      <div className="toolbar-divider" />

      <div className="toolbar-group">
        <button className="tb-btn tb-btn--icon" onClick={handleRecentre} title="Re-centre graph">
          <TbIcon d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
        </button>
        <button className="tb-btn tb-btn--icon" onClick={handleRandom} title="Jump to random entity">
          <TbIcon d="M6.5 2.8L5.1 4.2 6.9 6H4v2h5.9l2 2-2 2H4v2h2.9l-1.8 1.8 1.4 1.4L9 19v-3h2l1 1-1 1H9v3l2.5 2.5 2.5-2.5v-3h-2l-1-1 1-1h2v-3l2.5-2.5-2.5-2.5V9h-2l-1 1-1-1h2V6h-2.9l1.8-1.8L12.5 2.8 10 5.3 7.5 2.8z" />
        </button>
        <button
          className={`tb-btn tb-btn--icon ${showLegend ? 'tb-btn--active' : ''}`}
          onClick={onToggleLegend}
          title="Toggle legend"
        >
          <TbIcon d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
        </button>
        <button
          className={`tb-btn tb-btn--icon ${darkMode ? 'tb-btn--active' : ''}`}
          onClick={onToggleDark}
          title="Toggle dark mode"
        >
          {darkMode
            ? <TbIcon d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2v-2H2v2zm18 0h2v-2h-2v2zM11 2v2h2V2h-2zm0 18v2h2v-2h-2zM5.99 4.58l-1.42 1.42 1.41 1.41 1.42-1.42L5.99 4.58zm12.03 12.03l-1.42 1.42 1.41 1.41 1.42-1.42-1.41-1.41zM4.57 18.01l1.42 1.42 1.41-1.41-1.42-1.42-1.41 1.41zM16.6 6.97l1.42 1.42 1.41-1.41-1.42-1.42-1.41 1.41z" />
            : <TbIcon d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          }
        </button>
      </div>
    </div>
  )
}

function TbIcon({ d }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
