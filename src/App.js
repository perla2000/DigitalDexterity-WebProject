import React, { Component } from "react";
import Menu from "./components/HomePhotos.js";
import SectionLogin from "./components/login.js";
import Navv from "./components/Navv.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./components/Carousel.js";
import Login from "./components/login.js";
import Footer from "./components/Footer.js";
import Tests from "./components/Tests.js";
import Register from "./components/Register.js";
import Welcome from "./components/WelcomePage.js";
import ExcelTest from "./components/ExcelTest.js";
import PPTests from "./components/PPTests.js";
import Trying from "./components/Trying.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ objectFit: "cover" }}>
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
                <SectionLogin />
              </Route>
              <Route exact path="/register">
                <Register />
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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
