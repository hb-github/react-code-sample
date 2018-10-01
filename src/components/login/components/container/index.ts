import * as React from "react";
import Login from "./container";
import { connect } from "react-redux";
import { State } from "../../../../reducers";
import { adminAction } from "../../../../actions";

//provide action as properites to component 
const mapDispatchToProps = dispatch => ({
  authAction: (data: any) => dispatch(adminAction(data))
});

//provide state variable as properites to component 
const mapStateToProps = (state: State, ownProps: any) => ({
  auth: state['auth']
});

//connect with redux using redux connect
export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
