import { actionTypes } from "../common/constants/actionTypes";

// List
export const listPoll = (data: any) => dispatch => {
  dispatch(mapPolls(data));
};

const mapPolls = (polls: any) => ({
  type: actionTypes.POLL_LIST,
  payload: polls
});

export const selectedPoll = (poll: any) => ({
  type: actionTypes.SELECTED_POLL,
  payload: poll
});
