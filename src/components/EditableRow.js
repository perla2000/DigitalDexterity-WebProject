import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
           <td style={{width:"fit-content"}} >
             <button type="submit" >Save</button>
        <button  type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        </td>
      <td>
        <input className="col-xs-offset-2"
          type="text"
          required="required"
          placeholder="Enter a question..."
          name="question"
          style={{width:"fit-content", fontSize:"25px"}}
          value={editFormData.questions}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="col-xs-offset-2"
          type="text"
          required="required"
          placeholder="Enter an answer..."
          name="answer"
          style={{width:"fit-content", fontSize:"25px"}}
          value={editFormData.answers}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="col-xs-offset-2"
          type="text"
          required="required"
          placeholder="Enter an answer ..."
          name="answer2"
          style={{width:"fit-content", fontSize:"25px"}}
          value={editFormData.answers}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="col-xs-offset-2"
        style={{width:"fit-content", fontSize:"25px"}}
          type="text"
          required="required"
          placeholder="Enter an answer..."
          name="answer3"
          value={editFormData.answers}
          onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
                <input className="col-xs-offset-2"
          type="text"
          required="required"
          style={{width:"fit-content", fontSize:"25px"}}
          placeholder="Enter an answer..."
          name="correctAnswer"
          value={editFormData.answers}
          onChange={handleEditFormChange}
        ></input>
  

      </td>
     
    </tr>
  );
};

export default EditableRow;