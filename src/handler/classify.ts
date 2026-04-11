import { Request, Response } from "express";
import { ClassifyResponse } from "../utilis/response";
import { GetGender } from "../external/genderAPI";

export const ClassifyUser =  async (req:Request, res:Response)=>{
   try {
      // QUERY VALIDATION
       const {name} = req.query
       if (name === undefined || name === ""){
         ClassifyResponse(res, 400, "error", null, "Bad Request")
       }
       
     
      if (typeof (name) !== "string"){
         ClassifyResponse(res, 422, "error", null, "Unprocessable Entity")
      }


      // FETCH API
     const genderData = await GetGender(`${name}`)   
  
     if (genderData.count === 0 && genderData.gender === null){
      ClassifyResponse(res, 422, "error", null, "No prediction available for the provided name")
     }

     let is_confident = false
     if (genderData.count >= 100 && genderData.probability >= 0.7){
     is_confident = true
     }

     console.log(genderData)

     const date = new Date
      
     let data = {
       name,
  "gender": genderData.gender,
  "probability": genderData.probability,
  "sample_size": genderData.count,
  is_confident,
  "processed_at": date.toISOString()
  }
     
  ClassifyResponse(res, 200, "success", data, null)
   
   } catch (error) {
       ClassifyResponse(res, 500, "error", null, "Internal Server Error")
   }
 
}