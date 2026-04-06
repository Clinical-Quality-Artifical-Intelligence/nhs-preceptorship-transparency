import React, { useState } from 'react'
import { ACCOUNTABILITY_GAPS, AVAILABLE_DATA } from '../data/gaps.js'

const SEVERITY_CONFIG = {
  critical: { label: 'Critical gap', color: '#DA291C' },
  high: { label: 'High priority', color: '#ED8B00' },
  medium: { label: 'Medium priority', color: '#FFB81C' },
}

export default function GapsPanel({ onClose }) {
  const [view, setView] = useState('gaps') // 'gaps' | 'available'

  return (
    <aside className="panel gaps-panel">
      <div className="panel-header">
        <div className="panel-title-row">
          <span className="type-badge" style={{ background: '#DA291C' }}>Accountability</span>
          <button className="close-btn" onClick={onClose} aria-label="Close panel">✕</button>
        </div>
        <h2 className="panel-title">Transparency &amp; Accountability Gaps</h2>
        <p className="panel-subtitle">
          Data that should exist but doesn't — and what is available
        </p>
      </div>

      <div className="panel-tabs">
        <button className={`tab-btn ${view === 'gaps' ? 'active' : ''}`} onClick={() => setView('gaps')}>
          Missing Data ({ACCOUNTABILITY_GAPS.length})
        </button>
        <button className={`tab-btn ${view === 'available' ? 'active' : ''}`} onClick={() => setView('available')}>
          Available Data ({AVAILABLE_DATA.length})
        </button>
      </div>

      <div className="panel-body">
        {view === 'gaps' && (
          <div>
            <div className="gaps-preamble">
              <p>The NHS Long Term Workforce Plan (2023) explicitly acknowledges that <em>"the quality of preceptorships varies"</em> — yet there is no national mechanism to measure, monitor, or publish that variation. These are the specific data gaps.</p>
            </div>

            <div className="severity-key">
              {Object.entries(SEVERITY_CONFIG).map(([sev, cfg]) => (
                <div key={sev} className="severity-key-item">
                  <span className="severity-dot" style={{ background: cfg.color }} />
                  <span>{cfg.label}</span>
                </div>
              ))}
            </div>

            <ul className="full-gap-list">
              {ACCOUNTABILITY_GAPS.map(gap => {
                const sev = SEVERITY_CONFIG[gap.severity]
                return (
                  <li key={gap.id} className="full-gap-item">
                    <div className="full-gap-header">
                      <span className="severity-dot" style={{ background: sev.color }} />
                      <h3 className="full-gap-title">{gap.title}</h3>
                    </div>
                    <p className="full-gap-desc">{gap.description}</p>
                    <div className="full-gap-what">
                      <strong>What should exist:</strong>
                      <p>{gap.whatShouldExist}</p>
                    </div>
                    <div className="full-gap-who">
                      <strong>Accountable body:</strong> {gap.whoIsAccountable}
                    </div>
                    {gap.whereToLook && (
                      <div className="full-gap-proxy">
                        <strong>Nearest available proxy:</strong> {gap.whereToLook}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {view === 'available' && (
          <div>
            <div className="gaps-preamble">
              <p>The following data sources are publicly available and can be used to build partial pictures of preceptorship quality across NHS trusts.</p>
            </div>
            <ul className="available-list">
              {AVAILABLE_DATA.map(d => (
                <li key={d.id} className="available-item">
                  <h3 className="available-title">{d.title}</h3>
                  <p className="available-desc">{d.description}</p>
                  <div className="available-meta">
                    <span className="available-format">Format: {d.format}</span>
                    <span className="available-coverage">Coverage: {d.coverage}</span>
                  </div>
                  <div className="available-limitations">
                    <strong>Limitations:</strong> {d.limitations}
                  </div>
                  {d.url && (
                    <a className="source-link" href={d.url} target="_blank" rel="noopener noreferrer">
                      Access data →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}
