import * as React from "react";
import "./list-poll-style.css";
import UpdatePollContainer from "../update-poll";
import {
  pollList,
  pollCreate,
  pollDelete,
  pollUpdate,
  pollToggleStatus
} from "../../../../api/poll";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "auto"
  }
};
Modal.setAppElement("#root");
export interface PollingProps {
  listAction: (data: any) => any;
  selectedPollAction: (data: any) => any;
  poll: any;
  selectedPoll: any;
}
export interface State {
  isUpdate: boolean;
  page: any;
  total: any;
  limit: any;
  id: any;
  name: any;
  modalIsOpen: boolean;
}
export class List extends React.Component<PollingProps, State> {
  constructor(props: PollingProps) {
    super(props);
    this.state = {
      isUpdate: false,
      page: 1,
      total: 0,
      limit: 0,
      id: "",
      name: "",
      modalIsOpen: false
    };
  }
  componentDidMount() {
    this.polls();
  }

  paginetion(value) {
    if (
      value == "increase" &&
      this.state.total / this.state.limit > this.state.page
    ) {
      this.setState({ page: this.state.page + 1 });
    }
    if (value == "decrease" && this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  }

  private polls = () => {
    pollList({ page: this.state.page })
      .then(success => {
        this.setState({ limit: success["pollingList"].limit });
        this.setState({ total: success["pollingList"].total });
        this.props.listAction(success["pollingList"].docs);
      })
      .catch(error => {
        console.log(error);
      });
  };

  deletePoll = data => {
    this.setState({ modalIsOpen: true, id: data._id, name: data.title });
  };

  closeModel = () => {
    this.setState({ isUpdate: false });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  deleteItem = id => {   
    pollDelete({ pollId: id })
      .then(success => {
        this.polls();
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ modalIsOpen: false });
  };
  setPoll = data => {
    this.props.selectedPollAction(data);
    this.setState({ isUpdate: true });
  };

  setStatus = data => {
    data.status == "Inactive"
      ? (data.status = "Active")
      : (data.status = "Inactive");
    pollToggleStatus({
      pollId: data._id,
      status: data.status,
      activeTimeStamp: new Date()
    })
      .then(success => {
        this.polls();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { poll } = this.props;

    if (this.state.isUpdate) {
      return (
        <div>
          <UpdatePollContainer closeModel={this.closeModel} />
          <div className="top-margin">
            <div className="row">
              <div className="col-sm-12 list_heading">
                <div className="txt1">Polling List</div>
                <div className="col-sm-12">
                  <span className="txt2">
                    {/* <button type="button" className="btn btn-primary">
              Create Poll
            </button> */}
                  </span>
                </div>
              </div>
            </div>

            <ul className="list-group">
              {poll.map((field, number) => {
                // console.log("field", field);
                return (
                  <li key={field._id} className="list-group-item col-sm-12">
                    {field.status == "Active" ? (
                      <div className="list_items_active">{field.title}</div>
                    ) : (
                      <div className="list_items_inactive">{field.title}</div>
                    )}
                    <div className="row">
                      <label className="switch">
                        <input
                          type="checkbox"
                          readOnly
                          checked={field.status == "Active" ? true : false}
                          onClick={() => this.setStatus(field)}
                        />
                        <span className="slider round" />
                      </label>
                      <button
                        className="btn btn-warning editBtn"
                        onClick={() => this.setPoll(field)}
                      >
                        {" "}
                        Edit{" "}
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deletePoll(field._id)}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="top-margin">
          <div className="row">
            <div className="col-sm-12 list_heading">
              <div className="txt1">Polling List</div>
              <div className="col-sm-12">
                <span className="txt2">
                  {/* <button type="button" onClick={this.openModel} className="btn btn-primary">Create Poll</button> */}
                </span>
              </div>
            </div>
          </div>

          <ul className="list-group">
            {poll.map((field, number) => {
              // console.log("field", field);
              return (
                <li key={field._id} className="list-group-item col-sm-12">
                  {field.status == "Active" ? (
                    <div className="list_items_active">{field.title}</div>
                  ) : (
                    <div className="list_items_inactive">{field.title}</div>
                  )}
                  <div className="row">
                    <label className="switch">
                      <input
                        type="checkbox"
                        readOnly
                        checked={field.status == "Active" ? true : false}
                        onClick={() => this.setStatus(field)}
                      />
                      <span className="slider round" />
                    </label>
                    <button
                      className="btn btn-warning editBtn"
                      onClick={() => this.setPoll(field)}
                    >
                      {" "}
                      Edit{" "}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletePoll(field)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          { this.props.poll.length > 0 ? 
          ( <div>
            <button
              className="btn btn-secondry"
              onClick={() => this.paginetion("increase")}
            >
              Next
            </button>
            <button
              className="btn btn-secondry"
              onClick={() => this.paginetion("decrease")}
            >
              Pre
            </button> 
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              Do you want to delete {this.state.name}
              <div className="modal_footer">
                <button
                  className="btn btn-warning"
                  onClick={() => this.deleteItem(this.state.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-danger modelCloase"
                  onClick={() => this.closeModal()}
                >
                  Cancel
                </button>
              </div>
            </Modal>
          </div> ) : "" }
        </div>
      );
    }
  }
}
