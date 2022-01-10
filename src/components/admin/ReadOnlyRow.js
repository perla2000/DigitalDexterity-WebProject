import React from "react";

const ReadOnlyRow = ({
  question,
  Answers,
  AnswerQuestion,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <>
      <tr>
        <td>
          <button
            type="button"
            style={{ widht: "fit-content", margin: "auto", marginLeft: "60px" }}
            onClick={(event) => handleEditClick(event, question)}
          >
            Edit
          </button>
          <button
            type="button"
            style={{ widht: "fit-content", margin: "auto", marginLeft: "10px" }}
            onClick={() => handleDeleteClick(question.idQuestion)}
          >
            Delete
          </button>
        </td>
        <td>{question.description}</td>
        <td>
          {
            Answers.filter((a) => a.idAnswerQuestion == question.idQuestion)
              .length
          }
        </td>
        {Answers.filter((a) => a.idAnswerQuestion == question.idQuestion).map(
          (answer) => {
            if (
              answer.idAnswer ==
              AnswerQuestion.filter(
                (a) => a.idQuestion == question.idQuestion
              )[0].correcte
            ) {
              return (
                <td style={{ background: "rgb(2, 154, 238)", color: "white" }}>
                  {answer.description}
                </td>
              );
            } else {
              return <td>{answer.description}</td>;
            }
          }
        )}
        <td></td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
