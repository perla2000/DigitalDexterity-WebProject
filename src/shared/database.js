export const Users = [
  {
    id: 2,
    username: "LeaHarrouz",
    password: "6yhfrsss",
    email: "lea.harrouz@gmail.com",
  },
  {
    id: 5,
    username: "PerlaAbdallah",
    password: "22338877",
    email: "perlaabdallah@gmail.com",
  },
  {
    id: 3,
    username: "Mario",
    password: "ejhhhvh5",
    email: "marioboujaoudeh@gmail.com",
  },
];
export const TestUser = [
  {
    idTestUser: 0,
    idUser: 2,
    idTest: 1,
    code: "cc",
    date: "2/1/2022",
    noteTest: 10,
  },
  {
    idTestUser: 1,
    idUser: 2,
    idTest: 2,
    code: "cc",
    date: "2/1/2022",
    noteTest: 11,
  },
  {
    idTestUser: 0,
    idUser: 5,
    idTest: 1,
    code: "hh",
    date: "7/1/2022",
    noteTest: 15,
  },
  {
    idTestUser: 1,
    idUser: 5,
    idTest: 2,
    code: "hh",
    date: "7/1/2022",
    noteTest: 13,
  },
  {
    idTestUser: 1,
    idUser: 3,
    idTest: 2,
    code: "hh",
    date: "20/12/2021",
    noteTest: 18,
  },
];
export const Tests = [
  {
    idTest: 1,
    dateOuverture: "2/1/2022",
    duree: 0,
    dateModification: 0,
    quizTitle: "Powerpoint",
  },
  {
    idTest: 2,
    dateOuverture: "2/1/2022",
    duree: 0,
    dateModification: 0,
    quizTitle: "Excel",
  },
];
export const Questions = [
  {
    idTest: 1,
    idQuestion: 1,
    description: "What is the best way to design the layout for your slides?",
  },
  {
    idTest: 1,
    idQuestion: 2,
    description:
      "To make one section of slides in your presentation use a different design template from the other slides, what do you do?",
  },
  {
    idTest: 1,
    idQuestion: 3,
    description:
      "During a slide show, pressing the Esc key will __________________.",
  },
  {
    idTest: 1,
    idQuestion: 4,
    description:
      "Using a custom animation effect, how do you make text appear on a slide letter by letter?",
  },
  {
    idTest: 1,
    idQuestion: 5,
    description:
      "You've customized a design template in one presentation and you want to use it in another presentation. What's the best way to do this?",
  },
  {
    idTest: 1,
    idQuestion: 6,
    description:
      "PowerPoint has direct connections with which of the following from its toolbars or menu system?",
  },
  {
    idTest: 2,
    idQuestion: 7,
    description:
      "A fast way to add up this column of numbers is to click on the cell below the numbers and then:",
  },
  {
    idTest: 2,
    idQuestion: 8,
    description: "How do you change the column width to fit the contents?",
  },
  {
    idTest: 2,
    idQuestion: 9,
    description: "###### means:",
  },
  {
    idTest: 2,
    idQuestion: 10,
    description:
      "Which key do you press to group two or more nonadjacent worksheets?",
  },
  {
    idTest: 2,
    idQuestion: 11,
    description:
      "Which formula can add all the numeric values in a range of cells, ignoring those which are not numeric, and place the result in a different cell?",
  },
  {
    idTest: 2,
    idQuestion: 12,
    description:
      "A user wishes to remove a spreadsheet from a workbook. Which is the correct sequence of events that will do this?",
  },
];

