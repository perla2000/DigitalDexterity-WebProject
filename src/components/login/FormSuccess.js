import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img className="form-img-2" src="./assets/request.png" />
      <a href="/login" position="">
        <button className="form-input-btn2">Back</button>
      </a>
    </div>
  );
};

export default FormSuccess;
