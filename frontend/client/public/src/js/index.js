document.addEventListener("DOMContentLoaded", function() {
  //Sends a get request to the API when button is pressed
  let button = document.getElementById("searchBtn");
  button.addEventListener("click", dbRequest);
  function dbRequest(event) {
    event.preventDefault();
    document.getElementById("results").innerHTML = "";
    //Creates the string that is send to the API
    let searchString =
      "http://localhost:5000/api/?name=" +
      document.getElementById("inputName").value +
      "&category=" +
      document.getElementById("inputCategory").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", searchString, true);
    xhr.onload = function() {
      let result = JSON.parse(this.response);
      console.log(result);
      let list = document.getElementById("results");
      for (let i = 0; i < result.length; i++) {
        let templi = list.appendChild(document.createElement("li"));
        templi.innerText = result[i]["product_name"];
        console.log(result[i]["product_name"]);
      }
    };
    xhr.send();
  }
});
