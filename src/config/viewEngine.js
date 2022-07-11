import express from "express";
import path from "path";
import { engine } from "express-handlebars";

const configViewEngine = (app) => {
    app.use(express.static("public"));
    app.engine(".hbs", engine({ extname: ".hbs" }));
    app.set("view engine", ".hbs");
    app.set("views", "./src/views");
};

module.exports = configViewEngine;
