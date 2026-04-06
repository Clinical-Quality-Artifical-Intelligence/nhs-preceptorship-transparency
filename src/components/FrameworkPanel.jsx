import React, { useState } from 'react'
import { FRAMEWORK_PILLARS, FRAMEWORK_META } from '../data/framework.js'

export default function FrameworkPanel({ onClose }) {
  const [view, setView] = useState('pillars') // 'pillars' | 'nmc' | 'midwifery'

  return (
    <aside className="panel framework-panel">
      <div className="panel-header">
        <div className="panel-title-row">
          <span className="type-badge" style={{ background: '#005EB8' }}>NHS Framework</span>
          <button className="close-btn" onClick={onClose} aria-label="Close panel">✕</button>
        </div>
        <h2 className="panel-title">National Preceptorship Framework</h2>
        <p className="panel-subtitle">
          NHS England · Published October 2022 · Core deadline: September 2023
        </p>
      </div>

      <div className="panel-tabs">
        <button className={`tab-btn ${view === 'pillars' ? 'active' : ''}`} onClick={() => setView('pillars')}>
          Core vs Gold
        </button>
        <button className={`tab-btn ${view === 'nmc' ? 'active' : ''}`} onClick={() => setView('nmc')}>
          NMC Principles
        </button>
        <button className={`tab-btn ${view === 'midwifery' ? 'active' : ''}`} onClick={() => setView('midwifery')}>
          Midwifery
        </button>
      </div>

      <div className="panel-body">
        {view === 'pillars' && (
          <div>
            <div className="framework-intro">
              <div className="standard-key">
                <span className="standard-pill standard-pill--core">Core</span>
                <span className="standard-desc">Minimum — all trusts expected to achieve by Sept 2023</span>
              </div>
              <div className="standard-key">
                <span className="standard-pill standard-pill--gold">Gold</span>
                <span className="standard-desc">Aspirational best practice</span>
              </div>
            </div>

            <div className="pillars-list">
              {FRAMEWORK_PILLARS.map(pillar => (
                <div key={pillar.id} className="pillar-card">
                  <div className="pillar-header">
                    <span className="pillar-icon">{pillar.icon}</span>
                    <span className="pillar-title">{pillar.title}</span>
                  </div>
                  <div className="pillar-standards">
                    <div className="pillar-standard pillar-standard--core">
                      <span className="standard-pill standard-pill--core">Core</span>
                      <div>
                        <strong>{pillar.core.requirement}</strong>
                        <p>{pillar.core.detail}</p>
                      </div>
                    </div>
                    <div className="pillar-standard pillar-standard--gold">
                      <span className="standard-pill standard-pill--gold">Gold</span>
                      <div>
                        <strong>{pillar.gold.requirement}</strong>
                        <p>{pillar.gold.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a className="source-link" href={FRAMEWORK_META.nursingFramework.url} target="_blank" rel="noopener noreferrer">
              Read full framework on NHS England →
            </a>
          </div>
        )}

        {view === 'nmc' && (
          <div>
            <div className="nmc-intro">
              <p>The NMC published five Principles for Preceptorship in 2020. These are <strong>regulatory guidance</strong> — not legally binding, but the NMC expects all employers to implement them. The NMC has no enforcement mechanism for preceptorship provision.</p>
            </div>
            <ol className="nmc-principles-list">
              {FRAMEWORK_META.nmcPrinciples.five_principles.map((p, i) => (
                <li key={i} className="nmc-principle">
                  <span className="nmc-num">{i + 1}</span>
                  <span className="nmc-text">{p}</span>
                </li>
              ))}
            </ol>
            <div className="nmc-enforcement-note">
              <span className="gap-badge gap-badge--standalone">Accountability Gap</span>
              <p>The NMC cannot compel trusts to provide preceptorship. Compliance relies on CQC inspection (infrequent) and employer goodwill.</p>
            </div>
            <a className="source-link" href={FRAMEWORK_META.nmcPrinciples.url} target="_blank" rel="noopener noreferrer">
              Read NMC Principles on nmc.org.uk →
            </a>
          </div>
        )}

        {view === 'midwifery' && (
          <div>
            <div className="midwifery-intro">
              <p>The National Preceptorship Framework for Midwifery was published in March 2023. It has stricter requirements than nursing in several key areas.</p>
            </div>
            <div className="midwifery-differences">
              <h3 className="section-heading">Key differences from Nursing Framework</h3>
              <ul className="diff-list">
                <li className="diff-item">
                  <strong>Minimum duration:</strong> 12 months at Core Standard (nursing: 6 months)
                </li>
                <li className="diff-item">
                  <strong>Professional Midwifery Advocate (PMA):</strong> Every newly registered midwife must have a named PMA providing restorative supervision
                </li>
                <li className="diff-item">
                  <strong>A-EQUIP model:</strong> Restorative supervision using the A-EQUIP framework is mandatory (nursing: Gold Standard only)
                </li>
                <li className="diff-item">
                  <strong>Ockenden alignment:</strong> Framework responds directly to Ockenden Review recommendations on maternity workforce safety
                </li>
              </ul>
            </div>
            <div className="nmc-enforcement-note">
              <span className="standard-pill standard-pill--core">Core = 12 months for midwifery</span>
              <p style={{ marginTop: 8 }}>Inspired by the Ockenden Review (2022) — systematic failures in maternity safety at NHS Trusts highlighted the need for stronger transition support for newly registered midwives.</p>
            </div>
            <a className="source-link" href={FRAMEWORK_META.midwiferyFramework.url} target="_blank" rel="noopener noreferrer">
              Read Midwifery Framework on NHS England →
            </a>
          </div>
        )}
      </div>
    </aside>
  )
}
