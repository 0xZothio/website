import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lapi1 from "../assets/1.png";
import lapi2 from "../assets/2.png";
import lapi3 from "../assets/3.png";
import lapi4 from "../assets/4.png";
import lapi5 from "../assets/5.png";
const Slider = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        className="carousel"
        height="80%"
      >
        <div className=" rounded-3">
          <img className="rounded-3" style={{width:"650px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={lapi1} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={lapi2} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={lapi3} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={lapi4} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={lapi5} />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