export const AnswerQuestion = [
  {
    idAnswerQuestion: 1,
    idQuestion: 1,
    correcte: 3,
  },
  {
    idAnswerQuestion: 2,
    idQuestion: 2,
    correcte: 5,
  },
  {
    idAnswerQuestion: 3,
    idQuestion: 3,
    correcte: 8,
  },
  {
    idAnswerQuestion: 4,
    idQuestion: 4,
    correcte: 10,
  },
  {
    idAnswerQuestion: 5,
    idQuestion: 5,
    correcte: 13,
  },
  {
    idAnswerQuestion: 6,
    idQuestion: 6,
    correcte: 16,
  },
  {
    idAnswerQuestion: 7,
    idQuestion: 7,
    correcte: 20,
  },
  {
    idAnswerQuestion: 8,
    idQuestion: 8,
    correcte: 24,
  },
  {
    idAnswerQuestion: 9,
    idQuestion: 9,
    correcte: 27,
  },
  {
    idAnswerQuestion: 10,
    idQuestion: 10,
    correcte: 29,
  },
  {
    idAnswerQuestion: 11,
    idQuestion: 11,
    correcte: 32,
  },
  {
    idAnswerQuestion: 12,
    idQuestion: 12,
    correcte: 35,
  },
];
export const Answers = [
  {
    idAnswer: 1,
    idAnswerQuestion: 1,
    description:
      "Create layouts for slides, handouts, and notes using the Master Layout dialog box in slide master view",
  },
  {
    idAnswer: 2,
    idAnswerQuestion: 1,
    description:
      "For each new slide, select a layout from the Slide Layout task plane",
  },
  {
    idAnswer: 3,
    idAnswerQuestion: 1,
    description: "Apply templates from the Slide Design task plane",
  },
  {
    idAnswer: 4,
    idAnswerQuestion: 2,
    description:
      "Select the slide thumbnails in that section, and apply a different color scheme.",
  },
  {
    idAnswer: 5,
    idAnswerQuestion: 2,
    description:
      "Select the slide thumbnails in that section, and apply a different design template.",
  },
  {
    idAnswer: 6,
    idAnswerQuestion: 2,
    description:
      "Select one of the slides in the section you want to change, customize the fonts and colors, and use the Format Painter to apply those styles to the other slides in the section.",
  },
  {
    idAnswer: 7,
    idAnswerQuestion: 3,
    description: "Ends the slide show.",
  },
  {
    idAnswer: 8,
    idAnswerQuestion: 3,
    description: "Displays the last slide.",
  },
  {
    idAnswer: 9,
    idAnswerQuestion: 3,
    description: "Displays slide 1.",
  },
  {
    idAnswer: 10,
    idAnswerQuestion: 4,
    description: "Apply the animation scheme Fade in one by one.",
  },
  {
    idAnswer: 11,
    idAnswerQuestion: 4,
    description:
      "Apply an entrance effect, and then set it to By letter in the Effect Options dialog box.",
  },
  {
    idAnswer: 12,
    idAnswerQuestion: 4,
    description:
      "Apply the Fly In entrance effect to the text, and then set its speed to Very Slow.",
  },
  {
    idAnswer: 13,
    idAnswerQuestion: 5,
    description:
      "Use the Browse feature in the Slide Design task pane to find the file that has your design template and apply it to the current file.",
  },
  {
    idAnswer: 14,
    idAnswerQuestion: 5,
    description:
      "Copy and paste the slide with the design template you want into the new presentation; inserted slides will inherit the design.",
  },
  {
    idAnswer: 15,
    idAnswerQuestion: 5,
    description:
      "Save the presentation that has the design template with a new name, and then use the new file for your presentation.",
  },
  {
    idAnswer: 16,
    idAnswerQuestion: 6,
    description: "Microsoft Word",
  },
  {
    idAnswer: 17,
    idAnswerQuestion: 6,
    description: "Internet Explorer",
  },
  {
    idAnswer: 18,
    idAnswerQuestion: 6,
    description: "Your E-Mail program",
  },
  {
    idAnswer: 19,
    idAnswerQuestion: 7,
    description: "Click Subtotals on the Data menu.",
  },
  {
    idAnswer: 20,
    idAnswerQuestion: 7,
    description: "View the sum in the formula bar.",
  },
  {
    idAnswer: 21,
    idAnswerQuestion: 7,
    description:
      "Click the AutoSum button on the Standard toolbar, then press ENTER.",
  },
  {
    idAnswer: 22,
    idAnswerQuestion: 8,
    description: "Single-click the boundary to the left of the column heading.",
  },
  {
    idAnswer: 23,
    idAnswerQuestion: 8,
    description:
      "Double-click the boundary to the right of the column heading.",
  },
  {
    idAnswer: 24,
    idAnswerQuestion: 8,
    description: "Press ALT and single-click anywhere in the column",
  },
  {
    idAnswer: 25,
    idAnswerQuestion: 9,
    description: "You've entered a number wrong.",
  },
  {
    idAnswer: 26,
    idAnswerQuestion: 9,
    description: "You've misspelled something.",
  },
  {
    idAnswer: 27,
    idAnswerQuestion: 9,
    description: "The cell is not wide enough.",
  },
  {
    idAnswer: 28,
    idAnswerQuestion: 10,
    description: "Alt.",
  },
  {
    idAnswer: 29,
    idAnswerQuestion: 10,
    description: "Shift.",
  },
  {
    idAnswer: 30,
    idAnswerQuestion: 10,
    description: "Ctrl.",
  },
  {
    idAnswer: 31,
    idAnswerQuestion: 11,
    description: "Count.",
  },
  {
    idAnswer: 32,
    idAnswerQuestion: 11,
    description: "Average.",
  },
  {
    idAnswer: 33,
    idAnswerQuestion: 11,
    description: "Sum.",
  },
  {
    idAnswer: 34,
    idAnswerQuestion: 12,
    description: "Go to FILE - SAVE AS - SAVE AS TYPE - Excel 4.0 Work Sheet",
  },
  {
    idAnswer: 35,
    idAnswerQuestion: 12,
    description:
      "Right-click on the spreadsheet and select INSERT - ENTIRE COLUMN.",
  },
  {
    idAnswer: 36,
    idAnswerQuestion: 12,
    description: "Your E-Mail program",
  },
];
