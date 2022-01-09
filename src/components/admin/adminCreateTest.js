import React, { Component } from "react";
import "../Profile.css";
import { TestUser } from "../../shared/database.js";
import { Tests } from "../../shared/database.js";
import { Users } from "../../shared/database.js";
import { Link } from "react-router-dom";
import AdminPage from "./adminPage";

class CreateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tests,
      TestUser,
      Users,
    };
  }
  toggleCreate = () => {
    this.props.history.push("/modAd");
  };
  render() {
    return (
      <div class="wrapper">
        <div class="left">
          <h4>Administrator </h4>
          <br />
          <Link
            to="/view_admin_test"
            style={{
              color: "white",
              fontSize: "15px",
            }}
          >
            <p>List of Users</p>
          </Link>
          <Link
            to="/admin"
            style={{
              color: "white",
              fontSize: "15px",
            }}
          >
            <p>List of Tests</p>
          </Link>
          <Link
            to="/creatTest"
            style={{
              color: "white",
              fontSize: "15px",
            }}
          >
            Create new Test
          </Link>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            Users with Administrative Access may be required to perform some
            security activities such as software or operating system patching
            and updates, as well as monitoring for unusual activity. If a
            security incident is suspected, no additional actions should be
            taken before consulting with the Information Security Office by
            email iso-ir@andrew.cmu.edu or phone 412.268.2044 per the Procedure
            Responding to a Compromised Computer document.
          </p>
        </div>
        <div class="right">
          <div class="info">
            <img
              src="assets/admin2.jfif"
              alt="user"
              width="100%"
              height="250"
              position="absolute"
              objectFit="cover"
            />
            <div class="info_data">
              <div class="data">
                <br />
                <div class="projects">
                  <h3>Create New test</h3>

                  <div class="projects_data">
                    <div class="data">
                      <h4>Fill in this form to create your Test:</h4>
                      <p>
                       
                      </p>
                    </div>
                    <div class="data">
                  
                    </div>
                  </div>
                  <div class="projects_data">
                    <div class="data">
                      <p>
                        <h4>Title:</h4>
                      </p>
                    </div>
                    <div class="data">
                      <br />
                      <br />

                      <input
                        type="text"
                        name="quizTitle"
                        required="required"
                        placeholder="Enter a Title..."
                        style={{ width: "100%", height: "30%" }}
                      />
                    </div>
                    
                  </div>
                  <div class="projects_data">
                    <div class="data">
                      <p>
                        <h4>Duration:</h4>
                      </p>
                    </div>
                    <div class="data">
                      <br />
                      <br />

                      <input
                        type="text"
                        name="quizTitle"
                        required="required"
                        placeholder="Enter a Title..."
                        style={{ width: "100%", height: "30%" }}
                      />
                    </div>
                    
                  </div>
                  <div class="projects_data">
                    <div class="data">
                      <p>
                        <h4>Launching date:</h4>
                      </p>
                    </div>
                    <div class="data">
                      <br />
                      <br />

                      <input
                        type="text"
                        name="quizTitle"
                        required="required"
                        placeholder="Enter a Title..."
                        style={{ width: "100%", height: "30%" }}
                      />
                    </div>
                    
                  </div>
                  <button
                    onClick={() => this.toggleCreate()}
                    type="submit"
                    value="Submit"
                    style={{width:"40%",fontSize:"20px"}}
                    
                  >
                    Save & continue
                  </button>
                  
                </div>
                {!this.state.seen ? <CreateTest toggle={this.togglePop} /> : <AdminPage />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTest;
