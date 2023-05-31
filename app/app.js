"use strict";

const express = require('express');
const bodyParser=require("body-parser");
const path = require('path');
const app = express();

const home = require("./src/routes/home");

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));
app.use(express.static(path.join(__dirname, './src/views/home')));

app.use("/",home);

module.exports = app;