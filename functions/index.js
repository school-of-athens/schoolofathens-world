const functions = require("firebase-functions");
const express = require("express");
const https = require("https");
// const multer = require('multer');
// const upload = multer();

const admin = require("firebase-admin");
const credentials = require(__dirname + "/key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

app.post('/api/compose', async (req, res) => {

    await db.collection("articles").add(req.body);

    res.redirect("/learn");
});

app.get('/api/devData', async (req, res) => {

    let todoList = [];
    let logList = [];

    await db.collection("devTodo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            todoList.push(data);
        });
    });

    await db.collection("devLog").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            logList.push(data);
        });
    });

    res.json({
        todoData: todoList,
        logData: logList 
    });
});

app.get('/api/getVote/:id', async (req, res) => {

    await db.collection("votes").doc(req.params.id).get()
        .then((doc) => {

            if (doc.exists) {
                const data = doc.data();
                return res.json(data);
            }
            else  {
                res.redirect("/404");
            }
        })
        .catch((error) => {
            res.redirect("/404");
        });
});

app.post('/api/devData/todo', async (req, res) => {
    return await db.collection("devTodo").add(req.body);
});

app.delete('/api/devData/todo', async (req, res) => {
    return db.collection("devTodo").doc(req.body.id).delete();
});

app.post('/api/devData/log', async (req, res) => {
    return await db.collection("devLog").add(req.body);
});

app.get('/learn/:id', async (req, res) => {

    db.collection("articles").doc(req.params.id).get()
        .then((doc) => {

            if (doc.exists) {
                const data = doc.data();
                console.log(data);
                //  res.send(data);
                res.render('article', {article: data});
            }
            else  {
                res.redirect("/404");
            }
        })
        .catch((error) => {
            res.redirect("/404");
        });
})

app.get("/api/getArticles", async (req, res) => {

    let articlesList = [];

    await db.collection("articles").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            articlesList.push(data);
        });
    });

    res.json({ articlesList: articlesList });
});

app.use((req, res, next) => {
    res.status(404).redirect("/404");
});

exports.app = functions.https.onRequest(app);