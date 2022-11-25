import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Slider from "./Slider";
import { BiBadgeCheck, BiBuildings } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { AiOutlineSafetyCertificate, AiOutlineAppstore } from "react-icons/ai";
const HomeAccordian = () => {
  return (
    <>
      <div className=" mt-5" id="how-it-works">
        <div className="row mt-3">
          <h3 className="home-heading text-center">How Our Markeplace Works</h3>
        </div>
        <div className="row mt-3 mx-3">
          <div className="col-md-5 col-12 order-1 col-xl-5 col-lg-5 col-xs-12 col-sm-12 mt-3">
            <Accordion
              className="mt-2"
              flush
              defaultActiveKey="1"
              alwaysOpen={false}
            >
              <Accordion.Item className="mt-2 accordian-hover" eventKey="1">
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-center align-items-center overflow-hidden m-1"
                    style={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: "100%",
                      background:
                        "linear-gradient(180deg, #007aff 0%, #062e76 100%)",
                    }}
                  >
                    <BiBuildings size={28} color="white" />
                  </div>
                  <div className="d-flex flex-column mx-3">
                    <small className="text-gray">Step 1</small>
                    <p className="text-dark">Quality Premium Assets</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Zoth curates real world assets with high net worth and yield
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-2 accordian-hover" eventKey="2">
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-center align-items-center overflow-hidden m-1"
                    style={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: "100%",
                      background:
                        "linear-gradient(180deg, #007aff 0%, #062e76 100%)",
                    }}
                  >
                    <AiOutlineSafetyCertificate size={28} color="white" />
                  </div>
                  <div className="d-flex flex-column mx-3">
                    <small className="text-gray">Step 2</small>
                    <p className="text-dark">Asset Trust</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  The asset is transferred to a Trust or LLC
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-2 accordian-hover" eventKey="3">
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-center align-items-center overflow-hidden m-1"
                    style={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: "100%",
                      background:
                        "linear-gradient(180deg, #007aff 0%, #062e76 100%)",
                    }}
                  >
                    <TiDocument size={28} color="white" />
                  </div>
                  <div className="d-flex flex-column mx-3">
                    <small className="text-gray">Step 3</small>
                    <p className="text-dark">Tokenization As A Service(TaaS)</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Trust shares are tokenized using Zoth TaaS module
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-2 accordian-hover" eventKey="4">
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-center align-items-center overflow-hidden m-1"
                    style={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: "100%",
                      background:
                        "linear-gradient(180deg, #007aff 0%, #062e76 100%)",
                    }}
                  >
                    <AiOutlineAppstore size={28} color="white" />
                  </div>
                  <div className="d-flex flex-column mx-3">
                    <small className="text-gray">Step 4</small>
                    <p className="text-dark">Zoth Marketplace</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Zoth marketplace provides investors access to aggregated
                  tokenized assets
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-2 accordian-hover" eventKey="5">
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-center align-items-center overflow-hidden m-1"
                    style={{
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                      borderRadius: "100%",
                      background:
                        "linear-gradient(180deg, #007aff 0%, #062e76 100%)",
                    }}
                  >
                    <FaExchangeAlt size={20} color="white" />
                  </div>
                  <div className="d-flex flex-column mx-3">
                    <small className="text-gray">Step 5</small>
                    <p className="text-dark">Hodl/Yield/Trade</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Token owners can earn rental income and other asset related
                  yields or trade their ownership
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div
            className="col-md-7 col-12 col-xl-7 col-lg-7 col-xs-12 col-sm-12
           p-4 w-md-50 order-0 d-flex flex-column"
          >
            <Slider />
            <p className="prop-para text-dark mt-3 text-center" style={{fontSize:"18px", marginRight:"80px", fontWeight:"700"}}>Danta Vacaction Homes, Madikeri, Karnataka</p>
            <div className="d-flex justify-content-center">
              
              <NavLink to="/property">
                <button className="property-button text-white btn btn-primary px-5 py-3 btn-sm mt-2 btn-hover border-0" style={{background:
                        "linear-gradient(180deg, #007aff 0%, #062e76 100%)",}}>
                <p
              className="text-white"
              style={{ fontSize: "15px", fontWeight: "700" }}
            >
                  Explore Property
                  </p>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAccordian;
