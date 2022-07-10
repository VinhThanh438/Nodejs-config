import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import routes from "./routes/routes";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

routes(app);
configViewEngine(app);
app.use(bodyParser.json());

app.listen(port);
