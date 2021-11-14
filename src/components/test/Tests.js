import React, { Component } from "react";
import "./Tests.css";
import Object from "../../shared/object";

class Tests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Object,
    };
  }

  render() {
    return (
      <html>
        <body>
          <div class="main">
            <div class="header">
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "80px",
                }}
              >
                {this.state.Object.Powerpoint.quizTitle}
              </h1>
            </div>

            <form id="form1">
              <div>
                <fieldset>
                  {this.state.Object.Powerpoint.questions.map((question, j) => (
                    //every element in react requires a key for updates

                    <div style={{ marginTop: "50px" }} key={question.id}>
                      <div>
                        <h2>{question.description}</h2>
                        {question.answers.map((answer) => (
                          <label for="overtype">
                            <input
                              type="radio"
                              name={j}
                              value="0"
                              id="overtype"
                            />
                            {answer[0]}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button onClick="returnScore()" type="submit" value="Submit">
                    Submit
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
          {/* <p>
            Your grade is: <span id="grade">__</span>
          </p>
          <p id="grade2"></p> 
         <script>
            document.getElementById("form1").onsubmit = function(){
              variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
              sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
              con = parseInt(document.querySelector('input[name = "con"]:checked').value);
              ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);

              result = variable + sub + con + ifstate;
              document.getElementById("grade").innerHTML = result;
              return false; 
        &rbrace;
        </script> */}
        </body>
      </html>
    );
  }
}
export default Tests;
