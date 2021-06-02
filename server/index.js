const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const express = require('express')
const cors = require('cors')

const app = express();
const imageRouter = require("./src/router/lampiran");

app.use(express.json())
app.use(cors())

app.use("/images", express.static(path.join(__dirname, 'images')))
app.use("/lampiran", imageRouter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, UPDATE, DELETE');
  res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
})

app.listen(process.env.APPS_PORT, ()=>{
    console.log("Server Running at", process.env.APPS_PORT);
})