import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./adminPage.css";
// import ReadOnlyRow from "./components/ReadOnlyRow.js";
// import EditableRow from "./components/EditableRow.js";
import "./adminPage.css";
import {
  Questions,
  Answers,
  AnswerQuestion,
  Tests,
} from "../../shared/database";
import ReadOnlyRow from "../ReadOnlyRow";
const AdminPage = () => {
  const [Tests_, setTests] = useState(Tests);
  const [Questions_, setQuestions] = useState(Questions);

  const [Answers_, setAnswers] = useState(Answers);
  const [AnswerQuestion_, setAnswerQuestion] = useState(AnswerQuestion);

  const data = {
    question: "",
    nb_ans: 1,
    answers: [],
    correctAnswer: 0,
  };
  const [addFormData, setAddFormData] = useState(data);
  console.log(addFormData);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name"); //gets the name of every attrivbute
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  console.log();
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    //   const newTest=this.props.postTest( "2/1/2022", 10,
    //     "13/2/2022",
    //     "Powerpoint",
    // )
    const newQuestion = {
      id: nanoid(),
      idTest: Tests.length() + 1,
      description: addFormData.question,
    };
    for (var i = 0; i < addFormData.nb_ans; ++i) {
      const newAnswers = newAnswers.push({
        idAnswerQuestion: newQuestion.id,
        idQuestion: newQuestion.id,
        description: addFormData.answers[i],
      });
    }
    const newAnswerQuestion = {
      idAnswerQuestion: newQuestion.id,
      idQuestion: newQuestion.id,
      correcte:
        addFormData.newAnswers[
          addFormData.answers.length() -
            addFormData.nb_ans -
            2 +
            addFormData.correctAnswer
        ],
    };

    // question:addFormData.question,
    // answer1:addFormData.answer1,
    // answer2:addFormData.answer2,
    // answer3:addFormData.answer3,
    // correctAnswer:addFormData.correctAnswer,

    let q = [...Questions_];
    let aq = [...AnswerQuestion_];
    let a = [...Answers_];

    q.push(newQuestion);
    aq.push(newAnswerQuestion);
    a.push(addFormData.newAnswers);
    setQuestions(q);
    setAnswerQuestion(aq);
    setAnswers(a);
    setAddFormData(data);
  };
  const DropList = (nb_ans) => {
    var op = [];
    for (var i = 1; i < nb_ans + 1; ++i) {
      op.push(<option value={i}>{i}</option>);
    }
    return op;
  };
  const InputAnswers = ({ nb_ans }) => {
    var inputs = [];
    for (var i = 0; i < 5; ++i) {
      inputs.push(
        <input
          class="j"
          type="text"
          required="required"
          placeholder="Enter an answer..."
          name="answers"
          value={addFormData.answers.push}
          onChange={handleAddFormChange}
          style={{ width: "auto", fontSize: "25px" }}
        />
      );
    }
    return inputs;
  };
  return (
    <div
      className="app-container"
      style={{
        background:
          "linear-gradient(to top, rgb(0, 157, 255) 0%, rgb(0, 0, 0) 100%)",
        position: "absolute",
        objectFit: "cover",
      }}
    >
      <ReadOnlyRow
        Questions={Questions}
        Answers={Answers}
        Tests={Tests}
        AnswerQuestion={AnswerQuestion}
      />
      <div>
        <h2 class="h">Add a question</h2>
        <form class="hello" onSubmit={() => this.handleAddFormSubmit}>
          <div>
            <label style={{ color: "white", fontSize: "35px" }}>
              Question:
            </label>
            <input
              class="i"
              className="col-xs-offset-2"
              //type="text"
              name="question"
              required="required"
              placeholder="Enter a question..."
              value={addFormData.question}
              onChange={handleAddFormChange}
              style={{ width: "fit-content", fontSize: "25px" }}
            />
            <br />
            <br />
            <label style={{ color: "white", fontSize: "35px" }}>
              Number of answers:
            </label>
            <input
              class="j"
              className="col-xs-offset-2"
              name="nb_ans"
              required="required"
              placeholder="Enter number..."
              value={addFormData.nb_ans}
              onChange={handleAddFormChange}
              style={{ fontSize: "40px" }}
            />
            <br />
            <br />
            <label style={{ color: "white", fontSize: "35px" }}>Answers:</label>
            {InputAnswers(5)}
            <br />
            <br />
            <label style={{ color: "white", fontSize: "35px" }}>
              Correct answer:
            </label>
            <select
              value={addFormData.correctAnswer}
              onChange={handleAddFormChange}
              class="j"
              style={{ fontSize: "40px" }}
            >
              {DropList(5)}
            </select>
            {/* <button type="button" onClick={handleCancelClick}>
              Cancel
            </button> */}
          </div>
        </form>
      </div>
      <button type="submit">+</button>
    </div>
  );
};
export default AdminPage;
