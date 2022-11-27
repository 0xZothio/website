import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../assets/p1.png";
import pic2 from "../assets/p2.png";
import pic3 from "../assets/p3.png";
import pic4 from "../assets/p4.png";
import pic5 from "../assets/p5.png";
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
          <img className="rounded-3" style={{width:"650px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={pic1} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={pic2} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={pic3} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={pic4} />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src={pic5} />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
