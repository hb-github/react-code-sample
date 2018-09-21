import * as React from "react";
import "./polling-style.css";
import { Button } from "../../common/components/form";
export interface PollingProps {
  question: any;
  onValueSelected: (data: any) => any;
}
export interface PollingState {
  title: string;
  dynamicFields: any;
  value: any;
  fieldCount: number;
  fieldArray: any;
  time_limit: number;
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
      fieldCount: 1,
      fieldArray: ["field1"],
      time_limit: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      if (fieldArray.indexOf(key) > -1) {
        optionValue.push(dynamicFields[key]);
      }
    }

    const data = {
      title: title,
      option: optionValue,
      limit: time_limit
    };
    this.props.onValueSelected(data);
    
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
        <div>
          <button onClick={this.addField}>Add field</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          {this.state.fieldArray.map((field, number) => {
            console.log("`field${number + 1}`", `field${number + 1}`);
            return (
              <div key={number}>
                <label>
                  Option:
                  {number + 1}
                  <input
                    type="text"
                    name={`field${number + 1}`}
                    value={this.state.dynamicFields[`field${number + 1}`]}
                    onChange={this.handleChange}
                  />
                </label>
                <input
                  type="button"
                  onClick={() => this.removeField(`field${number + 1}`)}
                  value="Remove"
                />
                <br />
              </div>
            );
          })}
          <label>
            Time limit(Minutes):
            <input
              type="number"
              name="limit"
              value={this.state.time_limit}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
