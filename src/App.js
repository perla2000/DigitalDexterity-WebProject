import React, { Component } from "react";
import Menu from "./components/HomePhotos.js";
import SectionLogin from "./components/login/login.js";
import Navv from "./components/Navv.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./components/Carousel.js";
import Footer from "./components/Footer.js";
import Tests from "./components/test/Tests.js";
import Register from "./components/Register.js";
import Welcome from "./components/WelcomePage.js";
import ExcelTest from "./components/test/ExcelTest.js";
import PPTests from "./components/test/PPTests.js";
import Trying from "./components/Trying.js";
import Profile from "./components/Profile.js";

import AdminPage from "./components/adminPage.js";

import FormSignup from "./components/login/FormSignup";
import Form from "./components/login/Form";
import LogForm from "./components/login/LogForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navv />
          <AdminPage />
        </div>
    {/* <div className="App" style={{ objectFit: "cover" }}>
          {
            <div
              style={{
                // backgroundImage: "url(" + "assets/white_bg.jpg" + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                height: 1000,
              }}
            >
              <Navv />
              <Switch>
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route exact path="/login">
                  <LogForm />
                </Route>
                <Route exact path="/register">
                  <Form />
                </Route>
                <Route exact path="/home">
                  <div>
                    <Carousel />
                    <Trying />
                    <Footer />
                  </div>
                </Route>
                <Route exact path="/test">
                  <Tests />
                </Route>
                <Route exact path="/pptest">
                  <PPTests />
                </Route>
                <Route exact path="/extest">
                  <ExcelTest />
                </Route>
                <Route exact path="/test">
                  <Tests />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
              </Switch>
            </div>
          }
        </div>  */}
      </Router>
    );
  }
}

export default App;
