import React, { Component } from "react";
import "./App.css";
import Overview from "./components/overview";
import Menu from "./components/menu";
import LoginOverlay from "./components/loginOverlay";
import RegisterOverlay from "./components/registerOverlay";

class App extends Component {
  state = {
    showLogin: false,
    showRegister: false,
    loginStatus: false,
    Menu: ["Statistics", "Leaderboard", "Recepies"],
    Numbers: {
      Calories: 1000,
      Water: 2000,
      Fat: 100,
      Carbs: 200,
      Protein: 100
    },

    NumbersMax: {
      Calories: 2000,
      Water: 3000,
      Fat: 200,
      Carbs: 300,
      Protein: 200
    },
    ActiveTab: "Statistics",
    Userdata: { first_name: "Max", last_name: "Mustermann" },
    Data: [
      {
        Time: 1542981607556,
        Calories: 1550,
        Water: 2340,
        Carbs: 100,
        Fat: 100,
        Protein: 98,
        Food: [
          { id: 123123123123, amount: 100 },
          { id: 123123123123, amount: 100 }
        ],
        Weight: 90
      },
      {
        Time: 1542981807556,
        Calories: 1550,
        Water: 2340,
        Carbs: 100,
        Fat: 100,
        Protein: 112,
        Food: [
          { id: 123123123123, amount: 100 },
          { id: 123123123123, amount: 100 }
        ],
        Weight: 90
      },
      {
        Time: 1542991607556,
        Calories: 1550,
        Water: 2340,
        Carbs: 100,
        Fat: 100,
        Protein: 130,
        Food: [
          { id: 123123123123, amount: 100 },
          { id: 123123123123, amount: 100 }
        ],
        Weight: 90
      },
      {
        Time: 1642981607556,
        Calories: 1550,
        Water: 2340,
        Carbs: 100,
        Fat: 100,
        Protein: 75,
        Food: [
          { id: 123123123123, amount: 100 },
          { id: 123123123123, amount: 100 }
        ],
        Weight: 90
      }
    ]
  };
  render() {
    let login = () => {
      this.setState({ showLogin: true });
    };
    let register = () => {
      this.setState({ showRegister: true });
    };
    let closeOverlay = () => {
      this.setState({ showLogin: false });
      this.setState({ showRegister: false });
    };
    let loginOverlay;
    let registerOverlay;
    if (this.state.showLogin) {
      loginOverlay = <LoginOverlay closeOverlayFunc={closeOverlay} />;
    } else {
      loginOverlay = "";
    }
    if (this.state.showRegister) {
      registerOverlay = <RegisterOverlay closeOverlayFunc={closeOverlay} />;
    } else {
      registerOverlay = "";
    }
    return (
      <div className="App">
        <Menu
          loginFunc={login}
          registerFunc={register}
          userdata={this.state.Userdata}
          menuPoints={this.state.Menu}
          loginStatus={this.state.loginStatus}
        />
        <Overview
          data={this.state.Data}
          numbers={this.state.Numbers}
          numbersMax={this.state.NumbersMax}
          activeTab={this.state.ActiveTab}
        />
        {loginOverlay}
        {registerOverlay}
      </div>
    );
  }
}

export default App;
