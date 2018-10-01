import { List } from "./list-poll";
import { connect } from "react-redux";
import { State } from "../../../../reducers";
import { listPoll, selectedPoll } from "../../../../actions";

//provide action as properites to component 
const mapDispatchToProps = dispatch => ({
    listAction: (data: any) => dispatch(listPoll(data)),
    selectedPollAction: (data: any) => dispatch(selectedPoll(data))
});

//provide state variable as properites to component 
const mapStateToProps = (state: State, ownProps: any) => ({
    poll: state['poll']
});

//connect with redux using redux connect
export const ListPoll = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
