import * as React from 'react';
import './registration-style.css';
export interface RegistrationProps {
    onSubmit: (data: any) => any
}
export interface RegistrationState {
    email: string,
}
export class Registration extends React.Component<RegistrationProps, RegistrationState> {
    constructor(props: RegistrationProps) {
        super(props);
        this.state =
            {
                email: ''
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }
    handleSubmit(event) {
        window.localStorage.setItem("email", this.state.email);
        this.props.onSubmit(this.state.email);
    }
    render() {
        return (
            <div className="container">
                <div className="container-center">
                    <div className="title">Polling Login</div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Email:
                            <input type="email" value={this.state.email} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
