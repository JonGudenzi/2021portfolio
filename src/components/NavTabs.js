import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import resume from "../assets/Resume.pdf";
import { Nav, Navbar } from "react-bootstrap";


function NavTabs() {
  const location = useLocation();

  return (
    <div className='nav' style={{ backgroundColor: "black", display: "flex", flexwrap: "wrap" }}>
      <div className="nav-links">
        <h1 style={{ color: "rgb(94, 240, 215)", textAlign: "left" }}>Jon Gudenzi</h1>
      </div>

      <Navbar className='nav-wrap'>
        <Nav className="nav-item">
          <Link style={{ color: "white", fontSize: '21px' }} to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </Nav>

        <Nav className="nav-item">
          <Link style={{ color: "white", fontSize: '21px' }}
            to="/work"
            className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
          >
            Work
          </Link>
        </Nav>
        <Nav className="nav-item">
          <Link style={{ color: "white", fontSize: '21px' }}
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </Nav>
        <Nav className="nav-item">
          <Link style={{ color: "white", fontSize: '21px' }}
            to={resume}
            className={
              location.pathname === "/resume" ? "nav-link active" : "nav-link"
            }
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume

          </Link>
        </Nav>

      </Navbar>

    </div>
  );
}

export default NavTabs;
