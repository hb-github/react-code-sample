import * as React from 'react';
import './admin-style.css';
import io from 'socket.io-client';
import { Polling } from './polling/polling';
import { Registration } from './registration/registration';
export interface Props {

}
export interface State {
  isLoggedIn: boolean,
  question: any
}
const sheckbox = [
  {
    name: 'option',
    value: "Avinash"
  }
];
export class Admin extends React.Component<Props, State> {
  private socket: any;
  constructor(props) {
    super(props);
    if (window.localStorage.getItem('email') && window.localStorage.getItem('socketId'))
      this.socket = io('http://localhost:3001', { query: { token: window.localStorage.getItem('email') } });
    if (window.localStorage.getItem('email') && window.localStorage.getItem('socketId')) {
      this.state = {
        isLoggedIn: true,
        question: []
      };
    } else {
      this.state = {
        isLoggedIn: false,
        question: []
      };
    }
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  }
  private connect = () => {
    console.log("socket connected from back")
  }
  private disconnect = () => {
    console.log("socket disconnected from back")
  }
  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  };

  private onValue = (data: any): any => {
    console.log("data option", data);
  }
  private onSubmit = (data: any): any => {
    console.log("'data  on submit", data);
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Polling
          onValueSelected={this.onValue}
          question={this.state.question}
        />
      )
    } else {
      <Registration
        onSubmit={this.onSubmit}
      />
    }
  }

}


