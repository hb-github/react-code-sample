import { combineReducers } from "redux";
import { authReducer as auth } from "./auth";
import { pollReducer as poll } from "./poll";
import { selectedPollReducer as selectedPoll } from './selectedPoll';

//State definition
export interface State {
  auth: any;
  poll: any;
  selectedPoll: any
}

// Importing Reducer hierarchy
export const state = combineReducers<State>({
  auth,
  poll,
  selectedPoll
});
