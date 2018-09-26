import * as React from "react";
import "./add-poll-style.css";
import Modal from "react-modal";
import { pollList, pollCreate } from "../../../../api/poll";
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
  listAction: (data: any) => any;
  poll: any;
}
export interface PollingState {
  title: string;
  dynamicFields: any;
  value: any;
  fieldCount: number;
  fieldArray: any;
  time_limit: string;
  modalIsOpen: boolean;
}
export class AddPoll extends React.Component<PollingProps, PollingState> {
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
      time_limit: "",
      modalIsOpen: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getPolls = () => {
    console.log("this........", this.props.poll);
  };
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  componentDidMount() {
    // this.polls();
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  // List Api

  private polls = () => {
    pollList({ page: 1 })
      .then(success => {
        this.props.listAction(success["pollingList"].docs);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Create Api

  createCall = data => {
    pollCreate(data)
      .then(success => {
        // console.log(success);
        this.polls();
        this.closeModal();
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
    // console.log("name", name);
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
      if (fieldArray.indexOf(key) > -1) {
        optionValue.push(dynamicFields[key]);
      }
      // if (dynamicFields[key] != "") {
      //   optionValue.push(dynamicFields[key]);
      // }
    }
    console.log(optionValue);
    const data = {
      title: title,
      options: optionValue,
      limit: time_limit
    };
    //  this.props.onValueSelected(data);

    this.createCall(data);

    console.log("data", data);

    event.preventDefault();
  }
  private removeField = (data: any) => {
    console.log("data", data);
    const { fieldCount, fieldArray, dynamicFields } = this.state;
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
    const { fieldCount, fieldArray, dynamicFields } = this.state;
    const cpyFieldArray = fieldArray;
    let cpyFieldCount: any = fieldCount;
    let cpyDynamicFields = { ...dynamicFields };
    console.log("cpyFieldArray", cpyFieldArray);
    console.log("cpyFieldCount", cpyFieldCount);
    cpyFieldCount++;
    let sudoCount = cpyFieldCount;
    if (cpyFieldArray.indexOf(`field${cpyFieldCount}`) > -1) {
      let idUpdate = true;
      while (idUpdate) {
        sudoCount--;
        if (cpyFieldArray.indexOf(`field${sudoCount}`) < 0) {
          cpyDynamicFields[`field${sudoCount}`] = "";
          cpyFieldArray.push(`field${sudoCount}`);
          idUpdate = false;
          this.setState({ dynamicFields: cpyDynamicFields });
        }
      }
      cpyFieldArray.sort();
    } else {
      cpyFieldArray.push(`field${cpyFieldCount}`);
    }
    this.setState({
      fieldCount: cpyFieldCount,
      fieldArray: cpyFieldArray
    });
  };

  render() {
    return (
      <div>
        <div>
          <button className="btn btn-primary createPollBtn" onClick={this.openModal} >Create Poll</button>
        </div>
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
                  return (
                    <div key={number}>
                      <div className="options">
                        <label>
                          Option
                          {number + 1}:
                          <input
                            placeholder={`Option ${number + 1}`}
                            type="text"
                            width="300px"
                            name={field}
                            value={this.state.dynamicFields[field]}
                            onChange={this.handleChange}
                            className="form-control"
                          />
                        </label>
                      </div>
                      <div>
                        {this.state.fieldArray.length > 2 ? (
                          <input
                            type="button"
                            onClick={() => this.removeField(field)}
                            value="Remove"
                            className="btn btn-danger removeBtn"
                          />
                        ) : (
                          <button className="btn btn-danger removeBtn1 disabled">
                            Remove
                          </button>
                        )}{" "}
                      </div>{" "}
                      <br />
                    </div>
                  );
                })}
                <label> Time limit: (example : 20 minute)</label>
                <input
                  type="text"
                  name="limit"
                  placeholder={"In a minute"}
                  value={this.state.time_limit}
                  onChange={this.handleChange}
                  className="form-control"
                />
                <br />
              </div>
              <div className="footer">
                <div className="footer cancelBtn">
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Submit"
                  />
                </div>
                <div className="footer">
                  <input
                    className="btn btn-danger"
                    type="button"
                    onClick={this.closeModal}
                    value="Cancel"
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
