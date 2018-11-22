import React, { Component } from "react";
import "./overlay.css";

class Overlay extends Component {
  state = {};
  render() {
    let search = event => {
      event.preventDefault();
      fetch(
        "http://localhost:5000/?name=" +
          document.getElementById("inputName").value +
          "&category=product_name"
      )
        .then(response => response.json())
        .then(response => {
          response.forEach(element => {
            let list = document.getElementById("results");
            let templi = list.appendChild(document.createElement("li"));
            templi.innerText = element["product_name"];
          });
        })
        .catch(error => {
          console.error(error);
        });
    };
    return (
      <div id="overlayWrapper">
        <form>
          <input
            id="inputName"
            type="text"
            placeholder="Name"
            name="nameField"
          />
          <button onClick={search}>SEARCH</button>
        </form>
        <ul id="results" />
      </div>
    );
  }
}

export default Overlay;
