import React, { useState } from "react";
import "./LogForm.css";
import FormLogin from "./FormLogin";

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
        <FormLogin submitForm={submitForm} />
      </div>
    </>
  );
};

export default Form;
