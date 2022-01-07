import React, { Component } from "react";
import "./Tests.css";

import { Tests } from "../../shared/database.js";
import { Questions } from "../../shared/database.js";
import { Answers } from "../../shared/database.js";
import { AnswerQuestion } from "../../shared/database.js";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tests,
      Questions,
      Answers,
      AnswerQuestion,
      score:0,
 

    };
  }

  returnScore(event) {
    var result=0;
    for (var i = 0; i < AnswerQuestion.length; ++i) {
      var ele = document.getElementsByName(AnswerQuestion[i].idAnswerQuestion);
      for (var j = 0; j < ele.length; ++j) {
        if (ele[j].checked && ele[j].id == AnswerQuestion[i].correcte) {
          result += 1;
        }
      }
    }
    this.setState({score:result})
    event.preventDefault();
  };

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
                {Tests[0].quizTitle}
              </h1>
            </div>
            <form id="form1">
              <div>
                <fieldset>
                  {Questions
                    .filter((q) => q.idTest == Tests[0].idTest)
                    .map((q) => (
                      <div style={{ marginTop: "50px" }}>
                        <div>
                          <h2>{q.description}</h2>
                          {Answers
                            .filter((a) => a.idAnswerQuestion == q.idQuestion)
                            .map((a) => (
                              <label class="label" for="overtype">
                                <input
                                  type="radio"
                                  name={a.idAnswerQuestion}
                                  value="0"
                                  id={a.idAnswer}
                                />
                                {a.description}
                              </label>
                            ))}

                        </div>
                      </div>
                    ))}

                  <button
                    onClick={() => this.returnScore()}
                    type="submit"
                    value="Submit"
                    
                  >
                    Submit
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
         <p>
            Your grade is: <span id="grade">{this.state.score}</span>
          </p>
          <p id="grade2"></p> 
         <script>
            
        </script> 
        </body>
      </html>
    );
  }
}
export default Database;
