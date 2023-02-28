import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/image/logo.svg" alt=""></img>
      </Link>
      <Link to="/purpose">Purpose</Link>
      <Link to="/community">Community</Link>
      <Link to="/career">
        Careers<sup>[11]</sup>
      </Link>
      <Link to="/learn">Learn</Link>
      <Link to="/united">
        United Kingdom{" "}
        <span>
          <img src="/image/location.svg" alt=""></img>
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
