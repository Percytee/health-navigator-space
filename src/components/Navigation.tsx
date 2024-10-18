import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-blue-600">Patient Portal</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
            <Link to="/appointments" className="text-gray-600 hover:text-blue-600">Appointments</Link>
            <Link to="/records" className="text-gray-600 hover:text-blue-600">Records</Link>
            <Link to="/messages" className="text-gray-600 hover:text-blue-600">Messages</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};