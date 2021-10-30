import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Register.css";
import vid from "./videos/white.mp4";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  render() {
    const { errors } = this.state;
    return (
      <div       >
          <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={vid} type="video/mp4" />
        </video>
      <div
        className="container"

      >
        <div className="row">
          <div className="col-10 mt-5  offset-1 text-center registerText">
            <h3>Register to become a new user</h3>
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{color:'#e84a5f'}}>
                Log In
              </Link>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1 text-center">
            <form noValidate onSubmit={this.onSubmit}>
              {/* Name */}
              <div className="col-8 offset-2">
                <label htmlFor="name">Name:</label>
                <span className="text-light">{errors.name}</span>
                <input
                  type="text"
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  className={classnames("form-control", {
                    invalid: errors.name,
                  })}
                  placeholder="Enter your name..."
                />
              </div>

              {/* Email */}
              <div className="col-8 offset-2">
                <label htmlFor="email">Email:</label>
                <span className="text-light">{errors.email}</span>
                <input
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  className={classnames("form-control", {
                    invalid: errors.email,
                  })}
                  placeholder="Enter your email..."
                />
              </div>

              {/* Password */}
              <div className="col-8 offset-2">
                <label htmlFor="password">Password:</label>
                <span className="text-light">{errors.password}</span>
                <input
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  className={classnames("form-control", {
                    invalid: errors.password,
                  })}
                  placeholder="Enter a password..."
                />
              </div>

              {/* Validate password */}
              <div className="col-8 offset-2">
                <label htmlFor="password2">Confirm Password:</label>
                <span className="text-light">{errors.password2}</span>
                <input
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  className={classnames("form-control", {
                    invalid: errors.password2,
                  })}
                  placeholder="Re-type your password..."
                />
              </div>

              {/* Submit button */}
              <div className="col-8 offset-2">
                <button className="btn signupbtn" type="submit" href="/home">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default Register;
