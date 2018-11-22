import React, { Component } from "react";
import "./overview.css";

class Overview extends Component {
  state = {};

  render() {
    let searchOverlay = () => {
      document.getElementById("overlayWrapper").style.display = "block";
    };
    return (
      <div className="overviewWrapper">
        <div className="overviewHeader">
          <div className="overviewHeaderTop">
            <div className="overviewBoxBig" />
            <div
              className="overviewBoxBig"
              onClick={searchOverlay}
              id="searchButton"
            >
              <p>SEARCH</p>
            </div>
            <div className="overviewBoxBig" />
          </div>
          <div className="overviewHeaderBottom">
            <div className="overviewBoxSmall" />
            <div className="overviewBoxSmall" />
            <div className="overviewBoxSmall" />
          </div>
        </div>
        <div className="overviewBody">Hallo</div>
      </div>
    );
  }
}

export default Overview;
