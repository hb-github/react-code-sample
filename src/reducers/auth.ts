import { actionTypes } from "../common/constants/actionTypes";

// Initiallizing state default
const createEmptyAuth = (): any => ({
  username: "",
  password: ""
});

//Exporting authReducer
export const authReducer = (state = createEmptyAuth(), action) => {
  switch (action.type) {
    case actionTypes.ADMIN_LOGIN:
      return handleState(state, action.payload);
  }
  return state;
};

//Handling state
const handleState = (state: any, payload: any): any => {
  return payload;
};
