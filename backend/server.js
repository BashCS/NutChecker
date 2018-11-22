const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 5000;

app.get("/", (req, res) => {
  if (req.query.name) {
    console.log(req.query.searchField);
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
            app.use(express.static("public"));
            res.sendFile(path.join(__dirname + "/public/index.html"));
            res.json(result);
            console.log(result);
            db.close();
          });
      }
    );
    console.log("searching");
  } else {
    app.use(express.static("public"));
    res.sendFile(path.join(__dirname + "/public/index.html"));
  }
});
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
