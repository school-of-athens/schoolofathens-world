const functions = require("firebase-functions");
const express = require("express");
const https = require("https");
const getDate = require(__dirname + "/getDate.js");

const admin = require("firebase-admin");
const credentials = require(__dirname + "/key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/test", (req, res) => {
    res.send(__dirname);
});

app.get("/learn", async (req, res) => {
    const usersRef = db.collection("articles");
    const response = await usersRef.get();

    let articlesList = [];
    response.forEach((doc) => {
        let article = doc.data();
        article.id = doc.id;
        articlesList.push(article);
    })

    res.render('learn', { articlesList: articlesList });
});

app.get("/compose", (req, res) => {
    res.render('compose', { today: getDate.getDate() });
});

app.post("/compose", async (req, res) => {

    const newArticle = {
        title: req.body.title,
        content: req.body.content,
        publishDate: getDate.getDate(),
        img_src: "https://schoolofathens.world/images/" + req.body.image
    };

    const response = await db.collection("articles").add(newArticle);

    res.redirect("/learn");
});

app.get("/learn/:articleID", async (req, res) => {

    var docRef = db.collection("articles").doc(req.params.articleID);

    docRef.get().then((doc) => {
        res.render('article', {article: doc.data()});
    }).catch((error) => {
        res.redirect("/404");
    });
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

app.use((req, res, next) => {
    res.status(404).redirect("/404");
  })

exports.app = functions.https.onRequest(app);