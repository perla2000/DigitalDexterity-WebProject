import React, { Component } from "react";
import "./Tests.css";

function Tests() {
  return (
    <html>
      <head>
        <title>Word Quiz</title>
      </head>
      <body>
        <div id="main">
          <div id="header">
            <h1
              style={{
                textAlign: "center",
                marginTop: "80px",
              }}
            >
              Test your knowledge in Word
            </h1>
          </div>

          <h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            JavaScript Quiz
          </h1>
          <form id="form1">
            <fieldset>
              <h2>
                You place the insertion point in the middle of a paragraph and
                start typing. But the new text deletes existing text. What's the
                problem and how do you fix it?
              </h2>
              <label for="overtype">
                <input type="radio" name="variable" value="0" id="overtype" />
                Word is in Overtype mode. Press BACKSPACE and retype.
              </label>
              <label for="delete_key">
                <input type="radio" name="variable" value="0" id="delete_key" />
                The DELETE key is pressed in. Press DELETE again..
              </label>
              <label for="insert">
                <input type="radio" name="variable" value="25" id="insert" />
                Word is in Overtype mode. Press INSERT to turn it off.
              </label>

              <h2>Once you've deleted the text, you can't get it back.</h2>
              <label for="sub_string">
                <input type="radio" name="sub" value="25" id="sub_string" />
                True.
              </label>
              <label for="sub_join">
                <input type="radio" name="sub" value="0" id="sub_join" />
                False
              </label>

              <h2>
                As you type a paragraph, press ENTER to move from one line to
                the next.
              </h2>
              <label for="cat_string">
                <input type="radio" name="con" value="0" id="cat_string" />
                True
              </label>
              <label for="cat_join">
                <input type="radio" name="con" value="25" id="cat_join" />
                False
              </label>

              <h2>The best way to create a heading in a document is to:</h2>
              <label for="if_string">
                <input type="radio" name="head" value="0" id="if_string" />
                Apply a larger font size to it than the body text.
              </label>
              <label for="if_join">
                <input type="radio" name="head" value="0" id="if_join" />
                Add bold formatting by clicking the Bold button on the
                Formatting toolbar.
              </label>
              <label for="if_info">
                <input type="radio" name="head" value="0" id="if_info" />
                Apply a heading style.
              </label>

              <h2>How do you open the Header and Footer toolbar?</h2>
              <label for="if_string">
                <input type="radio" name="open" value="0" id="if_string" />
                On the View menu, click Toolbars, and select Header and Footer
                from the list of toolbars.
              </label>
              <label for="if_join">
                <input type="radio" name="open" value="0" id="if_join" />
                On the View menu, click Header and Footer.
              </label>
              <label for="if_info">
                <input type="radio" name="open" value="0" id="if_info" />
                Right–click any toolbar and click Header and Footer.
              </label>

              <h2>Which keyboard shortcut bolds selected text?</h2>
              <label for="if_string">
                <input type="radio" name="cmd" value="0" id="if_string" />
                Ctrl+B
              </label>
              <label for="if_join">
                <input type="radio" name="cmd" value="0" id="if_join" />
                Alt+B
              </label>
              <label for="if_info">
                <input type="radio" name="cmd" value="0" id="if_info" />
                File/Format/Bold
              </label>
              <label for="if_string">
                <input type="radio" name="cmd" value="0" id="if_string" />
                None of the above.
              </label>

              <h2>
                Suddenly the Word does not display your favorite toolbar. What
                has happened?
              </h2>
              <label for="if_string">
                <input type="radio" name="var" value="0" id="if_string" />
                Your program has been infected by a macro virus.
              </label>
              <label for="if_join">
                <input type="radio" name="var" value="0" id="if_join" />
                This version of Word does not support toolbars.
              </label>
              <label for="if_info">
                <input type="radio" name="var" value="0" id="if_info" />
                Your toolbar option has been deleted from the menus.
              </label>
              <label for="if_info">
                <input type="radio" name="var" value="0" id="if_info" />
                Your toolbar has been unchecked under the View/Toolbars menu.
              </label>

              <h2>
                How many different documents can you have open at one time?
              </h2>
              <label for="if_string">
                <input type="radio" name="comp" value="0" id="if_string" />
                No more than three.
              </label>
              <label for="if_join">
                <input type="radio" name="comp" value="0" id="if_join" />
                Only one.
              </label>
              <label for="if_info">
                <input type="radio" name="comp" value="0" id="if_info" />
                As many as your computer memory will hold.
              </label>
              <label for="if_info">
                <input type="radio" name="comp" value="0" id="if_info" />
                No more than your Taskbar can display.
              </label>

              <h2>How many margins are on a page?</h2>
              <label for="if_string">
                <input type="radio" name="numb" value="0" id="if_string" />
                Two (header and footer).
              </label>
              <label for="if_join">
                <input type="radio" name="numb" value="0" id="if_join" />
                Four (top, bottom, right, left).
              </label>
              <label for="if_info">
                <input type="radio" name="numb" value="0" id="if_info" />
                Two (landscape and Portrait).
              </label>
              <label for="if_info">
                <input type="radio" name="numb" value="0" id="if_info" />
                Two (top and bottom).
              </label>

              <button onClick="returnScore()" type="submit" value="Submit">
                Submit
              </button>
            </fieldset>
          </form>

          {/* <p>
            Your grade is: <span id="grade">__</span>
          </p>
          <p id="grade2"></p> */}
        </div>
        {/* <script>
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
var answers = ["0", "25"],
  tot = answers.length;

function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName); // Get radio group by-name
  for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value; // return the checked value
}

function getScore() {
  var score = 0;
  for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1; // increment only
  return score;
}

function returnScore() {
  alert("Your score is " + getScore() + "/" + tot);
}

export default Tests;
