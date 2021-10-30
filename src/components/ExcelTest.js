import React, { Component } from "react";
import "./ExcelTest.css";

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

function ExcelTest() {
  return (
    <html>
      <head>
        <title> Excel Quiz</title>
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
              Test your knowledge in Excel
            </h1>
          </div>

          <h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Excel
          </h1>
          <form id="form1">
            <h2>
              A fast way to add up this column of numbers is to click on the
              cell below the numbers and then:
            </h2>
            <label for="overtype">
              <input type="radio" name="variable" value="0" id="overtype" />
              Click Subtotals on the Data menu.
            </label>
            <label for="delete_key">
              <input type="radio" name="variable" value="0" id="delete_key" />
              View the sum in the formula bar.
            </label>
            <label for="insert">
              <input type="radio" name="variable" value="25" id="insert" />
              Click the AutoSum button on the Standard toolbar, then press
              ENTER.
            </label>

            <h2>
              There are three worksheets with every new workbook. You can change
              that automatic number if you want to
            </h2>
            <label for="sub_string">
              <input type="radio" name="sub" value="25" id="sub_string" />
              True.
            </label>
            <label for="sub_join">
              <input type="radio" name="sub" value="0" id="sub_join" />
              False
            </label>

            <h2>
              To add a new row, click a cell in the row immediately above where
              you want the new row.
            </h2>
            <label for="cat_string">
              <input type="radio" name="con" value="0" id="cat_string" />
              True
            </label>
            <label for="cat_join">
              <input type="radio" name="con" value="25" id="cat_join" />
              False
            </label>

            <h2>How do you change the column width to fit the contents?</h2>
            <label for="if_string">
              <input type="radio" name="ifstate" value="0" id="if_string" />
              Single-click the boundary to the left of the column heading.
            </label>
            <label for="if_join">
              <input type="radio" name="ifstate" value="0" id="if_join" />
              Double-click the boundary to the right of the column heading.
            </label>
            <label for="if_info">
              <input type="radio" name="ifstate" value="0" id="if_info" />
              Press ALT and single-click anywhere in the column
            </label>

            <h2>###### means:</h2>
            <label for="if_string">
              <input type="radio" name="tag" value="0" id="if_string" />
              You've entered a number wrong..
            </label>
            <label for="if_join">
              <input type="radio" name="tag" value="0" id="if_join" />
              You've misspelled something.
            </label>
            <label for="if_info">
              <input type="radio" name="tag" value="0" id="if_info" />
              The cell is not wide enough.
            </label>

            <h2>
              Which key do you press to group two or more nonadjacent
              worksheets?
            </h2>
            <label for="if_string">
              <input type="radio" name="key" value="0" id="if_string" />
              Ctrl.
            </label>
            <label for="if_join">
              <input type="radio" name="key" value="0" id="if_join" />
              Alt.
            </label>
            <label for="if_info">
              <input type="radio" name="key" value="0" id="if_info" />
              Shift.
            </label>

            <h2>
              Which formula can add all the numeric values in a range of cells,
              ignoring those which are not numeric, and place the result in a
              different cell?
            </h2>
            <label for="if_string">
              <input type="radio" name="funct" value="0" id="if_string" />
              Count
            </label>
            <label for="if_join">
              <input type="radio" name="funct" value="0" id="if_join" />
              Average
            </label>
            <label for="if_info">
              <input type="radio" name="funct" value="0" id="if_info" />
              Sum
            </label>

            <h2>
              A user wishes to remove a spreadsheet from a workbook. Which is
              the correct sequence of events that will do this?
            </h2>
            <label for="if_string">
              <input type="radio" name="steps" value="0" id="if_string" />
              Go to FILE - SAVE AS - SAVE AS TYPE - Excel 4.0 Work Sheet
            </label>
            <label for="if_join">
              <input type="radio" name="steps" value="0" id="if_join" />
              Right-click on the spreadsheet tab and select DELETE.
            </label>
            <label for="if_info">
              <input type="radio" name="steps" value="0" id="if_info" />
              Right-click on the spreadsheet and select INSERT - ENTIRE COLUMN.
            </label>

            <h2>
              If you want to paste a formula result — but not the underlying
              formula — to another cell. You would copy the cell with the
              formula, then place the insertion point in the cell you want to
              copy to. What next?
            </h2>
            <label for="if_string">
              <input type="radio" name="click" value="0" id="if_string" />
              Click the Paste button on the Standard toolbar.
            </label>
            <label for="if_join">
              <input type="radio" name="click" value="0" id="if_join" />
              Click the arrow on the Paste button on the Standard toolbar, then
              click Formulas..
            </label>
            <label for="if_info">
              <input type="radio" name="click" value="0" id="if_info" />
              Click the arrow on the Paste button on the Standard toolbar, then
              click Value
            </label>

            <button onClick="returnScore()" type="submit" value="Submit">
              Submit
            </button>
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
        }
        </script> */}
      </body>
    </html>
  );
}
export default ExcelTest;
