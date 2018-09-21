import * as React from 'react';
import './polling-style.css';
import { Button } from '../../common/components/form';
export interface PollingProps {
    question: any,
    onValueSelected: (data: any) => any
}
export interface PollingState {
    title: string,
    dynamicFields: any,
    value: any,
    fieldCount: number,
    fieldArray: any
}
export class Polling extends React.Component<PollingProps, PollingState> {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            dynamicFields: {},
            value: '',
            fieldCount: 1,
            fieldArray: ['option1']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { dynamicFields } = this.state;
        const cpydDynamicFields = dynamicFields;
        const target = event.target;
        const name = target.name;
        if (name == "title") {
            this.setState({
                title: event.target.value
            });
        }
        else {
            cpydDynamicFields[name] = event.target.value;
            this.setState({
                dynamicFields: cpydDynamicFields
            });
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    private removeField = (data: any) => {

    }
    private addField = () => {
        const { fieldCount, fieldArray } = this.state;
        const cpyFieldArray = fieldArray;
        let cpyFieldCount: any = fieldCount;
        cpyFieldCount++;
        cpyFieldArray.push(`option${cpyFieldCount}`);
        this.setState({
            fieldCount: cpyFieldCount,
            fieldArray: cpyFieldArray
        })
    }

    render() {
        return (
            <div>
                <div><button onClick={this.addField}>Add field</button></div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    {this.state.fieldArray.map((field, number) => {
                        return (
                            <div key={number}>
                                <label >
                                    Option:{number + 1}
                                    <input type="text"
                                        name={`field${number}`}
                                        value={this.state.dynamicFields[`field${number}`]} onChange={this.handleChange} />
                                </label>
                                <button onClick={() => this.removeField(field)}>Remove</button>
                                <br />
                            </div>
                        )
                    })}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
