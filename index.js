const bodyParser = require("body-parser");
const express = require("express");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
