// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* ... (Dropdown menu) */}
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Stock Game</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          {/* ... (Button with an icon) */}
        </button>
        <button className="btn btn-ghost btn-circle">
          {/* ... (Another button with an icon) */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
