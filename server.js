const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  if (req.query.searchField) {
    console.log(req.query.searchField);
    // Defines Regex for the search query
    let query = {};
    let regString = "^(" + req.query.searchField + ")";
    let regex = new RegExp(regString, "gi");
    query["product_name"] = { $regex: regex };
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
            /*
            let names = [];
            result.forEach(function(item, index) {
              names.push(item["product_name"]);
              console.log(item["product_name"]);
            });
            */
            app.use(express.static("public"));
            res.sendFile(path.join(__dirname + "/public/index.html"));
            res.json(result);
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
  console.log("Listening on port 3000!");
});
