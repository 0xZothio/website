import React, { useState, useEffect, useContext } from "react";
import Countdown from "react-countdown";
import Homecard from "../Utils/Home-card";
import TestimonialBar from "../Utils/TestimonialBar";
import illustration from "../assets/illustration2.png";
import mili from "../assets/mili.png";
import Modal from "react-modal";
import Subscribe from "./Subscribe";
import {
  FaShieldAlt,
  FaUserLock,
  FaDollarSign,
  FaBitcoin,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { GiStonePath } from "react-icons/gi";
import HomeAccordian from "../Utils/Home-Accordian";
// import lapi from "../assets/lapi1.png";
import { DataContext } from "../Utils/DataContext";
import lapi from "../assets/lapi2.png";
// import illustration from "../assets/illustration.png";

const Completionist = () => (
  <p className="text-white text-center">
    Congratulations you are good to go...
  </p>
);

// const typingEffect = () => {
//   var i1 = 0;
//   var txt1 = "Real State, Art & other World class Assets";
//   var speed = 100; /* The speed/duration of the effect in milliseconds */

//   /* function typeWriter() {
//     if (i1 < txt1.length) {
//       document.getElementById("demo").innerHTML += txt1.charAt(i1);
//       document.getElementById("demo1").innerHTML += txt1.charAt(i1);
//       i1++;

//       setTimeout(typeWriter, speed);
//     } else {
//       document.getElementById("demo").innerHTML = "";
//       document.getElementById("demo1").innerHTML = "";
//       typingEffect();
//     }
//   } */
//   typeWriter();
// };

const Home = () => {
  let { openModal, closeModal, customStyles, modalIsOpen } =
    useContext(DataContext);
  useEffect(() => {
    // typingEffect();
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <>
          <div className="col-3 mx-auto  ">
            <div className="d-flex shadow-sm bg-white rounded-4 justify-content-center align-items-center border p-3 ">
              <p className="timer-text ">{days}</p>
            </div>
            <p
              className="text-center"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              Days
            </p>
          </div>
          <div className="col-3 mx-auto ">
            <div className="d-flex shadow-sm  bg-white rounded-4 justify-content-center align-items-center border p-3 ">
              <p className="timer-text">{hours}</p>
            </div>
            <p
              className="text-center"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              Hours
            </p>
          </div>
          <div className="col-3 mx-auto ">
            <div className="d-flex shadow-sm bg-white rounded-4 justify-content-center align-items-center border p-3 ">
              <p className="timer-text">{minutes}</p>
            </div>
            <p
              className="text-center"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              Minutes
            </p>
          </div>
          <div className="col-3 mx-auto ">
            <div className="d-flex shadow-sm bg-white rounded-4 justify-content-center align-items-center border p-3 ">
              <p className="timer-text">{seconds}</p>
            </div>
            <p
              className="text-center"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              Seconds
            </p>
          </div>
        </>
      );
    }
  };

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
      <div className="row overflow-hidden">
        <div className="col-md-12 col-12 p-0 col-xs-12 col-xl-12 mx-auto home-1 border">
          <div className="illustration d-flex justify-content-center align-items-center border-1 mt-4">
            <img
              src={illustration}
              alt=""
              style={{ width: "500px", marginRight: "75px" }}
            />
          </div>
          <div className="home-text p-2 w-75 mt-5">
            <h3
              className="invest"
              style={{ color: "#ffffff", fontSize: "32px", fontWeight: "700" }}
            >
              Invest in
            </h3>
            <h3
              className="invest-para"
              style={{ color: "#ffffff", fontSize: "38px", fontWeight: "700" }}
            >
              Real State, Art & World class Assets
            </h3>
            {/* <h3 id="demo"></h3> */}

            <p
              style={{
                marginTop: "14px",
                fontSize: "18px",
                lineHeight: "10px",
                fontWeight: "400",
              }}
            >
              We are Democratizing access to sustainable long term wealth
              creation.
            </p>
            <button
              className="btn btn-light btn-hover w-25 px-4 py-3 mt-3"
              style={{ color: "007AFF" }}
              onClick={openModal}
            >
              <p
                className="text-black text-center"
                style={{ fontSize: "14px", fontWeight: "500" }}
              >
                Get Exclusive Invite 🚀
              </p>
            </button>
          </div>
        </div>
        <div className="row p-3 p-xs-4 p-sm-4 timer-dekstop">
          <div className="col-md-8 col-xs-12 col-sm-12 col-12 col-lg-8 shadow-lg mx-auto rounded-4 col-xl-5 p-4 timer-container">
            <p className="timer-heading text-white text-center">
              Zoth Rocketship Launching in
            </p>
            <div className="d-flex mt-3 justify-content-evenly row text-white">
              <Countdown
                autoStart={true}
                date={Date.now() + 50000000}
                zeroPadDays={2}
                zeroPadTime={2}
                renderer={renderer}
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 col-12 p-0 col-xs-12 col-xl-12 mx-auto home-2 border">
          <div className="home-text p-md-2 ">
            <h3
              className="invest"
              style={{ color: "#ffffff", fontSize: "18px" }}
            >
              Invest in
            </h3>
            <h3
              className="invest-para"
              style={{ color: "#ffffff", fontSize: "24px", fontWeight: "700" }}
            >
              Real State, Art & World class Assets
            </h3>
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                lineHeight: "10px",
                fontWeight: "600",
              }}
            >
              We Are Democratizing Access To Sustainable Long Term Wealth
              Creation.
            </p>
          </div>
          <div className="row p-3 p-xs-4 p-sm-4">
            <div className="col-md-8 col-xs-12 col-sm-12 col-12 col-lg-8 shadow-lg rounded-4 col-xl-5 mx-auto p-4 timer-container">
              <p className="timer-heading text-white text-center">
                Zoth Rocketship Launching in
              </p>
              <div className="d-flex mt-3 justify-content-evenly row text-white">
                <Countdown
                  autoStart={true}
                  date={Date.now() + 5000000000}
                  zeroPadDays={2}
                  zeroPadTime={2}
                  renderer={renderer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-md-3 d-md-none">
        <div className="col-md-4 col-12 mx-auto d-flex justify-content-center">
          <button
            className="btn btn-primary py-3 px-3 btn-hover border-0 "
            style={{ color: "007AFF" }}
            onClick={openModal}
          >
            <p
              className="text-white text-center"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Get Exclusive Invite 🚀
            </p>
          </button>
        </div>
      </div>

      <div className="row mt-md-5 mt-xs-2 mx-2">
        <h2 className="home-heading mt-5 text-center">Why Invest In Zoth ?</h2>
        <div className="col-md-7 col-12 col-lg-7 col-xl-7 col-lg-7 d-flex justify-content-left align-items-left">
          <img src={lapi} className="" alt="dashboard" />
        </div>
        <div className="col-md-5 col-12 col-lg-5 col-xl-5 col-sx-12 col-sm-12 rounded p-2">
          <div className="row mt-2">
            <Homecard
              img={<FaShieldAlt color="white" size={25} />}
              title="Safe and Compliant"
              summary="Zoth STOs are compliant with SEC and other regulatory institutions"
            />
            <Homecard
              img={<FaBitcoin color="white" size={25} />}
              title="High Quality assets"
              summary="Zoth lets you invest in institutional-quality assets such as real estate."
            />
            <Homecard
              img={<FaDollarSign color="white" size={25} />}
              title="Easy Liquidity"
              summary="Buy and sell anytime through our secondary market"
            />
            <Homecard
              img={<AiOutlineStock color="white" size={25} />}
              title="High Yield"
              summary="High class assets with guaranteed yield and returns"
            />
            <Homecard
              img={<FaUserLock color="white" size={25} />}
              title="Trust worthy and Risk Free"
              summary="All our assets are procured from trusted resources and are insured against any defaults"
            />
            <Homecard
              img={<GiStonePath color="white" size={25} />}
              title="Diversify Your Portfolio"
              summary="With fractional ownership diversify your real estate portfolio"
            />
          </div>
        </div>
      </div>
      <HomeAccordian />
      <div
        className="row mt-5 mb-3 p-4"
        style={{
          background: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)",
          textAlign: "center",
        }}
      >
        <div className=" col-md-6 col-12 col-xs-12 col-sm-12 order-sm-0 col-xl-6 col-lg-6">
          <img
            className="mil-con"
            src={mili}
            width="75%"
            height="80%"
            alt="millionare"
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center col-12 p-5 col-xs-12 col-sm-12 col-xl-6 order-sm-1 col-lg-6">
          <div className="text-mil w-auto mb-md-5 mx-md-5">
            <h3 className="text-white" style={{ fontSize: "34px" }}>
              <strong>Invest Like A Millionare</strong>
            </h3>
            <p className="text-white mt-3">
              Diversification of portfolio is a strategy proven to reduce
              exposure to market risks, inflations and is an investment strategy
              followed by most millionaires
            </p>
            <button
              className="btn btn-light mt-4 btn-hover border-0  px-3 py-3"
              onClick={openModal}
            >
              <p
                className="text-black text-center"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                Get Started
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* <TestimonialBar /> */}
    </>
  );
};

export default Home;
