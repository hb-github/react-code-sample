import * as React from "react";
import "./polling-style.css";
import { Navbar } from "../login/components/navbar/navbar";
import Collapsible from "react-collapsible";
import Modal from "react-modal";
import { ListPoll } from './components/list-poll';
import AddPollContainer from './components/add-poll';
import UpdatePollContainer from './components/update-poll';
import { pollList, pollCreate } from "../../api/poll";
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
  isAdded: boolean,
  isUpdate: boolean,
  title: string;
  dynamicFields: any;
  value: any;
  fieldCount: number;
  fieldArray: any;
  time_limit: string;
  modalIsOpen: boolean;
}
export class Polling extends React.Component<PollingProps, PollingState> {
  constructor(props: PollingProps) {
    super(props);
    this.state = {
      isAdded: false,
      isUpdate: false,
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
      time_limit: '',
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
    
    this.setState({ isAdded: true });
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
    let cpyDynamicFields = { ...dynamicFields }
    console.log("cpyFieldArray", cpyFieldArray);
    console.log("cpyFieldCount", cpyFieldCount);
    cpyFieldCount++;
    let sudoCount = cpyFieldCount;
    if (cpyFieldArray.indexOf(`field${cpyFieldCount}`) > -1) {
      let idUpdate = true;
      while (idUpdate) {
        sudoCount--;
        if (cpyFieldArray.indexOf(`field${sudoCount}`) < 0) {
          cpyDynamicFields[`field${sudoCount}`] = '';
          cpyFieldArray.push(`field${sudoCount}`);
          idUpdate = false;
          this.setState({ dynamicFields: cpyDynamicFields })
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

    const { poll } = this.props;

    return (
      <div>
        <Navbar />
        <div className="container">
        { this.state.isAdded ? "" : <button className="btn btn-primary createpollBtn" onClick={this.openModal}>Create Poll</button> }          
          {this.state.isAdded ? <div>
            <AddPollContainer />
            <ListPoll />
          </div> :
            <div>
              <ListPoll />
            </div>
          }  
        </div>
      </div>
    );
  }
}
