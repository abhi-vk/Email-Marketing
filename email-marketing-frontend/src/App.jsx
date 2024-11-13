import React from 'react';
import './App.css';
import { FlowchartProvider } from './flowchartContext';
import Flowchart from './components/Flowchart';

function App() {
  return (
    <FlowchartProvider>
      <div className="App">
        <h1>Email Marketing Flowchart</h1>
        <Flowchart />
      </div>
    </FlowchartProvider>
  );
}

export default App;

