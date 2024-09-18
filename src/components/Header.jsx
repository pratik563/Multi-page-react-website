// src/Components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "orange" }}>Sun Energy</h1>
        <p>We are learning routes in Vite project</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dsa">DSA</Link>
            </li>
            <li>
              <Link to="/contests">Contests</Link>
            </li>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Header;
