import * as React from 'react';
import './user-style.css';
import socketIOClient from 'socket.io-client'
const socket = socketIOClient("http://localhost:3001");
export interface Props {

}
export interface State {
  endpoint: any
}
const sheckbox = [
  {
    name: 'option',
    value: "Avinash"
  },
  {
    name: 'option',
    value: "Avinash1"
  },
  {
    name: 'option',
    value: "Avinash3"
  },
  {
    name: 'option',
    value: "Avinash4"
  },
];
export class User extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    

  }
  renderOption = () => {
    return <div onChange={this.setGender.bind(this)}>
      {sheckbox.map((option, index) => {
        return (
          <div key={index}>
            <input type="radio" value={option['value']} name="gender" />
            {option['value']}
          </div>
        )
      })
      }
    </div>
  }

  setGender(event) {
    console.log(event.target.value);
  }
  render() {

    return (
      <div className="container">
        <div className="container-center">
          <div className="title">Polling</div>
          {'dfgdfgdfgdfgdfg'}
          <form>
            {this.renderOption()}
            <br />
          </form>
        </div>
      </div>
    );
  }
}
