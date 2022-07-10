import express from "express";
import Controller from "../controller/homeController";
const router = express.Router();

const routes = (app) => {
    app.get("/", Controller.home);
    return app.use("/", router);
};

module.exports = routes;
