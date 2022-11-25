import React from "react";

const Homecard = ({ img,title,summary }) => {
  return (
    <>
      <div className="col-md-5 col-8 home-card rounded-3 p-4  col-xl-5 col-xs-5 mx-auto mt-5">
        <div className="d-flex justify-content-center align-items-center overflow-hidden home-card-img">
          {img}
        </div>
        <h4
          className="heading text-center text-dark mt-4"
          style={{ fontWeight: "700", fontSize: "15px" }}
        >
          {title}
        </h4>
        <p
          className="text-dark text-center mt-2"
          style={{ fontWeight: "500", fontSize: "11px" }}
        >
          {summary}
        </p>
      </div>
    </>
  );
};

export default Homecard;
