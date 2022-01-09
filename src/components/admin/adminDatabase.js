import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./adminPage.css";
// import ReadOnlyRow from "./components/ReadOnlyRow.js";
// import EditableRow from "./components/EditableRow.js";
import "./adminPage.css";
import Object from "../../shared/object";
const Test=Object.Powerpoint;
const AdminPage = () => {
  const [Questions, setQuestions] = useState(Object.Powerpoint.questions);

  const data = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correctAnswer: "",
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
    const newQuestion = {
      id: nanoid(),
      description: addFormData.question,
      answers: [
        [
          addFormData.answer1,
          addFormData.answer1 === addFormData.correctAnswer,
        ],
        [
          addFormData.answer2,
          addFormData.answer2 === addFormData.correctAnswer,
        ],
        [
          addFormData.answer3,
          addFormData.answer3 === addFormData.correctAnswer,
        ],
      ],
      // question:addFormData.question,
      // answer1:addFormData.answer1,
      // answer2:addFormData.answer2,
      // answer3:addFormData.answer3,
      // correctAnswer:addFormData.correctAnswer,
    };
    let q = [...Questions];
    q.push(newQuestion);
    setQuestions(q);
    setAddFormData(data);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer1</th>
            <th>Answer2</th>
            <th>Answer3</th>
            <th>Correct Answer</th>
          </tr>
        </thead>

        {Questions.map((question) => (
          <tbody>
            <tr>
              <td>{question.description}</td>
              {question.answers.map((answer) => (
                <td>{answer[0]}</td>
              ))}
              <td>{question.answers.filter((a) => a[1] == true)[0]}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <h2 class="h">Add a question</h2>
      <form class="hello" onSubmit={handleAddFormSubmit}>
        <input
          class="i"
          type="text"
          name="question"
          required="required"
          placeholder="Enter a question..."
          value={addFormData.question}
          onChange={handleAddFormChange}
        />

        <input
          class="i"
          type="text"
          required="required"
          placeholder="Enter an answer..."
          name="answer1"
          value={addFormData.answer1}
          onChange={handleAddFormChange}
        />

        <input
          class="i"
          type="text"
          required="required"
          placeholder="Enter an answer ..."
          name="answer2"
          value={addFormData.answer2}
          onChange={handleAddFormChange}
        />

        <input
          class="i"
          type="text"
          required="required"
          placeholder="Enter an answer..."
          name="answer3"
          value={addFormData.answer3}
          onChange={handleAddFormChange}
        />
        <input
          class="i"
          type="text"
          required="required"
          placeholder="Enter an answer..."
          name="correctAnswer"
          value={addFormData.correctAnswer}
          onChange={handleAddFormChange}
        />
        {/* <button type="button" onClick={handleCancelClick}>
          Cancel
        </button> */}
      </form>
      <button type="submit">+</button>
    </div>
  );
};
export default AdminPage;
