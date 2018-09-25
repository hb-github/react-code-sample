import * as React from "react";
import { List } from "./list-poll";
import { connect } from "react-redux";
import { State } from "../../../reducers";
import { listPoll } from "../../../actions";

const mapDispatchToProps = dispatch => ({
    listAction: (data: any) => dispatch(listPoll(data))
});

const mapStateToProps = (state: State, ownProps: any) => ({
    poll: state['poll']
});

export const ListPoll = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
