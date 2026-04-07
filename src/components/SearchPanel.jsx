import React, { useState, useMemo } from 'react'
import { NODES } from '../data/nodes.js'

const TYPE_LABELS = {
  national: 'National',
  regional: 'Regional',
  trust: 'Trust',
  individual: 'Individual',
}

export default function SearchPanel({ onClose, onSelect }) {
  const [query, setQuery] = useState('')
  const [filterType, setFilterType] = useState('all')

  const results = useMemo(() => {
    return NODES.filter(n => {
      const matchesQuery = !query ||
        n.label.toLowerCase().includes(query.toLowerCase()) ||
        n.description?.toLowerCase().includes(query.toLowerCase()) ||
        n.subtype?.toLowerCase().includes(query.toLowerCase())
      const matchesType = filterType === 'all' || n.type === filterType
      return matchesQuery && matchesType
    })
  }, [query, filterType])

  const handleSelect = (id) => {
    onSelect(id)  // App.jsx switches panel to 'detail' — don't also call onClose
  }

  return (
    <aside className="panel search-panel">
      <div className="panel-header">
        <div className="panel-title-row">
          <span className="type-badge" style={{ background: '#768692' }}>Search</span>
          <button className="close-btn" onClick={onClose} aria-label="Close panel">✕</button>
        </div>
        <h2 className="panel-title">Search Entities</h2>
      </div>

      <div className="search-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name, type, or keyword…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
        />
        <div className="filter-pills">
          {['all', 'national', 'regional', 'trust', 'individual'].map(t => (
            <button
              key={t}
              className={`filter-pill ${filterType === t ? 'active' : ''}`}
              onClick={() => setFilterType(t)}
            >
              {t === 'all' ? 'All' : TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div className="search-results">
        {results.length === 0 && (
          <p className="no-results">No results for "{query}"</p>
        )}
        {results.map(n => (
          <button
            key={n.id}
            className="result-item"
            onClick={() => handleSelect(n.id)}
          >
            <div className="result-header">
              <span className="result-name">{n.label}</span>
              <span className={`result-type result-type--${n.type}`}>{TYPE_LABELS[n.type]}</span>
            </div>
            <p className="result-desc">{n.description?.substring(0, 120)}…</p>
            {n.accountability_gaps?.length > 0 && (
              <span className="gap-badge">⚠ {n.accountability_gaps.length} gaps</span>
            )}
          </button>
        ))}
      </div>
    </aside>
  )
}
