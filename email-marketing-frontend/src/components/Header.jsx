import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Email Sequence Builder</h1>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Dashboard</Link>
          <Link to="/flow-builder" className="hover:underline">Flow Builder</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
