// import express from "express"
const colors = require('colors')
const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const {connectDB}  = require('./config/db')
// import {config} from "dotenv"


connectDB()
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
