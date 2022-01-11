import React, { Component } from "react";
import "./Profile.css";
import { TestUser } from "../shared/database.js";
import { Tests } from "../shared/database.js";
import { Users } from "../shared/database.js";

//<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tests,
      TestUser,
      Users,
    };
  }
  render() {
    return (
      <div class="wrapper">
        <div class="left">
          <img src="assets/profile.png" alt="user" width="200" height="250" />
          <h4>
            {
              Users.filter((u) => u.id == localStorage.getItem("userId"))[0]
                .username
            }
          </h4>
          <p>UI Developer</p>
        </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>
                  {
                    Users.filter(
                      (u) => u.id == localStorage.getItem("userId")
                    )[0].email
                  }
                </p>
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
            {TestUser.filter((tu) => tu.idUser == Users[0].id).map((tu) =>
              Tests.filter((t) => t.idTest == tu.idTest).map((t) => (
                <div class="projects_data">
                  <div class="data">
                    <h4>{t.quizTitle}</h4>
                    <p>Grade over 20:</p>
                  </div>
                  <div class="data">
                    <br />
                    <p>{tu.noteTest}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
