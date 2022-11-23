import React from "react";
import { FaStar } from "react-icons/fa";
const TestimonialCard = () => {
  return (
    <>
      <div
        className="col-md-3 col-12 col-xl-3 col-lg-3 col-sm-6 col-xs-6 w-xs-100 mt-xs-5 mb-5"
        
      >
        <div className="d-flex flex-column testimonial-card p-4 shadow-sm mx-auto border mt-md-3">
          <div className="d-flex mb-1">
            <FaStar color="007AFF" /> <FaStar color="007AFF" />{" "}
            <FaStar color="007AFF" /> <FaStar color="007AFF" />{" "}
            <FaStar color="007AFF" />
          </div>
          <p className="testimonial-text mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            excepturi numquam natus animi reprehenderit odit
          </p>
          <div className="d-flex">
            <div className="testimonial-img rounded-circle border border-secondary mt-4">
              <img src="" alt="" />
            </div>
            <div className="d-flex flex-column">
              <p
                className="testimonial-name mx-2 mt-4"
                style={{ fontWeight: "800", fontSize: "14px" }}
              >
                Neeraj Choubisa
              </p>
              <p
                className="testimonial-name mx-2"
                style={{ fontWeight: "300", fontSize: "10px" }}
              >
                Full Stack Blockchain Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
