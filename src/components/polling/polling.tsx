import * as React from "react";
import "./polling-style.css";
import { Navbar } from "../login/components/navbar/navbar";
import Collapsible from "react-collapsible";
import Modal from "react-modal";
import { ListPoll } from './components';
import { pollList, pollCreate } from "../../api/poll";
import {} from './components';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    height: "500px"
  }
};

Modal.setAppElement("#root");

export interface PollingProps {
  listPollAction: (data: any) => any;
  poll: any;
}
export interface PollingState {
  title: string;
  dynamicFields: any;
  value: any;
  fieldCount: number;
  fieldArray: any;
  time_limit: number;
  modalIsOpen: boolean;
}
export class Polling extends React.Component<PollingProps, PollingState> {
  constructor(props: PollingProps) {
    super(props);
    this.state = {
      title: "",
      dynamicFields: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field7: ""
      },
      value: "",
      fieldCount: 2,
      fieldArray: ["field1", "field2"],
      time_limit: 0,
      modalIsOpen: false,
    
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getPolls = () => {
    console.log("this........", this.props.poll)
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  componentDidMount(){
    this.polls();
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  // List Api

  private polls = () => {
    pollList({ page: 1 })
      .then(success => {
        console.log("success", success);
        // console.log(success['pollingList'].docs);
        this.props.listPollAction(success["pollingList"].docs);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Add Api

  createCall = data => {
    pollCreate(data)
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange(event) {
    const { dynamicFields } = this.state;
    const cpydDynamicFields = dynamicFields;
    console.log("cpydDynamicFields", cpydDynamicFields);
    const target = event.target;
    const name = target.name;
    console.log("name", name);
    if (name == "title") {
      this.setState({
        title: event.target.value
      });
    } else if (name == "limit") {
      this.setState({
        time_limit: event.target.value
      });
    } else {
      cpydDynamicFields[name] = event.target.value;
      this.setState({
        dynamicFields: cpydDynamicFields
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, time_limit, fieldArray, dynamicFields } = this.state;
    let optionValue = [];

    console.log("dynamicFields", dynamicFields);
    console.log("fieldArray", fieldArray);

    for (let key in dynamicFields) {
      // if (fieldArray.indexOf(key) > -1) {
      //   optionValue.push(dynamicFields[key]);
      // }
      if (dynamicFields[key] != "") {
        optionValue.push(dynamicFields[key]);
      }
    }

    const data = {
      title: title,
      option: optionValue,
      limit: time_limit
    };
    //  this.props.onValueSelected(data);

    this.createCall(data);

    console.log("data", data);

    event.preventDefault();
  }
  private removeField = (data: any) => {
    const { fieldCount, fieldArray } = this.state;
    const cpyFieldArray = fieldArray;
    let cpyFieldCount: any = fieldCount;

    cpyFieldArray.splice(cpyFieldArray.indexOf(data), 1);

    delete cpyFieldArray[data];

    cpyFieldCount--;
    this.setState({
      fieldCount: cpyFieldCount,
      fieldArray: cpyFieldArray
    });
  };
  private addField = () => {
    const { fieldCount, fieldArray } = this.state;
    const cpyFieldArray = fieldArray;
    let cpyFieldCount: any = fieldCount;
    cpyFieldCount++;
    cpyFieldArray.push(`field${cpyFieldCount}`);
    this.setState({
      fieldCount: cpyFieldCount,
      fieldArray: cpyFieldArray
    });
  };

  render() {

    const { poll } = this.props;
{console.log("poll", poll)}
    return (
      <div>
        <Navbar />
        <div className="container">


          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="main_div">
              <div className="header">
                <div>
                  <h2 ref={subtitle => subtitle}>Create Poll</h2>
                </div>
                <div className="addfield">
                  <button className="btn btn-primary" onClick={this.addField}>
                    Add field
                  </button>
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="middle">
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  {this.state.fieldArray.map((field, number) => {
                    console.log("`field${number + 1}`", `field${number + 1}`);
                    return (
                      <div key={number}>
                        <div className="options">
                          <label>
                            Option
                            {number + 1}:
                            <input
                              type="text"
                              width="300px"
                              name={`field${number + 1}`}
                              value={
                                this.state.dynamicFields[`field${number + 1}`]
                              }
                              onChange={this.handleChange}
                              className="form-control"
                            />
                          </label>
                        </div>
                        <div>
                          {this.state.fieldArray.length > 2 ? (
                            <input
                              type="button"
                              onClick={() =>
                                this.removeField(`field${number + 1}`)
                              }
                              value="Remove"
                              className="btn btn-danger removeBtn"
                            />
                          ) : (
                              <button className="btn btn-danger removeBtn disabled">
                                Remove
                            </button>
                            )}{" "}
                        </div>{" "}
                        <br />
                      </div>
                    );
                  })}
                  <label> Time limit: </label>
                  <input
                    type="number"
                    name="limit"
                    value={this.state.time_limit}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  <br />
                </div>
                <div className="footer">
                  <input
                    className="btn btn-danger"
                    type="button"
                    onClick={this.closeModal}
                    value="Cancle"
                  />
                  <input
                    className="btn btn-success submitBtn"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </Modal>
          <ListPoll/>
          </div>
      </div>
    );
  }
}
