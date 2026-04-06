import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Graph from './components/Graph.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import FrameworkPanel from './components/FrameworkPanel.jsx'
import GapsPanel from './components/GapsPanel.jsx'
import SearchPanel from './components/SearchPanel.jsx'
import { NODES } from './data/nodes.js'

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [activePanel, setActivePanel] = useState(null) // 'framework' | 'gaps' | 'search' | 'detail'
  const [darkMode, setDarkMode] = useState(true)

  const handleNodeSelect = (nodeId) => {
    const node = NODES.find(n => n.id === nodeId)
    setSelectedNode(node || null)
    if (node) setActivePanel('detail')
  }

  const handlePanelToggle = (panel) => {
    setActivePanel(prev => prev === panel ? null : panel)
    if (panel !== 'detail') setSelectedNode(null)
  }

  const handleClose = () => {
    setActivePanel(null)
    setSelectedNode(null)
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        onFramework={() => handlePanelToggle('framework')}
        onGaps={() => handlePanelToggle('gaps')}
        onSearch={() => handlePanelToggle('search')}
        activePanel={activePanel}
      />

      <main className="main">
        <Graph
          onNodeSelect={handleNodeSelect}
          selectedNodeId={selectedNode?.id}
          darkMode={darkMode}
        />

        {activePanel === 'detail' && selectedNode && (
          <DetailPanel node={selectedNode} onClose={handleClose} darkMode={darkMode} />
        )}
        {activePanel === 'framework' && (
          <FrameworkPanel onClose={handleClose} darkMode={darkMode} />
        )}
        {activePanel === 'gaps' && (
          <GapsPanel onClose={handleClose} darkMode={darkMode} />
        )}
        {activePanel === 'search' && (
          <SearchPanel
            onClose={handleClose}
            onSelect={handleNodeSelect}
            darkMode={darkMode}
          />
        )}
      </main>

      <footer className="footer">
        <span>Data sourced from NHS England, NMC, CQC — Open Government Licence v3.0</span>
        <span className="footer-sep">·</span>
        <a href="https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/" target="_blank" rel="noopener noreferrer">Framework Source</a>
        <span className="footer-sep">·</span>
        <span>Built for NHS transparency · Not affiliated with NHS England</span>
      </footer>
    </div>
  )
}
