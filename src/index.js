import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);
app.use(bodyParser.json());

app.listen(port);
