import React, { Component } from "react";
import "./App.css";
import Overview from "./components/overview";
import Menu from "./components/menu";
import Overlay from "./components/overlay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Overview />
        <Overlay />
      </div>
    );
  }
}

export default App;
