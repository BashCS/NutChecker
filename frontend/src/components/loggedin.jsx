import React, { Component } from "react";
class Loggedin extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Welcome back</p>
        <p>
          {this.props.userdata.first_name}
          {this.props.userdata.last_name}
        </p>
        <ul className="menuPoints" id="loginButton">
          <li>Logout</li>
        </ul>
      </div>
    );
  }
}

export default Loggedin;
