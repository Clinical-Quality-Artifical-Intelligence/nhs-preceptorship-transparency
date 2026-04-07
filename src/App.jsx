import React, { useState, useRef } from 'react'
import Header from './components/Header.jsx'
import Graph from './components/Graph.jsx'
import DetailPanel from './components/DetailPanel.jsx'
import FrameworkPanel from './components/FrameworkPanel.jsx'
import GapsPanel from './components/GapsPanel.jsx'
import SearchPanel from './components/SearchPanel.jsx'
import FloatingToolbar from './components/FloatingToolbar.jsx'
import LegendBar from './components/LegendBar.jsx'
import { NODES } from './data/nodes.js'

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [activePanel, setActivePanel] = useState(null)
  const [darkMode, setDarkMode] = useState(false)      // light by default
  const [activeSector, setActiveSector] = useState(null)
  const [viewMode, setViewMode] = useState('full')     // 'full' | 'focus'
  const [showLegend, setShowLegend] = useState(true)
  const graphContainerRef = useRef(null)

  const handleNodeSelect = (nodeId) => {
    const node = nodeId ? NODES.find(n => n.id === nodeId) : null
    setSelectedNode(node || null)
    if (node) setActivePanel('detail')
    else if (activePanel === 'detail') setActivePanel(null)
  }

  const handlePanelToggle = (panel) => {
    setActivePanel(prev => prev === panel ? null : panel)
    if (panel !== 'detail') setSelectedNode(null)
  }

  const handleClose = () => {
    setActivePanel(null)
    setSelectedNode(null)
  }

  const handleHeaderBtnClick = (e) => {
    const panel = e?.currentTarget?.dataset?.panel
    if (panel) handlePanelToggle(panel)
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header
        onSearch={() => handlePanelToggle('search')}
        activePanel={activePanel}
        activeSector={activeSector}
        onSectorFilter={setActiveSector}
        onPanelToggle={handlePanelToggle}
      />

      <div className="canvas-area">
        {/* Left detail panel */}
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

        {/* Graph fills remaining space */}
        <div className="graph-region" ref={graphContainerRef}>
          <Graph
            onNodeSelect={handleNodeSelect}
            selectedNodeId={selectedNode?.id}
            darkMode={darkMode}
            activeSector={activeSector}
            viewMode={viewMode}
          />

          <FloatingToolbar
            viewMode={viewMode}
            onViewMode={setViewMode}
            showLegend={showLegend}
            onToggleLegend={() => setShowLegend(l => !l)}
            darkMode={darkMode}
            onToggleDark={() => setDarkMode(d => !d)}
            graphRef={graphContainerRef}
          />
        </div>
      </div>

      {/* Bottom legend + footer */}
      <LegendBar visible={showLegend} darkMode={darkMode} />

      <footer className="footer">
        <span>Data: NHS England · NMC · CQC · HCPC — Open Government Licence v3.0</span>
        <span className="footer-sep">·</span>
        <a href="https://www.england.nhs.uk/long-read/national-preceptorship-framework-for-nursing/" target="_blank" rel="noopener noreferrer">Framework</a>
        <span className="footer-sep">·</span>
        <span>Not affiliated with NHS England · Not official NHS guidance</span>
      </footer>
    </div>
  )
}
