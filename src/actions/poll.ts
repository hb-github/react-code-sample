import { actionTypes } from "../common/constants/actionTypes";
import { pollList, pollCreate, pollUpdate, pollDelete } from "../api";

// List

export const listPollAction = (data: any) => dispatch => {
  pollList(data).then(member => {
    dispatch(maplistPollAction(member));
  });
};

const maplistPollAction = (member: any) => ({
  type: actionTypes.POLL_LIST,
  payload: member
});

// ADD

export const createPollAction = (data: any) => dispatch => {
  pollList(data).then(member => {
    dispatch(mapcreatePollAction(member));
  });
};

const mapcreatePollAction = (member: any) => ({
  type: actionTypes.POLL_CREATE,
  payload: member
});

// Update

export const updatePollAction = (data: any) => dispatch => {
  pollList(data).then(member => {
    dispatch(mapupdatePollAction(member));
  });
};

const mapupdatePollAction = (member: any) => ({
  type: actionTypes.POLL_UPDATE,
  payload: member
});

// DELETE

export const deletePollAction = (data: any) => dispatch => {
  pollList(data).then(member => {
    dispatch(mapdeletePollAction(member));
  });
};

const mapdeletePollAction = (member: any) => ({
  type: actionTypes.POLL_DELETE,
  payload: member
});
