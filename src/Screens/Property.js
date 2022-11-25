import React, { useContext } from "react";
import { RiWechatLine } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import Subscribe from "./Subscribe";
import { DataContext } from "../Utils/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lapi1 from "../assets/1.jpeg";
import lapi2 from "../assets/2.jpeg";
import lapi3 from "../assets/3.jpeg";
import lapi4 from "../assets/4.jpeg";
import lapi5 from "../assets/5.jpeg";
import GoogleMapReact from "google-map-react";

import danta from "../assets/dantalogo.png";
const Property = () => {
  let { openModal, closeModal, customStyles, modalIsOpen } =
    useContext(DataContext);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
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
            style={{ fontSize: "22px", color: "#053786", fontWeight: "400" }}
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
                src={lapi1}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={lapi2}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={lapi3}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={lapi4}
              />
            </div>
            <div className="  rounded-3">
              <img
                className="rounded-3"
                style={{
                  width: "800px",
                  height: "200px",
                }}
                src={lapi5}
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
          <div className="d-flex flex-column mt-3 text-center">
            <h1 className="text-center fw-bold">
              <strong>INTRODUCTION</strong>
            </h1>
            <p className="text-center mx-sm-3 mx-xs-3 mt-2">
              This Miami Beach condo was recently featured on HGTV’s "My Lottery
              Dream Home" Season 13 Episode 10: South Beach Birth Rite, which
              first aired September 23, 2022.<br></br> <br></br>
              This property was unaffected by Hurricane Ian and comes with flood
              insurance and hurricane impact windows.<br></br> <br></br>
              Stunning two-story Townhome in a boutique building in the heart of
              South Beach. This apartment building was converted into 10
              two-story townhomes back in 2012. This 2-bedroom, 1.5-bathroom
              home is a corner unit, including modern eat-in kitchen, stainless
              steel appliances, washer/dryer, one A/C unit for each floor, and
              hurricane impact windows. Property is steps away from Ocean Drive,
              sandy beaches, and the Atlantic Ocean. The Art Deco district with
              Espanola Way & Lincoln Road are within walking distance. Unit
              includes appliances, blinds, and furniture.
              <br></br> <br></br>
              Tenant is on a 1 year lease from 07/26/2022 - 07/31/2023 and is
              paying $3,250/month with a $6,500 deposit.
            </p>
          </div>

          <div className="d-flex flex-column mt-5">
            <h1 className="text-center">
              <strong>LOCATION</strong>
            </h1>

            <div
              style={{ height: "100vh", width: "100%" }}
              className="mt-2 rounded rounded-3"
            >
              <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              ></GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
