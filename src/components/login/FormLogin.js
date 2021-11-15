import React from "react";
import validate from "./validateLogin";
import useLogForm from "./useLogForm";
import "./LogForm.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useLogForm(
    submitForm,
    validate
  );

  console.log(errors);
  console.log(values);

  return (
    <>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Log in now if you have an account!</h1>
          <div className="form-inputs">
            <label className="form-label"> Username </label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors && errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors && errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Log in
          </button>
          <span className="form-input-login">
            Don't have an account? Sign up <a href="/Register">here</a>
          </span>
        </form>
      </div>
    </>
  );
};

export default FormLogin;