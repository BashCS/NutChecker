import React, { Component } from "react";
import Chart from "chart.js";
import "./statistics.css";

class Statistics extends Component {
  state = {};
  render() {
    let protein = [];
    let time = [];
    this.props.data.forEach(element => {
      protein.push(element["Protein"]);
      time.push(element["Time"]);
    });

    window.addEventListener("DOMContentLoaded", function() {
      let ctx = document.getElementById("myChart").getContext("2d");
      let myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: time,
          datasets: [
            {
              label: "# of Votes",
              data: protein,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    });
    return (
      <div className="statisticBox">
        <canvas id="myChart" width="16" height="9" />
      </div>
    );
  }
}

export default Statistics;
