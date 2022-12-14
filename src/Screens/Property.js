import React, { useContext } from "react";

import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import Subscribe from "./Subscribe";
import { DataContext } from "../Utils/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Homecard2 from "../Utils/Home-card2";
// import MapChart from "../Utils/Map";
import layout from "../assets/layout.png";
import danta from "../assets/dantalogo.png";
import pic1 from "../assets/p1.png";
import pic2 from "../assets/p2.png";
import pic3 from "../assets/p3.png";
import pic4 from "../assets/p4.png";
import pic5 from "../assets/p5.png";

const Property = () => {
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
      <div className="row mt-2">
        <div
          className="col-md-8 col-12 col-xl-8 col-lg-8 col-sm-12 col-xs-12 mx-auto p-5 w-100 h-auto"
          style={{
            background: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
            height: "500px",
          }}
        >
          <div className="row">
            <img
              src={danta}
              className="mx-auto d-block"
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="row mt-4">
            <p
              className="text-center text-white"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Danta group is promoted by B. Raghavendra, having more than 30
              years of experience in banking, real estate and hospitality
              industry. The group has successfully completed an expansive coffee
              estate project ‘Danta Estate’ near Sakaleshpur and the project is
              handed over to Owners' association for maintenance.<br></br>{" "}
              <br></br>
              Group is operating a home stay in Danta Estate built in malenad
              architecture in the middle of soul stirring ambiance blessed with
              natural streams. A privileged stay in the estate house has
              attracted many nature lovers in the last 7 years.
            </p>
          </div>
        </div>
        <div className="col-md-10 col-12 col-xl-10 col-lg-10 col-xs-12 col-sm-12 mx-auto d-flex justify-content-center align-items-center flex-column ">
          <h1
            className="headi-prop text-center mt-5 fw-bold"
            style={{ fontSize: "28px", color: "#053786", width: "75%" }}
          >
            Danta Resort, Madikeri, Coorg, Karnataka
          </h1>
          <p
            className="headi-prop text-center mt-2"
            style={{ color: "#053786", fontWeight: "400" }}
          >
            Rejuvenate Yourself With Nature
          </p>

          <hr
            style={{ height: "2.5px !important" }}
            className="text-primary mt-3 mx-auto d-block"
          />
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            className="mt-2 h-75"
          >
            <div className=" rounded-3 ">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={pic1}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={pic2}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={pic3}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={pic4}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={pic5}
              />
            </div>
          </Carousel>
        </div>
        {/* <div className="row mt-4 justify-content-center">
          <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-sm-12 col-xs-12 mx-auto d-flex justify-content-between">
            <div className="d-flex flex-column">
              <RiWechatLine size={30} color="black" />
              <strong className="text-primary">2 Bed</strong>
            </div>
            <div className="d-flex flex-column">
              <RiWechatLine size={30} />
              <strong className="text-primary">2 Bed</strong>
            </div>
            <div className="d-flex flex-column">
              <RiWechatLine size={30} />
              <strong className="text-primary">2 Bed</strong>
            </div>
          </div>
          <div className="row mt-5  mb-2">
            <div className="col-md-12 mx-2 col-12 mx-auto text-center">
              <button
                className="btn btn-primary btn-hover text-center border-0 px-4 py-3"
                onClick={openModal}
              >
                <p
                  className="text-white text-center"
                  style={{ fontSize: "15px", fontWeight: "600" }}
                >
                  Subscribe property
                </p>
              </button>
            </div>
          </div>
        </div> */}
        <div
          className="col-md-8 col-12 col-xl-8 col-lg-8 col-sm-12 col-xs-12 mx-auto p-5 w-100 h-auto mt-5 mb-3"
          style={{
            background: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
            height: "500px",
          }}
        >
          <div className="row">
            <h1 className="property-heading justify-content-center text-center mt-2">
              {" "}
              <p className="text-center text-white">About Property</p>
            </h1>
            <p
              className="text-center text-white"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Danta Resort is the second project of the group, set in the middle
              of hills and rivers in Coorg, also known as Land of warriors.
              Located 24 km from Madikeri town in western ghats is sure to
              persuade you to be an aspiring holiday destination. Amenities in
              the resort include spacious rooms with large sit outs facing hills
              and river, multi-cuisine restaurant, indoor games, outdoor
              activities and jogging track along the river.<br></br> <br></br>
              Inspired by nature, Danta group has launched a unique residential
              layout with 68 cottages in the middle of spices plantation
              surrounded by a river. These cottages are designed in Malenad
              Architecture to open up your senses to a rich and mystical
              experience of nature. Danta vacation home is an exceptional
              investment destination, offers a genuine opportunity to own a
              cottage with a combination of excellent capital appreciation, life
              time free accommodation and a source for revenue generation.
            </p>
          </div>
        </div>

        <div className="row mt-md-5 mt-xs-2 mx-2">
          <h2 className="home-heading mt-2 text-center">Why Danta? </h2>

          <div className="col-md-5 col-12 col-lg-5 col-xl-5 col-sx-12 col-sm-12 rounded p-2">
            <div className="row mx-2">
              <Homecard2 title="Well laid 12m and 9m roads" />
              <Homecard2 title="UG electric cable & LED street lights" />
              <Homecard2 title="Rich plantation with Jogging track along river" />
              <Homecard2 title="Access to all amenities in resort" />
              <Homecard2 title="24/7 security" />
              <Homecard2 title="Professional maintenance" />
            </div>
          </div>
          <div className="col-md-7 col-12 col-lg-7 col-xl-7 col-lg-7 d-flex justify-content-right align-items-right mb-5">
            <img
              src={layout}
              className="layou-img"
              alt=""
              style={{ width: "auto" }}
            />
          </div>
          <div className="col-md-12 mx-2 col-12 mx-auto text-center mt-5 mb-3">
            <button
              className="btn btn-primary btn-hover text-center border-0 px-5 py-3"
              style={{
                background: "linear-gradient(90deg, #8e2de2 0%, #4a00e0 100%)",
              }}
              onClick={openModal}
            >
              <p
                className="text-white text-center"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Join Waitlist 🚀
              </p>
            </button>
            <hr class="dashed mt-5"></hr>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <h1 className="home-heading text-center">Location</h1>
            <div className="col-md-6 col-12 mx-auto">
              <div className="d-flex w-100 justify-content-center border-2 rounded rounded-3 mt-3">
                <iframe
                  width="1000"
                  height="290"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=586&amp;height=435&amp;hl=en&amp;q=%20Danta%20Resort+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
            {/* <div className="col-md-6 col-12 mx-auto">
              <p className="text-left mt-4 w-75" style={{ fontSize: "18px" }}>
                Kopatti is a small Village/hamlet in Madikeri Taluk in Kodagu
                District of Karnataka State, India. It comes under Kopatti
                Panchayath. It belongs to Mysore Division . It is located 20 KM
                towards west from District head quarters Madikeri. 14 KM from
                Madikeri. 266 KM from State capital Bangalore Kopatti Pin code
                is 571247 and postal head office is Bhagamandala . Ballamavati (
                8 KM ) , Made ( 10 KM ) , Sampaje ( 14 KM ) , Galibeedu ( 14 KM
                ) , Bettageri ( 15 KM ) are the nearby Villages to Kopatti.{" "}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
