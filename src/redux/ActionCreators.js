import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
export const postTest =
  ( dateOuverture, duree, quizTitle) => (dispatch) => {
 
    const newTest = {
  
      dateOuverture: dateOuverture,    // hon zedna
      duree: duree,
      dateModification: "",
      quizTitle: quizTitle,
    };
    //console.log("Test ", newTest);
    // const tests = 'Tests ' + localStorage.getItem('token');
   
    return (baseUrl + "test", {
      method: "POST",
      body: JSON.stringify(newTest),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        
        (response) => {
  
          if (response.ok) {
            
            return response;
          } else {
            alert("srna else")
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addTest(response))) 
      .catch((error) => {
        
        console.log("Post test ", error.message);
        alert("Your test could not be posted\nError: " + error.message);
      });
  };
export const addTest = (test) => ({
  type: ActionTypes.Add_Test,
  payload: test,
});
export const fetchTests = () => (dispatch) => {


  return fetch(baseUrl + "test")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((tests) => dispatch(addTests(tests)))
    .catch((error) => dispatch(testFailed(error.message)));
};
export const addTests = (tests) => ({
  type: ActionTypes.Add_Tests,
  payload: tests,
});
export const testFailed = (errmess) => ({

  type: ActionTypes.Test_failed,

  payload: errmess

});