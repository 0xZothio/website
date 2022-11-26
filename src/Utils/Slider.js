import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lapi1 from "../assets/1.jpeg";
import lapi2 from "../assets/2.jpeg";
import lapi3 from "../assets/3.jpeg";
import lapi4 from "../assets/4.jpeg";
import lapi5 from "../assets/5.jpeg";
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
          <img className="rounded-3" style={{width:"650px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src="https://resources.zoth.in/website/1.jpeg" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/website/2.jpeg" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/website/3.jpeg" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/website/4.jpeg" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/website/5.jpeg" />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
