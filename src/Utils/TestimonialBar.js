import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const TestimonialBar = () => {
  return (
    <>
      <div className="row mt-5">
        <h3 className="home-heading text-center mb-3">
          What People Says About Us
        </h3>
      </div>

      <div className="container mb-4 testi1-card">
        <div className="row mt-2">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>

      <div className="col-md-4 col-11 col-xl-4 col-lg-4 mx-auto testi2-card" style={{display:'none'}}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={true}
          showArrows={false}
          showStatus={false}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialBar;
