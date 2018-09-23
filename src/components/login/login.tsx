import * as React from 'react';
import './login-style.css';
import { Navbar, Container } from './components';
export interface LoginProps {
    onSubmit: (data: any) => any
}
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
        window.localStorage.setItem("email", this.state.email);
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
