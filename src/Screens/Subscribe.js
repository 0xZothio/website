import React, { useContext, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { showToastMessage } from "../Utils/toast";
import { DataContext } from "../Utils/DataContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Subscribe = () => {
  const [subscribeData, setSubscribeData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    mobile: "",
  });
  const { closeModal } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeData = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setSubscribeData({ ...subscribeData, [name]: value });
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let res = await axios.post(
        `https://script.google.com/macros/s/AKfycbzjhVDfu39nvYYrsj0XHnZMkP5qDqDZhDoQtuy_vMpjPZXcry_gfFiT7-xT85I4CL8x/exec?first_name=${subscribeData.first_name}&last_name=${subscribeData.last_name}&mobile=${subscribeData.mobile}&email=${subscribeData.email}&function=subscribe`
      );
      if (res.status === 200) {
        showToastMessage("Subscribed Successfully", false);
        setIsLoading(false);
        return;
      }
      showToastMessage("Please Try Again", true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="d-flex flex-column p-md-5 w-50 justify-content-center p-3 mt-4">
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-primary" onClick={closeModal}>
            <AiOutlineCloseCircle />
          </button>
        </div>
        <p className="text-dark mt-2" style={{ fontSize: "15px" }}>
          <span className="text-primary">_____</span> Want To Subscribe{" "}
          <span className="text-primary">_____</span>
        </p>

        <div className="d-flex flex-column mt-3 justify-content-center align-items-center p-5 mw-100 signup-card">
          <div className="d-flex flex-column w-100 justify-content-center align-items-center">
            <form action="">
              <div className="d-flex w-100">
                <input
                  type="text"
                  id="first_name"
                  className="text-dark rounded-sm inputs form-control-sm p-2 me-2"
                  placeholder="First Name"
                  name="first_name"
                  onChange={(e) => onChangeData(e)}
                  value={subscribeData.first_name}
                  required
                />
                <input
                  type="text"
                  id="last_name"
                  className="text-dark rounded-sm inputs form-control-sm p-2"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={(e) => onChangeData(e)}
                  value={subscribeData.last_name}
                  required
                />
              </div>
              <input
                type="email"
                id="email"
                className="d-flex text-dark rounded-sm inputs form-control-sm p-2 mt-3 "
                placeholder="Email Address"
                name="email"
                onChange={(e) => onChangeData(e)}
                value={subscribeData.email}
                required
              />

              <input
                type="number"
                id="mobile"
                name="mobile"
                className="d-flex text-dark rounded-sm inputs form-control-sm p-2 mt-3"
                placeholder="Mobile"
                max="10"
                min="10"
                onChange={(e) => onChangeData(e)}
                value={subscribeData.mobile}
                required
              />
            </form>
            <div className="d-flex justify-content-center">
              <button
                className=" login-button py-1 px-5 mt-4 text-white"
                onClick={subscribe}
              >
                {isLoading ? <Spinner /> : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
