import React, { useContext } from "react";
import newlogo from "../assets/newlogo.png";
import { NavLink } from "react-router-dom";
import { FaHamburger, FaArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4">
        <NavLink className="navbar-brand" to="/">
          <img src={newlogo} width={140} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "1px solid white" }}
        >
          <FaHamburger color="black" size={25} />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item mx-md-3 active">
              <NavLink className="nav-link text-dark" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink className="nav-link text-dark" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink className="nav-link text-dark" to="/blogs">
                Blog(coming soon)
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <a className="nav-link text-dark" href="#how-it-works">
                How It Works
              </a>
            </li>
            <li className="nav-item mx-md-3 text-center">
              <NavLink
                className="nav-link text-white btn btn-primary px-4 btn-sm btn-hover border-0"
                to="/signup"
              >
                Get Early Access
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
