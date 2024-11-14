import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FlowBuilder from './pages/FlowBuilder';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flow-builder" element={<FlowBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
