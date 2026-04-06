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
  const [activePanel, setActivePanel] = useState(null)
  const [darkMode, setDarkMode] = useState(true)
  const [activeSector, setActiveSector] = useState(null)

  const handleNodeSelect = (nodeId) => {
    const node = nodeId ? NODES.find(n => n.id === nodeId) : null
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
        activeSector={activeSector}
        onSectorFilter={setActiveSector}
      />

      <main className="main">
        <Graph
          onNodeSelect={handleNodeSelect}
          selectedNodeId={selectedNode?.id}
          darkMode={darkMode}
          activeSector={activeSector}
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
          <SearchPanel onClose={handleClose} onSelect={handleNodeSelect} darkMode={darkMode} />
        )}
      </main>

      <footer className="footer">
        <span>Data sourced from NHS England, NMC, CQC, HCPC and official public sources — Open Government Licence v3.0</span>
        <span className="footer-sep">·</span>
        <a href="https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/" target="_blank" rel="noopener noreferrer">Framework Source</a>
        <span className="footer-sep">·</span>
        <span>Built for transparency · Not affiliated with NHS England · Not official NHS guidance</span>
      </footer>
    </div>
  )
}
