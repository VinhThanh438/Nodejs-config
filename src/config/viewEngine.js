import express from "express";
import path from "path";

const configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, "public")));
};

module.exports = configViewEngine;
