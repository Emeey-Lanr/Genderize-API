import express from "express";
import cors from "cors";
export const AppMiddleWare = (app) => {
    app.use(cors());
    app.use(express.json());
};
