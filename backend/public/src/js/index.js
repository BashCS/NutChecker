document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("searchBtn");
  button.addEventListener("click", dbRequest);
  function dbRequest(event) {
    event.preventDefault();
    document.getElementById("results").innerHTML = "";
    let searchString =
      "http://localhost:5000/?name=" +
      document.getElementById("inputName").value +
      "&category=" +
      document.getElementById("inputCategory").value;
    let xhr = new XMLHttpRequest();
    console.log(searchString);
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
      //console.log(this.responseText);
    };
    xhr.send();
  }

  console.log(button);
});
