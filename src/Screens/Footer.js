import React from "react";
import { NavLink } from "react-router-dom";
import newlogo from "../assets/newlogo.png";
import {
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaGoogle,
  FaEthereum,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-muted footer py-3">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
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
              <div className="mt-3 footer-heading">
                <h6 className="text-white">Follow Us :</h6>
                <div className="d-flex justify-content-between text-white p-3">
                  <FaFacebook size={22} />
                  <FaGoogle size={22} />
                  <FaWhatsapp size={22} />
                  <FaTelegram size={22} />
                </div>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                Help Links
              </h6>
              <p>
                <a href="#!" className="text-dark footer-text">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark footer-text">
                  Blogs
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark footer-text">
                  Primary Market
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark footer-text">
                  Home
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                Quick links
              </h6>
              <p>
                <a href="#!" className="text-dark footer-text">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark footer-text">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark 
                
                
                footer-text">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark footer-text">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4 footer-heading">
                Zoth Newslater
              </h6>
              <p className="footer-text">Sent A Newsletter And Get Update</p>
              <div className="d-flex" style={{ position: "relative"}}>
                <input
                  type="email"
                  name="footer_email"
                  className="form-control form-control-sm mt-2 footer-input text-dark px-3"
                  placeholder="Your Email"
                  id=""
                />
                <button className="btn btn-sm footer-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center text-dark p-4 d-flex justify-content-between footer-last"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: "12px" }}
        >
          <a href="https://zoth.io/">
            © 2022 Copyright:{" "}
            <span className="text-primary">
              {" "}
              ZOTH- Real Estate Tokenisation{" "}
            </span>
          </a>
          <div className="d-flex justify-content-between w-25">
            <a href="">Terms and Condition</a>
            <a href="">Privacy Policy</a>
            <a href="">FAQs</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
