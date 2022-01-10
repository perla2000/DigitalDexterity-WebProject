import React, { Component } from "react";
import "./Tests.css";

import { Tests } from "../../shared/database.js";
import { Questions } from "../../shared/database.js";
import { Answers } from "../../shared/database.js";
import { AnswerQuestion } from "../../shared/database.js";
import Timer from "../../components/timer.js";
import{Link} from"react-router-dom";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tests,
      Questions,
      Answers,
      AnswerQuestion,
      score: 0,
    };
  }

  returnScore(event) {
    var result = 0;
    for (var i = 0; i < AnswerQuestion.length; ++i) {
      var ele = document.getElementsByName(AnswerQuestion[i].idAnswerQuestion);
      for (var j = 0; j < ele.length; ++j) {
        if (ele[j].checked && ele[j].id == AnswerQuestion[i].correcte) {
          result += 1;
        }
      }
    }
    alert("your grade is:"+result);
    
    
  }

  render() {
    // const returnScore=()=> {
    //   var result=0;
    //   for (var i = 0; i < AnswerQuestion.length; ++i) {
    //     var ele = document.getElementsByName(AnswerQuestion[i].idAnswerQuestion);
    //     for (var j = 0; j < ele.length; ++j) {
    //       if (ele[j].checked && ele[j].id == AnswerQuestion[i].correcte) {
    //         result += 1;
    //       }
    //     }
    //   }
    //  return(result)
    // };
    return (
      <html>
        <body>
          <div class="main">
            <br />
            <Timer />
            <br />
            <div class="header">
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "80px",
                }}
              >
                {/* {Tests.filter((t)=>t.idTest==this.props.idTest)[0].quizTitle} */}
                {Tests[0].quizTitle}
              </h1>
            </div>
            <form id="form1">
              <div>

                <p id="grade2"></p>
                <fieldset>
                  {Questions.filter((q) => q.idTest == Tests[0].idTest).map(
                    (q) => (
                      <div style={{ marginTop: "50px" }}>
                        <div>
                          <h2>{q.description}</h2>
                          {Answers.filter(
                            (a) => a.idAnswerQuestion == q.idQuestion
                          ).map((a) => (
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
                    )
                  )}
                <Link to="/home">
                  <button
                    onClick={() => this.returnScore()}
                    
                    type="submit"
                    value="Submit"
                    style={{ marginBottom: "30px" }}
                  >
                    Submit
                  </button>
                  </Link>
                </fieldset>
              </div>
            </form>
          </div>
          {/* <script></script> */}
        </body>
      </html>
    );
  }
}
export default Database;
