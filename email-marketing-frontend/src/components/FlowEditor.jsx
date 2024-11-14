import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import NodeModal from './NodeModal';

function FlowEditor() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onNodesChange = (changes) => setNodes((nds) => nds.map((node) => ({ ...node, ...changes })));
  const onEdgesChange = (changes) => setEdges((eds) => addEdge(changes, eds));
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setIsModalOpen(true);
  };

  const handleSaveNode = (id, data) => {
    setNodes((nds) => nds.map((node) => (node.id === id ? { ...node, data } : node)));
  };

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
      <NodeModal
        nodeData={selectedNode}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNode}
      />
    </div>
  );
}

export default FlowEditor;
