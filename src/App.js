import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Screens/Navbar";
import Blogs from "./Screens/Blogs";
import About from "./Screens/About";
import Footer from "./Screens/Footer";
import { ToastContainer } from "react-toastify";
import Home from "./Screens/Home";
import Property from "./Screens/Property"
const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div
        className="container-fluid main "
        // style={{ border: "1px solid black" }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/property" element={<Property />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
