import express from "express"
import { Classify } from "./routes/classify"


const app = express()
 
const Router = express.Router()

// Routes



app.use("/classify", Classify(Router))

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});


app.listen(4000, (err)=>{
   if (err){
    console.log(err, "yes")
   
   }
    console.log("App is listening at 4000 ")
})