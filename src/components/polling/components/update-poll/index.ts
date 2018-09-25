import { UpdatePoll } from "./update-poll";
import { connect } from "react-redux";
import { State } from "../../../../reducers";
import { listPoll } from "../../../../actions";
const mapDispatchToProps = dispatch => ({
    listAction: (data: any) => dispatch(listPoll(data))
});

const mapStateToProps = (state: State, ownProps: any) => ({
    poll: state['poll'],
    selectedPoll: state['selectedPoll']
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdatePoll);
