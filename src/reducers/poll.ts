import { actionTypes } from "../common/constants/actionTypes";

export const pollReducer = (state: any = [], action) => {
  switch (action.type) {
    case actionTypes.POLL_LIST:
      return handleFetchMemberByIdCompleted(state, action.payload);
  }
  return state;
};
const handleFetchMemberByIdCompleted = (state: any, payload: any): any => {
  return payload;
};
