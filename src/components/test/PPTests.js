import React, { Component } from "react";
import "./PPTests.css";

function PPTests() {
  return (
    <html>
      <head></head>
      <body>
        <div id="main">
          <div id="header">
            <h1
              style={{
                textAlign: "center",
                marginTop: "80px",
              }}
            >
              Test your knowledge in Power Point
            </h1>
          </div>

          <h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Power Point
          </h1>
          <form id="form1">
            <div>
              <fieldset>
                <h2>
                  What is the best way to design the layout for your slides?
                </h2>
                <label for="overtype">
                  <input type="radio" name="variable" value="0" id="overtype" />
                  Create layouts for slides, handouts, and notes using the
                  Master Layout dialog box in slide master view
                </label>
                <label for="delete_key">
                  <input
                    type="radio"
                    name="variable"
                    value="0"
                    id="delete_key"
                  />
                  For each new slide, select a layout from the Slide Layout task
                  plane
                </label>
                <label for="insert">
                  <input type="radio" name="variable" value="25" id="insert" />
                  Apply templates from the Slide Design task plane
                </label>

                <h2>
                  To make one section of slides in your presentation use a
                  different design template from the other slides, what do you
                  do?{" "}
                </h2>
                <label for="sub_string">
                  <input type="radio" name="sub" value="25" id="sub_string" />
                  Select the slide thumbnails in that section, and apply a
                  different color scheme.
                </label>
                <label for="sub_join">
                  <input type="radio" name="sub" value="0" id="sub_join" />
                  Select the slide thumbnails in that section, and apply a
                  different design template.
                </label>
                <label for="sub_join">
                  <input type="radio" name="sub" value="0" id="sub_join" />
                  Select one of the slides in the section you want to change,
                  customize the fonts and colors, and use the Format Painter to
                  apply those styles to the other slides in the section.
                </label>

                <h2>
                  Using a custom animation effect, how do you make text appear
                  on a slide letter by letter?
                </h2>
                <label for="cat_string">
                  <input type="radio" name="con" value="0" id="cat_string" />
                  Apply the animation scheme Fade in one by one.
                </label>
                <label for="cat_join">
                  <input type="radio" name="con" value="25" id="cat_join" />
                  Apply an entrance effect, and then set it to By letter in the
                  Effect Options dialog box.
                </label>
                <label for="cat_join">
                  <input type="radio" name="con" value="25" id="cat_join" />
                  Apply the Fly In entrance effect to the text, and then set its
                  speed to Very Slow.
                </label>

                <h2>
                  During a slide show, pressing the Esc key will
                  __________________.{" "}
                </h2>
                <label for="if_string">
                  <input type="radio" name="head" value="0" id="if_string" />
                  Displays the last slide.
                </label>
                <label for="if_join">
                  <input type="radio" name="head" value="0" id="if_join" />
                  Displays slide 1.
                </label>
                <label for="if_info">
                  <input type="radio" name="head" value="0" id="if_info" />
                  Ends the slide show.
                </label>
                <label for="if_info">
                  <input type="radio" name="head" value="0" id="if_info" />
                  Displays the previous slide.
                </label>

                <h2>
                  You've customized a design template in one presentation and
                  you want to use it in another presentation. What's the best
                  way to do this?{" "}
                </h2>
                <label for="if_string">
                  <input type="radio" name="open" value="0" id="if_string" />
                  Use the Browse feature in the Slide Design task pane to find
                  the file that has your design template and apply it to the
                  current file.
                </label>
                <label for="if_join">
                  <input type="radio" name="open" value="0" id="if_join" />
                  Copy and paste the slide with the design template you want
                  into the new presentation; inserted slides will inherit the
                  design
                </label>
                <label for="if_info">
                  <input type="radio" name="open" value="0" id="if_info" />
                  Save the presentation that has the design template with a new
                  name, and then use the new file for your presentation.
                </label>

                <h2>
                  PowerPoint has direct connections with which of the following
                  from its toolbars or menu system?{" "}
                </h2>
                <label for="if_string">
                  <input type="radio" name="cmd" value="0" id="if_string" />
                  Microsoft Word
                </label>
                <label for="if_join">
                  <input type="radio" name="cmd" value="0" id="if_join" />
                  Internet Explorer
                </label>
                <label for="if_info">
                  <input type="radio" name="cmd" value="0" id="if_info" />
                  Your E-Mail program
                </label>
                <label for="if_string">
                  <input type="radio" name="cmd" value="0" id="if_string" />
                  All of the above
                </label>

                <h2>
                  You've put a layout on your slide that contains a placeholder
                  for a picture. But you'd rather use the Clip Art task pane to
                  insert the art than the options you get when you click the
                  Insert Clip Art icon in the placeholder. What do you do?
                </h2>
                <label for="if_string">
                  <input type="radio" name="var" value="0" id="if_string" />
                  Apply a Blank layout instead, and then use the Insert menu
                  (point to Picture, and then click Clip Art) to open the Clip
                  Art task pane and insert the picture.
                </label>
                <label for="if_join">
                  <input type="radio" name="var" value="0" id="if_join" />
                  Select the placeholder on the slide, and then press DELETE.
                  Then use the Insert menu (point to Picture, and then click
                  Clip Art) to open the Clip Art task pane and insert the
                  picture.
                </label>
                <label for="if_info">
                  <input type="radio" name="var" value="0" id="if_info" />
                  Make sure the picture placeholder is selected, and then use
                  the Insert menu (point to Picture, and then click Clip Art) to
                  open the Clip Art task pane and insert the picture.
                </label>

                <h2>
                  You're giving your presentation, and you need to click to a
                  slide that's a few slides back. How do you get there?
                </h2>
                <label for="if_string">
                  <input type="radio" name="comp" value="0" id="if_string" />
                  Press ESC to get back into normal view; click the correct
                  slide thumbnail in normal view; then click the Resume Slide
                  Show button.
                </label>
                <label for="if_join">
                  <input type="radio" name="comp" value="0" id="if_join" />
                  Press BACKSPACE until you hit the slide you're looking for.
                </label>
                <label for="if_info">
                  <input type="radio" name="comp" value="0" id="if_info" />
                  Right-click, point to Go on the shortcut menu, point to By
                  Title, and click the slide you want to go to.
                </label>

                <h2>
                  Which key do you press to go into Slide Show view and always
                  start on the first slide?
                </h2>
                <label for="if_string">
                  <input type="radio" name="numb" value="0" id="if_string" />
                  ESC
                </label>
                <label for="if_join">
                  <input type="radio" name="numb" value="0" id="if_join" />
                  ctrl + s
                </label>
                <label for="if_info">
                  <input type="radio" name="numb" value="0" id="if_info" />
                  F5
                </label>
                <label for="if_info">
                  <input type="radio" name="numb" value="0" id="if_info" />
                  Fn + F5
                </label>

                <button onClick="returnScore()" type="submit" value="Submit">
                  Submit
                </button>
              </fieldset>
            </div>
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

export default PPTests;
