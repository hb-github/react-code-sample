import { Polling } from "./polling";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { listPoll } from "../../actions";

//provide action as properites to component 
const mapDispatchToProps = dispatch => ({
  listAction: (data: any) => dispatch(listPoll(data))
});
//provide state variable as properites to component 
const mapStateToProps = (state: State, ownProps: any) => ({
  poll: state['poll']
});

//connect with redux using redux connect
export const PollingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Polling);
