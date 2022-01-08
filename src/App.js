import React, { Component } from "react";
import Menu from "./components/HomePhotos.js";

import Navv from "./components/Navv.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "./components/Carousel.js";
import Footer from "./components/Footer.js";

import Welcome from "./components/WelcomePage.js";
import ExcelTest from "./components/test/ExcelTest.js";
import PPTests from "./components/test/PPTests.js";
import Trying from "./components/Trying.js";
import Profile from "./components/Profile.js";
import AdminPage from "./components/adminPage.js";
import FormSignup from "./components/login/FormSignup";
import Form from "./components/login/Form";
import LogForm from "./components/login/LogForm";
import Nav2 from "./components/Nav2.js";
import { Nav } from "reactstrap";
import { TestUser } from "./shared/database.js";
import { Tests } from "./shared/database.js";
import { Users } from "./shared/database.js";
import PopUpshow from "./components/PopUpshow.js";
import Database from "./components/test/testdatabase.js";
import Timer from "./components/timer.js";
import AdminHome from "./components/adminHomePage";

import { fetchTests } from "./redux/ActionCreators";
import { postTest } from "./redux/ActionCreators";
import AdminUser from "./components/adminUser.js";

// const mapStateToProps = state => {

//   return {

//     Tests: state.tests,

//   //questions:

//   }

// }
// const mapDispatchToProps = dispatch => ({

// postTest:( dateOuverture, duree, dateModification, quizTitle)  =>dispatch(postTest(dateOuverture, duree, dateModification, quizTitle))
// })
//Tests={this.props.test} postTest={this.props.postTest} hyde bl <>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tests,
      TestUser,
      Users,
    };
  }
  // componentDidMount(){
  //   this.props.fetchTests();
  // }
  render() {
    return (
      <Router>
        {/* <div>
          <Timer />
          <Database />
        </div> */}
        {
          <div className="App" style={{ objectFit: "cover" }}>
            {
              <div
                style={{
                  // backgroundImage: "url(" + "assets/white_bg.jpg" + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: 1000,
                }}
              >
                <div>
                  <Switch>
                    <Route exact path="/">
                      <Welcome />
                    </Route>
                    {/* <Route exact path="/view_admin_test">
                    </Route> */}
                    <Route exact path="/login">
                      <LogForm />
                    </Route>
                    <Route exact path="/register">
                      <Form />
                    </Route>
                    <Route exact path="/home">
                      <div>
                        <Navv />
                        <Carousel />
                        <Trying />
                        <Footer />
                      </div>
                    </Route>
                    <Route exact path="/admin">
                      <div>
                        {" "}
                        <AdminHome />
                      </div>
                      {/* <AdminPage /> */}
                    </Route>
                    <Route exact path="/modAd">

                   <AdminPage  />     
                 </Route>
                 
                    <Route exact path="/pptest">
                      <PPTests />
                    </Route>
                    <Route exact path="/extest">
                      <ExcelTest />
                    </Route>
                    <Route exact path="/test">
                      <div>
                        <Timer />
                        <Database />
                      </div>
                    </Route>
                    <Route exact path="/popup">
                      <PopUpshow />
                    </Route>
                    <Route exact path="/profile">
                      <Profile Tests={this.props.test} />
                    </Route>
                  </Switch>
                </div>
              </div>
            }
          </div>
        }
      </Router>
    );
  }
}export default App;
// withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
