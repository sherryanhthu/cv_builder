const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
require("dotenv").config();
// TODO set up the mysql connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
const app = express();
// TODO set up the environment
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// TODO set up the path
app.get("/", function (req, res) {
    res.render("home_page");
});
app.post("/register", function (req, res) {
    const data = {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        summary: req.body.summary,
    };
    res.render("final_cv", data);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("On port ");
});
