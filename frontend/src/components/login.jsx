import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <ul className="menuPoints">
        <li onClick={this.props.loginFunc} id="loginButton">
          Login
        </li>
        <li onClick={this.props.registerFunc} id="registerButton">
          Register
        </li>
      </ul>
    );
  }
}

export default Login;
