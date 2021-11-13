import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./adminPage.css";
// import ReadOnlyRow from "./components/ReadOnlyRow.js";
// import EditableRow from "./components/EditableRow.js";
import "./adminPage.css";
import Object from "../shared/object";
const AdminPage = () => {
  const [tests, setTests] = useState(Object);

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

        {tests.Powerpoint.questions.map((question) => (
          <tbody>
            <tr>
              <td>{question.description}</td>
              {question.answers.map(
                (answer) => (
                  <td>{answer[0]}</td>
                )
                //   {if ({answer[1]}==true){<td>{answer[1]}</td>}}
              )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default AdminPage;
