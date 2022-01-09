import React from "react";

const ReadOnlyRow = ({Questions,Answers,Tests,AnswerQuestion}) => {
  return (
<table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Number Of Answers</th>
            <th>Answers</th>
            <th></th>
            <th></th>
            <th></th>
          

            
          </tr>
        </thead>

        {Questions.map((question) => (
          <tbody>
            <tr>
              <td>{question.description}</td>
              <td>{Answers.filter((a)=>a.idAnswerQuestion==question.idQuestion).length}</td>
              {Answers.filter((a)=>a.idAnswerQuestion==question.idQuestion).map((answer) =>{
                  if (answer.idAnswer == AnswerQuestion.filter(a => a.idQuestion == question.idQuestion)[0].correcte) {
                    return (
                      <td style={{background:"rgb(2, 154, 238)", color:"white"}} >{answer.description}</td>
                    )
                  }
                  else {
                    return (
                      <td>{answer.description}</td>
                    )
                  }
                }
              )}
            
            </tr>
          </tbody>
))}
      </table>

  );
};

export default ReadOnlyRow;
