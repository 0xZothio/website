import React, { useContext } from "react";
import newlogo from "../assets/newlogo.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataContext } from "../Utils/DataContext";
import Modal from "react-modal";
import Subscribe from "./Subscribe";
const Navbar = () => {
  let { openModal, closeModal, customStyles, modalIsOpen } =
    useContext(DataContext);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Subscribed Modal"
        style={customStyles}
      >
        <Subscribe />
      </Modal>

      <nav className="navbar navbar-expand-lg p-md-4 p-1">
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
        >
          <GiHamburgerMenu color="black" size={27} />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item mx-md-3 active">
              <NavLink
                className="nav-link text-dark"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink
                className="nav-link text-dark"
                to="/about"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <NavLink
                className="nav-link text-dark"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                to="#"
              >
                Blog(Coming Soon)
              </NavLink>
            </li>
            <li className="nav-item mx-md-3">
              <a className="nav-link text-dark" href="#how-it-works">
                How It Works
              </a>
            </li>
            <li className="nav-item mx-md-3 text-center">
              <button
                className="nav-link text-white btn btn-primary px-4 btn-sm btn-hover border-0"
                onClick={openModal}
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
              >
                Get Exclusive Invite
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
