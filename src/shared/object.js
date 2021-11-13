const Object = {
  Powerpoint: {
    questions: [
      {
        id: 0,
        description:
          "What is the best way to design the layout for your slides?",
        answers: [
          [
            "Create layouts for slides, handouts, and notes using the Master Layout dialog box in slide master view",
            false,
          ],
          [
            "For each new slide, select a layout from the Slide Layout task plane",
            true,
          ],
          ["Apply templates from the Slide Design task plane", false],
        ],
      },
      {
        id: 1,
        description:
          "To make one section of slides in your presentation use a different design template from the other slides, what do you do?",
        answers: [
          [
            "Select the slide thumbnails in that section, and apply a different color scheme.",
            false,
          ],
          [
            "Select the slide thumbnails in that section, and apply a different design template.",
            true,
          ],
          [
            "Select one of the slides in the section you want to change, customize the fonts and colors, and use the Format Painter to apply those styles to the other slides in the section.",
            false,
          ],
        ],
      },
      {
        id: 2,
        description:
          "During a slide show, pressing the Esc key will __________________.",
        answers: [
          ["Displays the last slide.", false],
          ["Displays slide 1.", false],
          ["Ends the slide show.", true],
        ],
      },
      {
        id: 3,
        description:
          "During a slide show, pressing the Esc key will __________________.",
        answers: [
          ["Displays the last slide.", false],
          ["Displays slide 1.", false],
          ["Ends the slide show.", true],
        ],
      },
      {
        id: 4,
        description:
          "Using a custom animation effect, how do you make text appear on a slide letter by letter?",
        answers: [
          ["Apply the animation scheme Fade in one by one.", false],
          [
            "Apply an entrance effect, and then set it to By letter in the Effect Options dialog box.",
            false,
          ],
          [
            "Apply the Fly In entrance effect to the text, and then set its speed to Very Slow.",
            true,
          ],
        ],
      },
      {
        id: 5,
        description:
          "Using a custom animation effect, how do you make text appear on a slide letter by letter?",
        answers: [
          ["Apply the animation scheme Fade in one by one.", false],
          [
            "Apply an entrance effect, and then set it to By letter in the Effect Options dialog box.",
            true,
          ],
          [
            "Apply the Fly In entrance effect to the text, and then set its speed to Very Slow.",
            false,
          ],
        ],
      },
      {
        id: 6,
        description:
          "You've customized a design template in one presentation and you want to use it in another presentation. What's the best way to do this?",
        answers: [
          [
            "Use the Browse feature in the Slide Design task pane to find the file that has your design template and apply it to the current file.",
            false,
          ],
          [
            "Copy and paste the slide with the design template you want into the new presentation; inserted slides will inherit the design.",
            true,
          ],
          [
            "Save the presentation that has the design template with a new name, and then use the new file for your presentation.",
            false,
          ],
        ],
      },
      {
        id: 7,
        description:
          "PowerPoint has direct connections with which of the following from its toolbars or menu system?",
        answers: [
          ["Microsoft Word", false],
          ["Internet Explorer", true],
          ["Your E-Mail program", false],
        ],
      },
    ],
    quizTitle: "Word",
  },
  Excel: {
    questions: [
      {
        id: 0,
        description:
          "A fast way to add up this column of numbers is to click on the cell below the numbers and then:",
        answers: [
          ["Click Subtotals on the Data menu.", false],
          ["View the sum in the formula bar.", true],
          [
            "Click the AutoSum button on the Standard toolbar, then press ENTER.",
            false,
          ],
        ],
      },
      {
        id: 1,
        description:
          "There are three worksheets with every new workbook. You can change that automatic number if you want to.",
        answers: [
          ["True.", false],
          ["False.", true],
        ],
      },
      {
        id: 2,
        description:
          "To add a new row, click a cell in the row immediately above where you want the new row.",
        answers: [
          ["True.", false],
          ["False.", true],
        ],
      },
      {
        id: 3,
        description: "How do you change the column width to fit the contents?",
        answers: [
          [
            "Single-click the boundary to the left of the column heading.",
            false,
          ],
          [
            "Double-click the boundary to the right of the column heading.",
            false,
          ],
          ["Press ALT and single-click anywhere in the column", true],
        ],
      },
      {
        id: 4,
        description: "###### means:",
        answers: [
          ["You've entered a number wrong.", false],
          ["You've misspelled something.", false],
          ["The cell is not wide enough.", true],
        ],
      },
      {
        id: 5,
        description:
          "Which key do you press to group two or more nonadjacent worksheets?",
        answers: [
          ["Alt.", false],
          ["Shift.", true],
          ["Ctrl.", false],
        ],
      },
      {
        id: 6,
        description:
          "Which formula can add all the numeric values in a range of cells, ignoring those which are not numeric, and place the result in a different cell?",
        answers: [
          ["Count.", false],
          ["Average.", true],
          ["Sum.", false],
        ],
      },
      {
        id: 7,
        description:
          "A user wishes to remove a spreadsheet from a workbook. Which is the correct sequence of events that will do this?",
        answers: [
          ["Go to FILE - SAVE AS - SAVE AS TYPE - Excel 4.0 Work Sheet", false],
          [
            "Right-click on the spreadsheet and select INSERT - ENTIRE COLUMN.",
            true,
          ],
          ["Your E-Mail program", false],
        ],
      },
    ],
    quizTitle: "Test your knowledge in EXCEL",
  },
};

export default Object;
