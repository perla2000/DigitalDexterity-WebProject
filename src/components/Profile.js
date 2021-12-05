import React, { Component } from "react";
import "./Profile.css";
import { SocialIcon } from "react-social-icons";
//<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>;

class Profile extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="left">
          <img src="assets/profile.png" alt="user" width="200" height="250" />
          <h4>Lynn William</h4>
          <p>UI Developer</p>
        </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>lynn@gmail.com</p>
              </div>
              <div class="data">
                <h4>Phone</h4>
                <p>0001-213-998761</p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
              <div class="data">
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="projects">
            <h3>Tests</h3>
            <div class="projects_data">
              <div class="data">
                <h4>Recent</h4>
                <p>Grade over 20:</p>
              </div>
              <div class="data">
              <br/>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
