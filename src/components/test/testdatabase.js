import React, { Component } from "react";
import "./Tests.css";

import {Tests} from "../../shared/database.js";
import {Questions} from "../../shared/database.js";
import {Answers} from "../../shared/database.js";
import {AnswerQuestion} from "../../shared/database.js";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Object,
    };
  }

  returnScore() {
    var score = 0;
    for(var i=0; i<AnswerQuestion.length; ++i) {
      var ele = document.getElementsByName(AnswerQuestion[i].idAnswerQuestion);
      for(var j=0; j<ele.length; ++j) {
        if (ele[j].checked && ele[j].id == AnswerQuestion[i].correcte) {
          score += 1;
        }
      }
    }
    alert("your score is " + score);
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
                {Tests.Powerpoint.quizTitle}
              </h1>
            </div>
            <form id="form1">
              <div>
                <fieldset>
                    
                        {(Questions.questions.filter((q) => q.idTest == Tests.Powerpoint.idTest)).map((q)=>(
                            <div style={{ marginTop: "50px" }} >
                            <div>
                        <h2>{q.description}</h2>
                        {(Answers.answers.filter((a) => a.idAnswerQuestion == q.idQuestion)).map((a)=>(
                        <label class="label" for="overtype">
                            <input
                              type="radio"
                              name= {a.idAnswerQuestion}
                              value="0"
                              id={a.idAnswer}
                            />
                            {a.description}
                          </label>))}
                          </div>
                    </div>
                          ))}
                     
                
                  <button onClick={() => this.returnScore()} type="submit" value="Submit">
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
export default Database;
