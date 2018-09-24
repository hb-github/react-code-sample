import { actionTypes } from "../common/constants/actionTypes";

const createEmptyAuth = (): any => ({
  username: "",
  password: ""
});

export const authReducer = (state = createEmptyAuth(), action) => {
  switch (action.type) {
    case actionTypes.ADMIN_LOGIN:
      return handleFetchMemberByIdCompleted(state, action.payload);
  }
  return state;
};

const handleFetchMemberByIdCompleted = (state: any, payload: any): any => {
  return payload;
};
