import React, { Component } from "react";
import "./loginOverlay.css";
class LoginOverlay extends Component {
  state = {};
  render() {
    return (
      <div className="overlayWrapper">
        <div className="OverlayTop">
          <h1 className="OverlayTitle">Login</h1>
          <button
            className="OverlayCloseButton"
            onClick={this.props.closeOverlayFunc}
          >
            Close
          </button>
        </div>
        <form id="loginOverlayForm">
          <input
            id="inputLoginEmail"
            type="email"
            placeholder="E-Mail"
            name="nameField"
          />
          <input
            id="inputLoginPassword"
            type="password"
            placeholder="Password"
            name="nameField"
          />
        </form>
        <button id="overlayLoginButton">Login</button>
      </div>
    );
  }
}

export default LoginOverlay;
