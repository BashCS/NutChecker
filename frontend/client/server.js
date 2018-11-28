const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
const apiRouter = require("./routes/api");
const registerRouter = require("./routes/register");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//API to search for Food-Data
app.get("/api", apiRouter);
//Route to register new members
app.post("/register", registerRouter);
//Tells website to use content in public folder
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
