// Basic Lib Import
const express = require('express');
const router = require('./src/routes/salesRoutes');
const app = new express();
const bodyParser = require('body-parser');



//! Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");


// Database Lib Import
const mongoose = require('mongoose');

//! Security Middleware implements
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

//! ENV
// const dotENV = require("dotenv");
// dotENV.config();


// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)


async function connectToDatabase() {
    const URI = "mongodb+srv://johan111:johan111@cluster0.rbbqn.mongodb.net/shopping-cart?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URI);
        console.log("Connection Success");
    } catch (error) {
        console.error("Connection Error:", error);
    }
}

connectToDatabase();

//! Frontend URL Tagging API
app.use("/api", router);
module.exports = app;