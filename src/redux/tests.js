import * as ActionTypes from './ActionTypes';

export const Tests = (state  = { isLoading: true,
                                    errMess: null,
                                    tests:[]}, action) => {
    switch (action.type) {
        case ActionTypes.Add_Test:
            return{...state,tests:state.tests.concat(action.payload)}
        default:
          return state;
    }
};