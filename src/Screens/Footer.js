import React from "react";
import { NavLink } from "react-router-dom";
import newlogo from "../assets/newlogo.png";
import { FaWhatsapp, FaFacebook, FaTelegram, FaGoogle } from "react-icons/fa";
import { AiOutlineMail, AiOutlineContacts } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-muted footer py-3">
        <div className="container text-center text-md-start mt-5">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">
                <NavLink className="navbar-brand" to="/">
                  <img src={newlogo} width={140} alt="logo" />
                </NavLink>
              </h6>
              <p className="footer-text">
                Help Links Quick Links Newsletter Zoth offers a web based
                platform and mobile app (iOS / Android) for retail investors to
                view, invest in high quality assets and earn passive income.
              </p>
              
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                Company
              </h6>
              <p>
                <NavLink to="/about" className="text-dark footer-text">
                  -- About Us
                </NavLink>
              </p>
              <p>
                <NavLink to="/about" className="text-dark footer-text">
                  -- Blogs
                </NavLink>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                Legal
              </h6>
              <p>
                <a href="#how-it-works" className="text-dark footer-text">
                  -- How It Works
                </a>
              </p>
              <p>
                <NavLink to="#" className="text-dark footer-text">
                  -- Faqs
                </NavLink>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                Contact Us
              </h6>
              <p>
                <a href="#how-it-works" className="text-dark footer-text">
                  <AiOutlineMail /> Contact@Zoth.io
                </a>
              </p>
              <p>
                <NavLink to="#" className="text-dark footer-text">
                  <AiOutlineContacts /> 90792579.....
                </NavLink>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold footer-heading">
                Follow Us
              </h6>
              <div className="d-flex justify-content-between text-dark mt-3">
                <a href="">
                  <FaFacebook size={20} />
                </a>
                <a href="">
                  <FaGoogle size={20} />
                </a>
                <a href="">
                  <FaWhatsapp size={20} />
                </a>
                <a href="">
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr style={{height:"3px"}} className="bg-primary" />
        <div className="container">
          <div
            className="text-center text-dark p-4 d-flex justify-content-between footer-last"
            style={{ fontSize: "12px" }}
          >
            <a href="https://zoth.io/">
              © Copyright:{" "}
              <span className="text-primary">
                {" "}
                @ZOTH.in | All Rights Reserved
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
