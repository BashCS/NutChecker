import React, { Component } from "react";
import "./menu.css";
import Login from "./login";
import Loggedin from "./loggedin";

class Menu extends Component {
  state = {};
  render() {
    // Renders menupoints based on the state of App.js
    let menuPointsArray = [];
    this.props.menuPoints.forEach(element => {
      menuPointsArray.push(<li key={element}>{element}</li>);
    });
    //Shows the user a different menu based upon if he is logged in or not.
    let userLogin;
    if (this.props.loginStatus) {
      userLogin = <Loggedin userdata={this.props.userdata} />;
    } else {
      userLogin = (
        <Login
          loginFunc={this.props.loginFunc}
          registerFunc={this.props.registerFunc}
        />
      );
    }
    return (
      <div className="menuWrapper">
        <div id="menuTitleWrapper">
          <h1>Nutrition-Checker</h1>
        </div>
        <div>{userLogin}</div>

        <ul className="menuPoints">{menuPointsArray}</ul>
      </div>
    );
  }
}

export default Menu;
