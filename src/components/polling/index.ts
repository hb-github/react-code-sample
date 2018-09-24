import * as React from "react";
import { Polling } from "./polling";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { listPollAction } from "../../actions";

const mapDispatchToProps = dispatch => ({
  listPollAction: (data: any) => dispatch(listPollAction(data))
});

const mapStateToProps = (state: State, ownProps: any) => ({
  poll: state["poll"] 
});

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Polling);
