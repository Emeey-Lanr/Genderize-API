import express, {Express} from "express"
import { Classify } from "./classify"

const Router = express.Router()


export const AppRouter = (app:Express)=>{
 app.use("/api", Classify(Router))

}

