import { actionTypes } from "../common/constants/actionTypes";

const createEmptyAuth = (): any => ({});

export const pollReducer = (state: any = [], action) => {
  switch (action.type) {
    case actionTypes.POLL_LIST:
      return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.POLL_DELETE:
      return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.POLL_UPDATE:
      return handleFetchMemberByIdCompleted(state, action.payload);
    case actionTypes.POLL_CREATE:
      return handleFetchMemberByIdCompleted(state, action.payload);
  }
  return state;
};

const handleFetchMemberByIdCompleted = (state: any, payload: any): any => {
  return payload;
};
