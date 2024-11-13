import React, { useEffect } from 'react';
import ReactFlow, { addEdge, ReactFlowProvider, applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer';
import { useFlowchart } from '../flowchartContext';
import axios from '../axios';
import Modal from './Modal';

const nodeTypes = {
  default: ({ data }) => (
    <div style={{ padding: '10px', background: 'lightblue' }}>
      <p>{data.label}</p>
    </div>
  ),
};

const Flowchart = () => {
  const { state, dispatch } = useFlowchart();
  const { nodes = [], edges = [] } = state;

  useEffect(() => {
    const fetchFlowchart = async () => {
      try {
        const response = await axios.get('/flowchart');
        if (response.data) {
          // Ensure each node has a defined position
          const fetchedNodes = response.data.nodes.map(node => ({
            ...node,
            position: node.position || { x: 0, y: 0 }, // Default position if missing
          }));
          
          dispatch({
            type: 'SET_FLOWCHART',
            nodes: fetchedNodes,
            edges: response.data.edges || [],
          });
        }
      } catch (error) {
        console.error('Error fetching flowchart data:', error);
      }
    };
    fetchFlowchart();
  }, [dispatch]);

  const saveFlowchart = async () => {
    try {
      await axios.post('/flowchart', { nodes, edges });
      alert('Flowchart saved!');
    } catch (error) {
      console.error('Error saving flowchart:', error);
    }
  };

  const onConnect = (params) => {
    const newEdges = addEdge(params, edges);
    dispatch({
      type: 'UPDATE_FLOWCHART',
      nodes,
      edges: newEdges,
    });
  };

  return (
    <div style={{ height: '90vh' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onNodesChange={(nodeChanges) => {
            const updatedNodes = applyNodeChanges(nodeChanges, nodes);
            dispatch({
              type: 'UPDATE_FLOWCHART',
              nodes: updatedNodes,
              edges,
            });
          }}
          onEdgesChange={(edgeChanges) => {
            const updatedEdges = applyEdgeChanges(edgeChanges, edges);
            dispatch({
              type: 'UPDATE_FLOWCHART',
              nodes,
              edges: updatedEdges,
            });
          }}
        />
        <button onClick={saveFlowchart}>Save Flowchart</button>
        <Modal />
      </ReactFlowProvider>
    </div>
  );
};

export default Flowchart;
