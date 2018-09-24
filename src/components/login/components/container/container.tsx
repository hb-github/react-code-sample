import * as React from 'react';
import './container-style.css';
import * as toastr from 'toastr';
import { adminLogin } from '../../../../api';
import randomstring from 'randomstring';

import {
    withRouter
} from 'react-router-dom'
export interface ContainerProps {
    history: any
}
export interface ContainerState {
    username: string,
    password: string,
}
class Container extends React.Component<ContainerProps, ContainerState> {
    constructor(props: ContainerProps) {
        super(props);
        this.state = {
            username: '', //hb@hiddenbrains.com
            password: ''  //dev@123
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //     toastr.success('Member saved.');

    }

    componentDidMount(){
        if(window.localStorage.getItem('token'))
        this.props.history.push("/polling");
    }
    
    handleUsernameChange(event: any) {
        this.setState({ username: event.target.value });
    }
    handlePasswordChange(event: any) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        const token = randomstring.generate();
        console.log("this.state", this.state)
        event.preventDefault();
        adminLogin(this.state).then((login: any) => {
            if (login['code'] == 200) {
                toastr.success(login['msg']);
                this.props.history.push("/polling");
                window.localStorage.setItem('token', token);
            } else {
                toastr.error(login['msg']);
            }
        }).catch((error) => {
            console.log("error", error);
        })
    }
    render() {
        return (
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div className="box">
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="shape5"></div>
                        <div className="shape6"></div>
                        <div className="shape7"></div>
                        <div className="float">
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="text-white">Username:</label><br />
                                    <input
                                        type="text"
                                        placeholder={'Enter username'}
                                        name="username"
                                        id="username"
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.handleUsernameChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-white">Password:</label><br />
                                    <input
                                        type="text"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder={'Enter password'}

                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-color btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(Container)
