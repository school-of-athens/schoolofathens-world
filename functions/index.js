const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const getDate = require(__dirname + "/getDate.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var ArticlesList = [];
ArticlesList.push({
    content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    publishDate: getDate.getDate(),
    img_src: "/images/School-Of-Athens.jpg"
});

app.get("/learn", (req, res) => {
    res.render('learn', {ArticlesList: ArticlesList});
});

app.get("/compose", (req, res) => {
    res.render('compose', {today: getDate.getDate()});
});

app.post("/compose", (req, res) => {

    ArticlesList.push({
        content: req.body.content,
        publishDate: getDate.getDate(),
        img_src: "/images/" + req.body.image
    });

    res.redirect("/learn");
});

app.post("/api/test", (req, res) => {
    res.send("The answer is " + (Number(req.body.num1) + Number(req.body.num2)));
});

app.post('/api/weather', (req, res) => {
    const lat = req.body.latitude;
    const lon = req.body.longitude;
    const apiKey = "71c1776549fd5348791142a292b1db5d";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    console.log(url);

    https.get(url, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1 style=\"text-align: center;\">The temperature is " + temp + " degree</h1>");
            res.write("<p style=\"text-align: center;\">The weather is currently " + weatherDescription + "</p>");
            res.write("<img src=\"" + imageURL + "\" style=\"display: block; margin-left: auto; margin-right: auto;\">");
            res.send();
        });
    });
});

exports.app = functions.https.onRequest(app);