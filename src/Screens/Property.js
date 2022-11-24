import React,{useContext} from "react";
import { RiWechatLine } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import Subscribe from "./Subscribe";
import { DataContext } from "../Utils/DataContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Property = () => {
  let { openModal, closeModal, customStyles, modalIsOpen } =
    useContext(DataContext);
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
          <h1 className="text-center mt-5 fw-bold text-primary">
            Udaipur Rajasthan , India
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi hic
            adipisci cupiditate quod dolore molestiae, quibusdam earum quos
            corrupti nostrum vel nobis esse saepe autem minima reprehenderit nam
            velit sint.
          </p>
        </div>

        <div className="row mt-4">
          <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-sm-12 col-xs-12 d-flex justify-content-between mx-sm-3 mx-md-auto">
            <div className="d-flex flex-column">
              <RiWechatLine size={30} />
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
        </div>
        <div className="row mt-5  mb-2">
          <div className="col-md-12 mx-2 col-12 mx-auto text-center">
            <button className="btn btn-primary btn-hover text-center border-0 px-4 py-3" onClick={openModal}>
              Subscribe The Property
            </button>
          </div>
        </div>
        <div className="row mt-5 mb-3">
          <h1 className="home-heading text-center mt-2">
            {" "}
            <span className="text-primary">____</span>
            About The Property
            <span className="text-primary">____</span>
          </h1>

          <div className="col-md-10 mx-3 col-12 col-xl-10 col-lg-10 col-xs-12 col-sm-12  mt-2">
            <div className="d-flex flex-column mt-3">
              <h1 className="text-center">
                <strong>INTRODUCTION</strong>
              </h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur consectetur dolor expedita optio. Magnam deleniti
                corporis libero vitae, nulla ducimus voluptatum laudantium aut,
                et, officiis sunt nobis doloribus vero nam? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quos commodi alias
                exercitationem aliquid dolores facere ex delectus officia cum
                laborum nemo odit aut voluptas dicta tenetur hic velit, impedit
                nulla.
              </p>
            </div>

            <div className="d-flex flex-column mt-5">
              <h1 className="text-center">
                <strong>PRICE TREND</strong>
              </h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur consectetur dolor expedita optio. Magnam deleniti
                corporis libero vitae, nulla ducimus voluptatum laudantium aut,
                et, officiis sunt nobis doloribus vero nam? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quos commodi alias
                exercitationem aliquid dolores facere ex delectus officia cum
                laborum nemo odit aut voluptas dicta tenetur hic velit, impedit
                nulla.
              </p>
            </div>

            <div className="d-flex flex-column mt-5 mb-5">
              <h1 className="text-center">
                <strong>LOCATION</strong>
              </h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur consectetur dolor expedita optio. Magnam deleniti
                corporis libero vitae, nulla ducimus voluptatum laudantium aut,
                et, officiis sunt nobis doloribus vero nam? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quos commodi alias
                exercitationem aliquid dolores facere ex delectus officia cum
                laborum nemo odit aut voluptas dicta tenetur hic velit, impedit
                nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
