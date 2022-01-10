import React, { useState } from "react";
import { Fragment } from "react";
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
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "../EditableRow";
const AdminPage = () => {
  // const [Tests_, setTests] = useState(Tests);
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
  const [editFormData, setEditFormData] = useState(data);

  const [editQuestionId, setEditQuestionId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name"); //gets the name of every attrivbute
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  console.log();
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
        
    const newFormData = { ...editFormData };
    if(fieldName[0]=="a"){newFormData[addFormData.answers]=addFormData.answers.push(fieldValue)}else{
    newFormData[fieldName] = fieldValue;}

    setEditFormData(newFormData);
  };
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
    const newAnswer=()=>{
    var ans=[]
    for (var i = 0; i < addFormData.nb_ans; ++i) {
      ans.push({
        idAnswerQuestion: newQuestion.id,
        idQuestion: newQuestion.id,
        description: addFormData.answers[i],
      });
    }return(ans)}
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
    a.push(newAnswer);
    setQuestions(q);
    setAnswerQuestion(aq);
    setAnswers(a);
    setAddFormData(data);
  };
  const DropList = ( nb_ans,addFormData ) => {
    var op = [];
    for (var i = 1; i < nb_ans + 1; ++i) {
      op.push(<option value={i}>{i}</option>);
    }
    return op;
  };
  const InputAnswers = ( nb_ans,addFormData,handleAddFormChange ) => {
    var inputs = [];
    for (var i = 0; i < nb_ans; ++i) {
      inputs.push(
        <input
        className="col-xs-offset-2"
          value={(a)=>{return(addFormData.answers.push(a))}}
          
          required="required"
          placeholder="Enter an answer..."
          name="answers${i}"
          style={{width:"auto", fontSize:"25px"}}
          onChange={handleAddFormChange}
        />
      );
    }
    return inputs;
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedQuestion = {
      id: editQuestionId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newQuestion = [...Questions_];

    const index = Questions_.findIndex(
      (question) => question.idQuestion === editQuestionId
    );

    newQuestion[index] = editedQuestion;

    setQuestions(newQuestion);
    setEditQuestionId(null);
  };
  const handleEditClick = (event, question, Answers, AnswerQuestion) => {
    event.preventDefault();
    setEditQuestionId(question.idQuestion);

    const formValues = {
      question: question.description,
      nb_ans: ()=>{return(Answers.filter(
        (a) => a.idAnswerQuestion == question.idQuestion
      ).length())},
      answers: ()=>{return(Answers.filter((a) => a.idAnswerQuestion == question.idQuestion))},
      correctAnswer: ()=>{return(AnswerQuestion.filter(
        (a) => a.idAnswerQuestion == question.idQuestion
      )[0].correcte)},
    };

    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditQuestionId(null);
  };

  const handleDeleteClick = (IdQuest) => {
    const newQuestion = [...Questions_];
    const newAnswerQuestion = [...AnswerQuestion_];
    const newAnswers = [...Answers_];
    const index = Questions_.findIndex((question) => question.id === IdQuest);

    newQuestion.splice(index, 1);
    newAnswerQuestion.splice(index, 1);
    newAnswers.splice(index, 1);

    setQuestions(newQuestion);
    setAnswerQuestion(newAnswerQuestion);
    setAnswers(newAnswers);
  };

  return (
    <div
      className="app-container"
      style={{
        background:"white",
        position: "absolute",
        
        objectFit: "cover",
      }}
    >
        <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th width="500px">Actions</th>
            <th>Question</th>
            <th>Number Of Answers</th>
            <th>Answers</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Questions_.filter((q)=>(q.idTest==Tests[0].idTest)).map((question) => (
            <Fragment>
              {editQuestionId === question.idQuestion ? (
            <EditableRow
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
          />
        ) : (
          <ReadOnlyRow
            question={question}
            Answers={Answers_}
            AnswerQuestion={AnswerQuestion_}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        )}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      <div>
        
      <h2 class="h">Add a question</h2>
    
      <form class="hello" onSubmit={() => this.handleAddFormSubmit}>
        <div>
        <label style={{fontSize:"35px" }}>Question:</label>
        <input
          className="col-xs-offset-2"
          type="text"
          name="question"
          style={{width:"fit-content", fontSize:"25px"}}
          required="required"
          placeholder="Enter a question..."
          value={addFormData.question}
          onChange={handleAddFormChange}
        />
        <br/>
        <br/>
        <label style={{  fontSize:"35px" }}>Number of answers:</label>
        <input
          className="col-xs-offset-2"
          type="text"
          name="nb_ans"
          required="required"
          placeholder="Enter number..."
          value={addFormData.nb_ans}
          onChange={handleAddFormChange}
          style={{fontSize:"40px"}}
        />
        <br/>
        <br/>
        <label style={{ fontSize:"35px" }} >Answers:</label>
        {InputAnswers(addFormData.nb_ans,addFormData,handleAddFormChange)}
        <br/>
        <br/>
        <label style={{ fontSize:"35px"}}>Correct answer:</label>
        <select
         style={{fontSize:"40px"}}
          value={addFormData.correctAnswer}
          onChange={handleAddFormChange}
          class="j"
        >
          {DropList(5)}

        </select>
        </div>
        {/* <button type="button" onClick={handleCancelClick}>
          Cancel
        </button> */}
      </form>
      </div>
      <button type="submit">+</button>
    </div>
  );
};
export default AdminPage;
