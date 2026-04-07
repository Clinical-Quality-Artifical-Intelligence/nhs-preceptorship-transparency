import React, { useState } from 'react'
import { EDGES, SECTOR_COLORS, SECTOR_LABELS } from '../data/nodes.js'

export default function DetailPanel({ node, onClose }) {
  const [activeTab, setActiveTab] = useState('info')

  if (!node) return null

  const outgoing = EDGES.filter(e => e.source === node.id)
  const incoming = EDGES.filter(e => e.target === node.id)
  const hasRequirements = node.mustDo?.length || node.goldStandard?.length || node.requirements?.length || node.rights?.length
  const hasPowers = node.powers?.length
  const hasGaps = node.accountability_gaps?.length

  const tabs = [
    { id: 'info', label: 'Info' },
    ...(hasPowers ? [{ id: 'powers', label: 'Powers' }] : []),
    ...(hasRequirements ? [{ id: 'requirements', label: 'Requirements' }] : []),
    ...(hasGaps ? [{ id: 'gaps', label: `Gaps (${node.accountability_gaps.length})` }] : []),
  ]

  const sectorColor = SECTOR_COLORS[node.sector] || '#768692'
  const sectorLabel = SECTOR_LABELS[node.sector] || node.sector

  return (
    <aside className="detail-panel">
      <div className="dp-header">
        <div className="dp-badge-row">
          <span className="dp-sector-badge" style={{ background: sectorColor }}>
            {sectorLabel}
          </span>
          <button className="dp-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <h2 className="dp-title">{node.label}</h2>
        {node.count && <p className="dp-count">{node.count.toLocaleString()} organisations</p>}
      </div>

      <div className="dp-tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`dp-tab ${activeTab === t.id ? 'dp-tab--active' : ''}`}
            onClick={() => setActiveTab(t.id)}
            style={activeTab === t.id ? { borderBottomColor: sectorColor, color: sectorColor } : {}}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="dp-body">

        {activeTab === 'info' && (
          <>
            <p className="dp-description">{node.description}</p>

            {outgoing.length > 0 && (
              <div className="dp-rels">
                <h3 className="dp-rel-heading">Connects to</h3>
                <ul className="dp-rel-list">
                  {outgoing.map((e, i) => (
                    <li key={i} className="dp-rel-item" style={{ borderLeftColor: sectorColor }}>
                      <span className="dp-rel-target">{e.target}</span>
                      <span className="dp-rel-verb">{e.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {incoming.length > 0 && (
              <div className="dp-rels">
                <h3 className="dp-rel-heading">Connected from</h3>
                <ul className="dp-rel-list">
                  {incoming.map((e, i) => (
                    <li key={i} className="dp-rel-item" style={{ borderLeftColor: '#95a5a6' }}>
                      <span className="dp-rel-target">{e.source}</span>
                      <span className="dp-rel-verb">{e.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {node.url && (
              <a className="dp-source-link" href={node.url} target="_blank" rel="noopener noreferrer">
                Official source →
              </a>
            )}
          </>
        )}

        {activeTab === 'powers' && (
          <>
            <h3 className="dp-section-heading">Powers, Duties &amp; Functions</h3>
            <ul className="dp-powers-list">
              {node.powers?.map((p, i) => (
                <li key={i} className="dp-power-item">
                  <p className="dp-power-text">{p.text}</p>
                  <p className="dp-power-source">{p.source}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 'requirements' && (
          <>
            {node.mustDo?.length > 0 && (
              <>
                <h3 className="dp-section-heading dp-section-heading--core">Core Standard</h3>
                <ul className="dp-req-list">
                  {node.mustDo.map((r, i) => (
                    <li key={i} className="dp-req-item dp-req-item--core">{r}</li>
                  ))}
                </ul>
              </>
            )}
            {node.goldStandard?.length > 0 && (
              <>
                <h3 className="dp-section-heading dp-section-heading--gold">Gold Standard</h3>
                <ul className="dp-req-list">
                  {node.goldStandard.map((r, i) => (
                    <li key={i} className="dp-req-item dp-req-item--gold">{r}</li>
                  ))}
                </ul>
              </>
            )}
            {node.requirements?.length > 0 && (
              <>
                <h3 className="dp-section-heading">Role Requirements</h3>
                <ul className="dp-req-list">
                  {node.requirements.map((r, i) => (
                    <li key={i} className="dp-req-item dp-req-item--core">{r}</li>
                  ))}
                </ul>
              </>
            )}
            {node.rights?.length > 0 && (
              <>
                <h3 className="dp-section-heading">Your Rights as a Preceptee</h3>
                <ul className="dp-req-list">
                  {node.rights.map((r, i) => (
                    <li key={i} className="dp-req-item dp-req-item--rights">{r}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        {activeTab === 'gaps' && (
          <>
            <div className="dp-gap-intro">
              <p>Accountability gaps for this entity — data that should be publicly available but is not.</p>
            </div>
            <ul className="dp-gap-list">
              {node.accountability_gaps?.map((g, i) => (
                <li key={i} className="dp-gap-item">⚠ {g}</li>
              ))}
            </ul>
          </>
        )}

      </div>
    </aside>
  )
}
