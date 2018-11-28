const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://bash:ab846ys0mrvm0Dkw@nutbase-akqlv.mongodb.net/test?retryWrites=true";
const express = require("express");
const app = express();

app.post("/register", (req, res) => {
  //Creates new Document in the user db.

  req.checkBody(req.body.first_name, "Name is required.").isLength({ min: 4 });
  console.log(req.validationErrors());
  let newDocument = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    history: [
      {
        food: [{ id: "", amount: 0 }],
        calories: 0,
        protein: 0,
        fat: 0,
        weight: 0
      }
    ],
    register_date: new Date(),
    last_login: new Date()
  };
  console.log(req.body.first_name);
  //Connects to the Database and inserts the new document if
  if (true) {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true
      },
      (err, db) => {
        if (err) throw err;
        let dbObj = db.db("nutchecker");
        dbObj.collection("users").insertOne(newDocument);
        console.log(newDocument);
        db.close();
      }
    );
  } else {
    console.log("Regex was not succsessfull");
  }
});
module.exports = app;
