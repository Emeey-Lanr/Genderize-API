import { CreateProfile, CheckProfile, GetAllProfiles, DeleteProfile } from "../handler/classify";
import { Router} from "express";


export function Classify (app:Router){
  app.post("/profiles", CreateProfile)
  app.get("/profiles/:id",CheckProfile)
  app.get("/profiles", GetAllProfiles)
  app.delete("/profiles/:id", DeleteProfile)

  return app
}
