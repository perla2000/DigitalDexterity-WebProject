import React, { Component } from "react";
import "../Profile.css";
import { TestUser } from "../../shared/database.js";
import { Tests } from "../../shared/database.js";
import { Users } from "../../shared/database.js";
import { Link } from "react-router-dom";

class AdminUser extends Component {
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
                  <h3>Users</h3>
                  {Users.map((u) => (
                    <div class="projects_data">
                      <div class="data">
                        <h4>{u.username}</h4>
                        <p>
                          {Tests.map((t) => (
                            <p> {t.quizTitle}</p>
                          ))}
                        </p>
                      </div>
                      <div class="data">
                        <br />
                        <p>
                          {" "}
                          {TestUser.filter((tu) => tu.idUser == u.id).map(
                            (tu) =>
                              Tests.filter((t) => t.idTest == tu.idTest).map(
                                (t) => <p> {tu.noteTest}</p>
                              )
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminUser;
