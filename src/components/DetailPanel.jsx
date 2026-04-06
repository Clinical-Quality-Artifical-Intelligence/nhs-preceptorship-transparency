import React, { useState } from 'react'
import { EDGES } from '../data/nodes.js'

const TAB_LABELS = {
  info: 'Info',
  powers: 'Powers & Duties',
  requirements: 'Requirements',
  gaps: 'Gaps',
}

export default function DetailPanel({ node, onClose, darkMode }) {
  const [activeTab, setActiveTab] = useState('info')

  const outgoing = EDGES.filter(e => e.source === node.id)
  const incoming = EDGES.filter(e => e.target === node.id)

  const hasPowers = node.powers?.length > 0
  const hasRequirements = node.mustDo?.length > 0 || node.goldStandard?.length > 0 || node.requirements?.length > 0 || node.rights?.length > 0
  const hasGaps = node.accountability_gaps?.length > 0

  const tabs = [
    'info',
    ...(hasPowers ? ['powers'] : []),
    ...(hasRequirements ? ['requirements'] : []),
    ...(hasGaps ? ['gaps'] : []),
  ]

  const TYPE_BADGE = {
    national: { label: 'National Body', color: '#005EB8' },
    regional: { label: 'Regional Body', color: '#41B6E6' },
    trust: { label: 'NHS Trust', color: '#00A499' },
    individual: { label: 'Individual Role', color: '#768692' },
  }

  const badge = TYPE_BADGE[node.type]

  return (
    <aside className="panel detail-panel">
      <div className="panel-header">
        <div className="panel-title-row">
          <span className="type-badge" style={{ background: badge?.color }}>{badge?.label}</span>
          <button className="close-btn" onClick={onClose} aria-label="Close panel">✕</button>
        </div>
        <h2 className="panel-title">{node.label}</h2>
        {node.count && (
          <p className="panel-count">{node.count} organisations</p>
        )}
      </div>

      <div className="panel-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {TAB_LABELS[tab]}
            {tab === 'gaps' && node.accountability_gaps?.length > 0 && (
              <span className="gap-badge">{node.accountability_gaps.length}</span>
            )}
          </button>
        ))}
      </div>

      <div className="panel-body">
        {activeTab === 'info' && (
          <div>
            <p className="panel-description">{node.description}</p>

            {outgoing.length > 0 && (
              <div className="relationships">
                <h3 className="rel-heading">Relationships (outgoing)</h3>
                <ul className="rel-list">
                  {outgoing.map((e, i) => (
                    <li key={i} className="rel-item">
                      <span className={`rel-type rel-type--${e.type}`}>{e.type}</span>
                      <span className="rel-arrow">→</span>
                      <span className="rel-target">{e.target}</span>
                      <span className="rel-label">({e.label})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {incoming.length > 0 && (
              <div className="relationships">
                <h3 className="rel-heading">Relationships (incoming)</h3>
                <ul className="rel-list">
                  {incoming.map((e, i) => (
                    <li key={i} className="rel-item">
                      <span className="rel-source">{e.source}</span>
                      <span className="rel-arrow">→</span>
                      <span className={`rel-type rel-type--${e.type}`}>{e.type}</span>
                      <span className="rel-label">({e.label})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {node.url && (
              <a className="source-link" href={node.url} target="_blank" rel="noopener noreferrer">
                Official source →
              </a>
            )}
          </div>
        )}

        {activeTab === 'powers' && (
          <div>
            <h3 className="section-heading">Powers, Duties &amp; Functions</h3>
            <ul className="powers-list">
              {node.powers?.map((p, i) => (
                <li key={i} className="power-item">
                  <span className="power-text">{p.text}</span>
                  <span className="power-source">{p.source}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div>
            {node.mustDo?.length > 0 && (
              <>
                <h3 className="section-heading core-heading">Core Standard Requirements</h3>
                <ul className="req-list">
                  {node.mustDo.map((r, i) => (
                    <li key={i} className="req-item req-item--core">{r}</li>
                  ))}
                </ul>
              </>
            )}
            {node.goldStandard?.length > 0 && (
              <>
                <h3 className="section-heading gold-heading">Gold Standard Requirements</h3>
                <ul className="req-list">
                  {node.goldStandard.map((r, i) => (
                    <li key={i} className="req-item req-item--gold">{r}</li>
                  ))}
                </ul>
              </>
            )}
            {node.requirements?.length > 0 && (
              <>
                <h3 className="section-heading">Role Requirements</h3>
                <ul className="req-list">
                  {node.requirements.map((r, i) => (
                    <li key={i} className="req-item req-item--core">{r}</li>
                  ))}
                </ul>
              </>
            )}
            {node.rights?.length > 0 && (
              <>
                <h3 className="section-heading">Your Rights as a Preceptee</h3>
                <ul className="req-list">
                  {node.rights.map((r, i) => (
                    <li key={i} className="req-item req-item--rights">{r}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {activeTab === 'gaps' && (
          <div>
            <div className="gaps-intro">
              <span className="gaps-warning">⚠</span>
              <p>The following accountability gaps exist for this entity — data that <em>should</em> be publicly available but is not.</p>
            </div>
            <ul className="gap-list">
              {node.accountability_gaps?.map((g, i) => (
                <li key={i} className="gap-item">{g}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}
