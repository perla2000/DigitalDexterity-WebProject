import React, { useState } from "react";
import "./LogForm.css";
import FormLogin from "./FormLogin";
import Trying from "../Trying";
import { Container } from "reactstrap";
import Carousel from "../Carousel.js";
import Footer from "../Footer.js";
import Navv from "../Navv";
import Nav2 from "../Nav2";
import useLogForm from "./useLogForm";
import { Redirect } from "react-router";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? (
        <>
          <Nav2 />
          <div className="form-container">
            <span className="close-btn">×</span>
            <div className="form-content-left">
              <img className="form-img" src="assets/login2.png" />
            </div>
            <FormLogin submitForm={submitForm} />
          </div>
        </>
      ) : (
        <div className="container-center">
          if (values.username=="admin" && values.password=="admin"){" "}
          {Redirect("/admin")}
          {/* <Navv />
          <Carousel />
          <Trying />
          <Footer /> */}
        </div>
      )}
    </>
  );
};

export default Form;
