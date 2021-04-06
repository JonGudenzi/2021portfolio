import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";


function NavTabs() {
  const location = useLocation();

  return (
    <div style={{backgroundColor: "black"}}>
          <ul className="nav nav">
              <h1 style={{color: "white"}} className="col-9 jonName">Jon Gudenzi</h1>
      <li className="nav-item">
        <Link style={{color: "white", fontSize: '21px'}} to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
      </li>
      <li className="nav-item">
        <Link style={{color: "white", fontSize: '21px'}}
          to="/work"
          className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link style={{color: "white", fontSize: '21px'}}
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
