import React from 'react';

function NodeSidebar() {
  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r">
      <h3 className="text-xl mb-2">Add Nodes</h3>
      <div className="mb-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full">
          Add Email Node
        </button>
      </div>
      <div>
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-2 w-full">
          Add Delay Node
        </button>
      </div>
    </div>
  );
}

export default NodeSidebar;
