import React from "react";
import { RiWechatLine } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Property = () => {
  return (
    <div className="row">
      <div className="col-md-10 col-12 col-xl-10 col-lg-10 col-xs-12 col-sm-12 mx-auto d-flex justify-content-center align-items-center flex-column ">
        <h2 className="home-heading mt-5 text-center">
          How Our MarketPlace Works
        </h2>
        <p className="text-center text-capitalize">
          {" "}
          <span className="text-primary">____</span>
          Premeium Assets
          <span className="text-primary">____</span>
        </p>
        <h1 className="text-center mt-5 fw-bold" style={{color:"#007AFF"}}>
        927 Euclid Ave Apt 10 - Miami Beach, FL 33139)
        </h1>
        <hr style={{ height: "2.5px !important" }} className="text-primary" />
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          className="mt-2 h-75"
        >
          <div className=" rounded-3">
            <img
              className="rounded-3"
              style={{
                width: "550px",
                height: "200px",
              }}
              src="https://resources.zoth.in/cre/images/101/1.webp"
            />
          </div>
          <div className="  rounded-3">
            <img
              className="rounded-3"
              style={{
                width: "550px",
                height: "200px",
              }}
              src="https://resources.zoth.in/cre/images/102/1.webp"
            />
          </div>
          <div className="  rounded-3">
            <img
              className="rounded-3"
              style={{
                width: "550px",
                height: "200px",
              }}
              src="https://resources.zoth.in/cre/images/104/1.webp"
            />
          </div>
          <div className="  rounded-3">
            <img
              className="rounded-3"
              style={{
                width: "550px",
                height: "200px",
              }}
              src="https://resources.zoth.in/cre/images/105/1.webp"
            />
          </div>
          <div className="  rounded-3">
            <img
              className="rounded-3"
              style={{
                width: "550px",
                height: "200px",
              }}
              src="https://resources.zoth.in/cre/images/106/1.webp"
            />
          </div>
        </Carousel>
        <p className="text-center mt-4">
        This property is a stunning two-story Townhome in a boutique building in the heart of South Beach.
        </p>
      </div>

      {/* <div className="row mt-4">
        <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-sm-12 col-xs-12 mx-auto d-flex justify-content-between">
          <div className="d-flex flex-column">
            <RiWechatLine size={30} color="black"/>
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
          <div className="d-flex flex-column text-center">
            <RiWechatLine size={30} />
            <strong className="text-primary">2 Bed</strong>
          </div>
        </div>
        
      </div> */}
              
      <div className="row mt-5 mb-3">
      
        <h1 className="property-heading text-center mt-2">
          {" "}
          <span className="text-primary">____</span>
          About The Property
          <span className="text-primary">____</span>
        </h1>

        <div className="col-md-10 col-12 col-xl-10 col-lg-10 col-xs-12 col-sm-12 mx-auto mt-5 text-center">
            <div className="d-flex flex-column mt-3 text-center">
                <h1 className="text-center">
                    <strong>INTRODUCTION</strong>
                </h1>
                <p className="text-center">
                This Miami Beach condo was recently featured on HGTV’s "My Lottery Dream Home" Season 13 Episode 10: South Beach Birth Rite, which first aired September 23, 2022.<br></br> <br></br>

This property was unaffected by Hurricane Ian and comes with flood insurance and hurricane impact windows.<br></br> <br></br>

Stunning two-story Townhome in a boutique building in the heart of South Beach. This apartment building was converted into 10 two-story townhomes back in 2012. This 2-bedroom, 1.5-bathroom home is a corner unit, including modern eat-in kitchen, stainless steel appliances, washer/dryer, one A/C unit for each floor, and hurricane impact windows. Property is steps away from Ocean Drive, sandy beaches, and the Atlantic Ocean. The Art Deco district with Espanola Way & Lincoln Road are within walking distance. Unit includes appliances, blinds, and furniture.<br></br> <br></br>

Tenant is on a 1 year lease from 07/26/2022 - 07/31/2023 and is paying $3,250/month with a $6,500 deposit.


                </p>
            </div>

            {/* <div className="d-flex flex-column mt-5">
                <h1 className="text-center">
                    <strong>PRICE TREND</strong>
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur consectetur dolor expedita optio. Magnam deleniti corporis libero vitae, nulla ducimus voluptatum laudantium aut, et, officiis sunt nobis doloribus vero nam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi alias exercitationem aliquid dolores facere ex delectus officia cum laborum nemo odit aut voluptas dicta tenetur hic velit, impedit nulla.
                </p>
            </div>

            <div className="d-flex flex-column mt-5">
                <h1 className="text-center">
                    <strong>LOCATION</strong>
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur consectetur dolor expedita optio. Magnam deleniti corporis libero vitae, nulla ducimus voluptatum laudantium aut, et, officiis sunt nobis doloribus vero nam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi alias exercitationem aliquid dolores facere ex delectus officia cum laborum nemo odit aut voluptas dicta tenetur hic velit, impedit nulla.
                </p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Property;
