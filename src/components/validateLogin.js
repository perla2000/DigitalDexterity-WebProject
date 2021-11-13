export default function validateLogin(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  //   else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //     errors.name = "Enter a valid name";
  //   }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  const passwordRegex = /(?= .*[0-9])/;

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else if (passwordRegex.test(values.password)) {
    errors.password = "Invalid password. Must Contain one number";
  }
}
