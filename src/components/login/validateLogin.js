import { useStore } from "react-redux";
import { Users } from "../../shared/database.js";

export default function validateLogin(values) {
  let errors = {};
  const userInf = Users.filter((u) => u.username == values.username);
   if (!values.username.trim()) {
    errors.username = "Username required";
  }
  else if (!(userInf[0].username == values.username)) {
    errors.name = "Enter a valid name";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!(userInf[0].email == values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (!(userInf[0].password == values.password)) {
    errors.password = "Invalid password.";
  }
  return errors;
}
