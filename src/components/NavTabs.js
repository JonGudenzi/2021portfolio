import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";


function NavTabs() {
  const location = useLocation();

  return (
          <ul className="nav nav">
              <h1 className="col-10 jonName">Jon Gudenzi</h1>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
      </li>
      <li className="nav-item">
        <Link
          to="/work"
          className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
