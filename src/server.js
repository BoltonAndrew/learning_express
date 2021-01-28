/*jshint esversion: 8*/
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
});

app.get("/data", (req, res) => {
    console.log(req.query);
    res.send({ name: req.query.name });
});

app.post("/data", (req, res) => {
    res.send({ data: req.body });
});

app.get("/stuff/:id", (req, res) => {
    console.log(req.params);
    res.send("you have found one stuff");
});

app.get("/stuff", (req, res) => {
    res.send("You have found all the stuff");
});

app.post("/stuff", (req, res) => {
    res.send({ data: req.body });
});

app.get("/person/:id", (req, res) => {
    console.log(req.params.id);
    res.send("Check the VSCode terminal");
});

app.post("/task", (req, res) => {
    fs.writeFileSync('./task.txt', req.body.task);
    res.send("success");
});

app.listen(5000, () => {
    console.log("listening on port 5000");
});