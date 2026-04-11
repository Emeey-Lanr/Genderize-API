import { ClassifyUser } from "../handler/classify";
import { Router} from "express";

export function Classify (app:Router){
  app.get("/", ClassifyUser)

  return app
}
