import React, { useState } from "react";
import "./LogForm.css";
import FormLogin from "./FormLogin";
import Welcome from "./WelcomePage";
import Trying from "./Trying";
import { Container } from "reactstrap";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="assets/auth2.png" />
        </div>
        {!isSubmitted ? <FormLogin submitForm={submitForm} /> : <Trying />}
      </div>
    </>
  );
};

export default Form;
