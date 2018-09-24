import * as React from "react";
import Login from "./container";
import { connect } from "react-redux";
import { State } from "../../../../reducers";
import { adminAction } from "../../../../actions";

const mapDispatchToProps = dispatch => ({
  authAction: (data: any) => dispatch(adminAction(data))
});

const mapStateToProps = (state: State, ownProps: any) => ({
  auth: state['auth']
});

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
