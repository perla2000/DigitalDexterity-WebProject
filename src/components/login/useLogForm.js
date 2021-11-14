import { useState, useEffect } from "react";
import { useHistory, Redirect, withRouter } from "react-router-dom";
import AdminPage from "../adminPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useLogForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (values.username == "admin" && values.password == "admin") {
      Redirect("/admin");
    } else {
      Redirect("/home");
    }
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  //   this.handleLogin = this.handleLogin.bind(this);

  //   handleLogin((path) => {
  //     if (this.values.username == "admin" && this.values.password == "admin") {
  //       this.props.history.push(path);
  //       setErrors(validate(values));
  //       setIsSubmitting(true);
  //     }
  //   });
  // else if (values.username != "admin" && values.password != "admin") {
  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  // } else {
  //   setErrors(validate(values));
  // }
  return { handleChange, handleSubmit, values, errors };
};

export default useLogForm;
