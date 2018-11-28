import React, { Component } from "react";
import "./overview.css";
import Statistics from "./statistics";

class Overview extends Component {
  state = {};

  render() {
    let overviewBody;
    //Changes view based on the activeTab set.
    if (this.props.activeTab === "Statistics") {
      overviewBody = <Statistics data={this.props.data} />;
    } else if (this.props.activeTab === "Leaderboard") {
      overviewBody = "leaderbodes";
    }
    return (
      <div className="overviewWrapper">
        <div className="overviewHeader">
          <div className="overviewHeaderTop">
            <div className="overviewBoxBig">
              <h2>Calories</h2>
              <div>
                {this.props.numbers.Calories}/{this.props.numbersMax.Calories}
              </div>
            </div>
            <div className="overviewBoxBig">
              <h2>Water</h2>
              <div>
                {this.props.numbers.Water}/{this.props.numbersMax.Water}
              </div>
            </div>
          </div>
          <div className="overviewHeaderBottom">
            <div className="overviewBoxSmall">
              <h2>Carbs</h2>
              <div>
                {this.props.numbers.Carbs}/{this.props.numbersMax.Carbs}
              </div>
            </div>
            <div className="overviewBoxSmall">
              <h2>Protein</h2>
              <div>
                {this.props.numbers.Protein}/{this.props.numbersMax.Protein}
              </div>
            </div>
            <div className="overviewBoxSmall">
              <h2>Fat</h2>
              <div>
                {this.props.numbers.Fat}/{this.props.numbersMax.Fat}
              </div>
            </div>
          </div>
        </div>
        <div className="overviewBody">{overviewBody}</div>
      </div>
    );
  }
}

export default Overview;
