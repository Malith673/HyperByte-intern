import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Restaurant Management</h1>
        <Link to="/create">
            <button 
                 
                className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                Create Restaurant
            </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
