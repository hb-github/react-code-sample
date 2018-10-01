import * as React from "react";
import "./list-poll-style.css";
import UpdatePollContainer from "../update-poll";
import {
  pollList,
  pollDelete,
  pollToggleStatus
} from "../../../../api/poll";
import Modal from "react-modal";
const staticUrl = "http://hbvoting.projectspreview.net:3003";
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
    this.state = {                                //Initially state
      isUpdate: false,
      page: 1,
      total: 0,
      limit: 0,
      id: "",
      name: "",
      modalIsOpen: false
    };
  }
  componentDidMount() {                        //fetching data
    this.polls();
  }

  pagination(value) {                        //pagination function
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

  private polls = () => {                                   //calling poll list api
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

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  deleteItem = id => {                                       //deleting specific poll by id 
    pollDelete({ pollId: id })
      .then(success => {
        this.polls();
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ modalIsOpen: false });
  };
  setPoll = data => {                                           //passing data to state manager 
    this.props.selectedPollAction(data);
    this.setState({ isUpdate: true });
  };
  setStatus = data => {                                        //Activating and deactivating poll
    data.status == "Inactive"
      ? (data.status = "Active")
      : (data.status = "Inactive");
    pollToggleStatus({
      pollId: data._id,
      status: data.status,
      activeTimeStamp: new Date()
    })
      .then(success => {
        if (success)
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
          <UpdatePollContainer closeModel={this.closeModal} />
          <div className="top-margin">
            <div className="row">
              <div className="col-sm-12 list_heading">
                <div className="col-sm-12">
                  <span className="txt2">
                  </span>
                </div>
              </div>
            </div>

            <ul className="list-group">
              {poll.map((field) => {
                return (
                  <li key={field._id} className="list-group-item col-sm-12">
                    {field.status == "Active" ? (
                      <div>
                        <div className="list_items_active">{field.title}</div>
                        <div className="list_items_active">{`${staticUrl}/${field._id}`}</div>
                      </div>
                    ) : (
                        <div>
                          <div className="list_items_inactive">{field.title}</div>
                          <div className="list_items_active">{`${staticUrl}/${field._id}`}</div>
                        </div>
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
                </span>
              </div>
            </div>
          </div>
          <ul className="list-group">
            {poll.map((field, number) => {
              return (
                <li key={field._id} className="list-group-item col-sm-12">
                  {field.status == "Active" ? (
                    <div>
                      <div className="list_items_active">{field.title}</div>
                      <div className="list_items_active">{`${staticUrl}/${field._id}`}</div>
                    </div>
                  ) : (
                      <div>
                        <div className="list_items_inactive">{field.title}</div>
                        <div className="list_items_active">{`${staticUrl}/${field._id}`}</div>
                      </div>
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
          {this.props.poll.length > 0 ?
            (<div>
              <button
                className="btn btn-secondry"
                onClick={() => this.pagination("increase")}
              >
                Next
            </button>
              <button
                className="btn btn-secondry"
                onClick={() => this.pagination("decrease")}
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
            </div>) : ""}
        </div>
      );
    }
  }
}
