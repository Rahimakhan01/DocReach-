import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">DocReach</a>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-400">Services</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
