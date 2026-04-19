import express, {Express} from "express"
import cors from "cors"
 

export const AppMiddleWare = (app:Express) =>{
  app.use(cors())
  app.use(express.json())
}