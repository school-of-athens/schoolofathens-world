
// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/style.css";
// Pages
import PageNotFound from "./pages/PageNotFound.js";
import Home from "./pages/Home";
import Learn from "./pages/Learn"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Learn />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
