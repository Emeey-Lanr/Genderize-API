import express, {Request, Response} from "express"
import { AppMiddleWare } from "./middleware/appmiddleware"
import { AppRouter } from "./routes/router"
import "dotenv/config"

const app = express()


AppMiddleWare(app)
AppRouter(app)


app.post("/yes", (req:Request, res:Response)=>{
   console.log(req)
})

app.listen(`${process.env.PORT}`, (err)=>{
   if (err){
    console.log(err, "yes")
   
   }
  console.log("App starting at:",process.env.PORT)
})
