import * as React from "react";

//Styles import
import "./container-style.css";
import * as toastr from "toastr";

//api import 
import { adminLogin } from "../../../../api";
import randomstring from "randomstring";
import { withRouter } from "react-router-dom";

//Component Properties
export interface ContainerProps {
  history: any;
  auth: any;
  authAction: (data: any) => any;
}

//Component States
export interface ContainerState {
  username: string;
  password: string;
  isSubmit: Boolean;
}

class Container extends React.Component<ContainerProps, ContainerState> {
  constructor(props: ContainerProps) {
    super(props);
    this.state = {                                                            //Initializing state
      username: "", //hb@hiddenbrains.com
      password: "", //dev@123
      isSubmit: false
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);        //Initializing field input state variable, because input in controlled component
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event: any) {                        //handle username changes
    this.setState({ username: event.target.value });
    this.displayValidationErrorsUser("username");
  }
  handlePasswordChange(event: any) {                       //handle password changes
    this.setState({ password: event.target.value });
    this.displayValidationErrorsPass("password");
  }
  displayValidationErrorsUser(value) {                     //handle error
    if (this.state.isSubmit === true && this.state.username == '') {
      return (
        <span className="error">{value} is required</span>
      );
    }
  }
  displayValidationErrorsPass(value) {                      //handle error
    if (this.state.isSubmit === true && this.state.password == '') {
      return (
        <span className="error">{value} is required</span>
      );
    }
  }
  handleSubmit(event) {                                     //handle submit
    const { authAction } = this.props;
    const token = randomstring.generate();
    event.preventDefault();
    this.setState({ isSubmit: true })
    if (this.state.username == '') {
      this.displayValidationErrorsUser("username");
    }
    if (this.state.password == '') {
      this.displayValidationErrorsPass("password");
    }
    if (this.state.username != '' && this.state.password != '') {
      adminLogin(this.state)
        .then((login: any) => {
          if (login["code"] == 200) {
            toastr.success(login["msg"]);
            authAction(login);
            this.props.history.push("/polling");
            window.localStorage.setItem("token", token);
          } else {
            toastr.error(login["msg"]);
          }
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
  render() {
    return (
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div className="box">
            <div className="shape1" />
            <div className="shape2" />
            <div className="shape3" />
            <div className="shape4" />
            <div className="shape5" />
            <div className="shape6" />
            <div className="shape7" />
            <div className="float">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="text-white">Username:</label>
                  <br />
                  <input
                    type="email"
                    placeholder={"Enter username"}
                    name="username"
                    id="username"
                    className="form-control"
                    value={this.state.username}
                    tabIndex={1}
                    onChange={this.handleUsernameChange}
                  />
                  {this.displayValidationErrorsUser("username")}
                </div>
                <div className="form-group">
                  <label className="text-white">Password:</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder={"Enter password"}
                    value={this.state.password}
                    tabIndex={2}
                    onChange={this.handlePasswordChange}
                  />
                  {this.displayValidationErrorsPass("password")}
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-color btn-md"
                    value="submit"
                    tabIndex={3}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//exported HOC with (withRouter) have history, match etc param as properties to our component
export default withRouter(Container);
