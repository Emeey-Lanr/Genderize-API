import express from "express";
import { Classify } from "./classify";
const Router = express.Router();
export const AppRouter = (app) => {
    app.use("/api", Classify(Router));
};
