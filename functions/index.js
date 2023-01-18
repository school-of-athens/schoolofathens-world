const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/test", (req, res) => {
//     res.sendFile(__dirname + "/test.html");
// });

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