import React from "react";
import { NavLink } from "react-router-dom";
import newlogo from "../assets/newlogo.png";
import { FaTelegram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlineContacts } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-muted footer py-3">
        <div className="container text-center text-md-start mt-2">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">
                <NavLink className="navbar-brand" to="/">
                  <img src={newlogo} width={140} alt="logo" />
                </NavLink>
              </h6>
              <p className="footer-desc" style={{fontSize:"12px", fontWeight:"600"}}>
              We are Democratizing access to sustainable long term wealth creation  
              </p>
              
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading" style={{color:"#007AFF"}}>
                Company
              </h6>
              <p>
                <NavLink to="/about" className="text-dark footer-text">
                  About Us
                </NavLink>
              </p>
              <p>
                <NavLink to="/about" className="text-dark footer-text">
                  Blogs
                </NavLink>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading" style={{color:"#007AFF"}}>
                Legal
              </h6>
              <p>
                <a href="#how-it-works" className="text-dark footer-text">
                  How It Works
                </a>
              </p>
              <p>
                <NavLink to="#" className="text-dark footer-text">
                  Faqs
                </NavLink>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading" style={{color:"#007AFF"}}>
                Contact Us
              </h6>
              <p>
                <a href="#how-it-works" className="text-dark footer-text d-flex d-block">
                  <AiOutlineMail size={16} color="#007AFF" className="mt-2 mx-2"/> contact@zoth.io
                </a>
              </p>
              <p>
                <NavLink to="#" className="text-dark footer-text d-flex d-block">
                   <BsTelephoneFill size={16} color="#007AFF" className="mt-2 mx-2"/>
                     9739986665
                </NavLink>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-md-2">
              <h6 className="text-uppercase fw-bold footer-heading" style={{color:"#007AFF"}}>
                Follow Us
              </h6>
              <div className="d-flex justify-content-between mt-4">
                <a href="">
                  <FaTelegram size={20} color="#007AFF"/>
                </a>
                <a href="">
                  <FaTwitter size={20} color="#007AFF"/>
                </a>
                <a href="">
                  <FaLinkedinIn size={20} color="#007AFF"/>
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
