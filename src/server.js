/*jshint esversion: 8*/
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/data", (req, res) => {
    console.log(req.query);
    res.send({ name: req.query.name });
});

app.get("/stuff/:id", (req, res) => {
    console.log(req.params);
    res.send("you have found one stuff");
});

app.get("/stuff", (req, res) => {
    res.send("You have found all the stuff");
});

app.get("/person/:id", (req, res) => {
    console.log(req.params.id);
    res.send("Check the VSCode terminal");
});

app.listen(5000, () => {
    console.log("listening on port 5000");
});