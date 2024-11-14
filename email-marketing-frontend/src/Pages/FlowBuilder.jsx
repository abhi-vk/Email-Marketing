import React, { useState } from 'react';
import FlowEditor from '../components/FlowEditor';
import NodeSidebar from '../components/NodeSidebar';

function FlowBuilder() {
  return (
    <div className="flex h-screen">
      <NodeSidebar />
      <div className="flex-1">
        <FlowEditor />
      </div>
    </div>
  );
}

export default FlowBuilder;
