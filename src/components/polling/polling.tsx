import * as React from "react";

//Child Component Import
import { Navbar } from "../login/components/navbar/navbar";
import { ListPoll } from './components/list-poll';
import AddPollContainer from './components/add-poll';

//Styles import
import "./polling-style.css";

//Component Properties
export interface PollingProps {
  listAction: (data: any) => any;
  poll: any;
}
//Component States
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

    this.state = {                                      //Initializing state
      isAdded: false,
      isUpdate: false,
      title: "",
      dynamicFields: {                                  //Initializing field input state variable, because input in controlled component
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
    this.openModal = this.openModal.bind(this);
  }
  openModal() {                                              //Initializing model
    this.setState({ isAdded: true });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.state.isAdded ? "" : <button className="btn btn-primary createpollBtn" onClick={this.openModal}>Create Poll</button>}
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
