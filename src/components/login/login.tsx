import * as React from 'react';

//Styles import
import './login-style.css';

//Child Component Import
import { Navbar, Container } from './components';

//Component Properties
export interface LoginProps {
    onSubmit: (data: any) => any
}

//Component States
export interface LoginState {
    email: string,
}
export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
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
        this.props.onSubmit(this.state.email);
    }
    render() {
        return (
            <div>
                <Navbar />
                <Container />
            </div>
        );
    }
}
