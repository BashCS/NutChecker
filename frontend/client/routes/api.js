const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const express = require("express");
const app = express();
const path = require("path");

app.get("/api", function(req, res) {
  //If its an API call it makes a request to the database, if not it shows the website with the GUI
  if (req.query.name) {
    // Defines Regex for the search query
    let query = {};
    let regString = "^(" + req.query.name + ")";
    let regex = new RegExp(regString, "gi");
    query[req.query.category] = { $regex: regex };
    console.log(query);

    // Connects to the Database
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true
      },
      (err, db) => {
        if (err) throw err;
        let dbObj = db.db("food");
        dbObj
          .collection("products")
          .find(query)
          .toArray(function(err, result) {
            if (err) throw err;
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept"
            );
            res.sendFile(path.join(process.cwd() + "/public/index.html"));
            res.json(result);
            console.log(result);
            db.close();
          });
      }
    );
    console.log("Searching...");
  } else {
    //Sends website with API GUI
    res.sendFile(path.join(process.cwd() + "/public/index.html"));
  }
});
module.exports = app;
