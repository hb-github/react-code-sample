import { actionTypes } from "../common/constants/actionTypes";

// Initiallizing state default to any is model is unknown

//Exporting pollReducer
export const pollReducer = (state: any = [], action) => {
  switch (action.type) {
    case actionTypes.POLL_LIST:
      return handleState(state, action.payload);
  }
  return state;
};

//Handling state
const handleState = (state: any, payload: any): any => {
  return payload;
};
