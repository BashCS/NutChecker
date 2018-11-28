import React, { Component } from "react";
import "./registerOverlay.css";
class RegisterOverlay extends Component {
  state = {};
  render() {
    //Sends post request to create a new user.
    let submitRegister = () => {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/register", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      let params = {
        first_name: document.getElementById("inputRegisterFirstName").value,
        last_name: document.getElementById("inputRegisterLastName").value,
        email: document.getElementById("inputRegisterEmail").value,
        password: document.getElementById("inputRegisterPassword").value
      };
      xhr.send(JSON.stringify(params));
    };
    return (
      <div className="overlayWrapper">
        <div className="OverlayTop">
          <h1 className="OverlayTitle">Register</h1>
          <button
            className="OverlayCloseButton"
            onClick={this.props.closeOverlayFunc}
          >
            Close
          </button>
        </div>
        <form id="loginOverlayForm">
          <input
            id="inputRegisterFirstName"
            type="text"
            placeholder="First Name"
            name="inputFirstName"
          />
          <input
            id="inputRegisterLastName"
            type="text"
            placeholder="Last Name"
            name="inputLastName"
          />
          <input
            id="inputRegisterEmail"
            type="email"
            placeholder="E-Mail"
            name="inputEmail"
          />
          <input
            id="inputRegisterPassword"
            type="password"
            placeholder="Password"
            name="inputPassword"
          />
          <input
            id="inputRegisterPasswordConfirm"
            type="password"
            placeholder="Confirm Password"
            name="inputConfirmPassword"
          />
        </form>
        <button onClick={submitRegister} id="overlayRegisterButton">
          Register
        </button>
      </div>
    );
  }
}

export default RegisterOverlay;
