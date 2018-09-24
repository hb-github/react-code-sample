import { combineReducers } from "redux";
import { authReducer as auth } from "./auth";
import { pollReducer as poll } from "./poll";

export interface State {
  auth: any;
  poll: any;
}

export const state = combineReducers<State>({
  auth,
  poll
});
