import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
          <img className="rounded-3" style={{width:"650px", height:"400px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src="https://resources.zoth.in/cre/images/101/1.webp" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", height:"400px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/cre/images/102/1.webp" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", height:"400px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/cre/images/104/1.webp" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", height:"400px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/cre/images/105/1.webp" />
        </div>
        <div className="  rounded-3">
          <img className="rounded-3" style={{width:"650px", height:"400px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} src="https://resources.zoth.in/cre/images/106/1.webp" />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
