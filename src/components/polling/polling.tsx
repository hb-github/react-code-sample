import * as React from "react";
import "./polling-style.css";
import { Navbar } from "../login/components/navbar/navbar";
import Collapsible from "react-collapsible";
import Modal from "react-modal";
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

export interface PollingProps {}
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
  constructor(props) {
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
      modalIsOpen: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

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
                  <label>
                    Title:
                  </label>
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
                            
                          /></label></div>                              
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
                           ) : ( <button className="btn btn-danger removeBtn disabled">Remove</button> )
                       }    </div>     <br />                              
                                                  
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
          <div className="top-margin">
            <div className="row">
              <div className="col-sm-12 list_heading">
                <div className="txt1">Polling List</div>
                <div className="col-sm-12">
                  <span className="txt2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.openModal}
                    >
                      Create Poll
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <ul className="list-group">
              <li className="list-group-item col-sm-12"><div className="list_items">First item</div><button className="btn btn-warning editBtn">Edit</button></li>
              <li className="list-group-item col-sm-12"><div className="list_items">Second item</div><button className="btn btn-warning editBtn">Edit</button></li>
              <li className="list-group-item col-sm-12"><div className="list_items">Third item</div><button className="btn btn-warning editBtn">Edit</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
