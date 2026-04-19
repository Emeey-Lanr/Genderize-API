import { Request, Response } from "express";
import { AppResponse } from "../utilis/response";
import { ValidateProfileSchema } from "../utilis/validation";
import { Service } from "../services/appservice";
export const CreateProfile =  async (req:Request, res:Response)=>{
   try {
       const parsed =  ValidateProfileSchema.safeParse(req.body)
      if (!parsed.success){
       AppResponse(res, 400, {status:"error", message:"Invalid request body", })  
      }
      

      const profileCreation =  await Service.CreateProfile(`${req.body.name}`)
      if (profileCreation.error != null){
         
        
         AppResponse(res, profileCreation.status,  profileCreation.data != null ? {status: "success", message:profileCreation.error, data: profileCreation.data} : {status: "error", message:profileCreation.error, })
         return
      }

      AppResponse(res, 201, {status:"success", data: profileCreation.data})
      return
   } catch (error) {
      AppResponse(res, 500, {status:"error", message:"An error occurred", data: null})
       return
   }
}
 
export const CheckProfile = async (req:Request, res:Response)=>{
   try {
      const {id} = req.params
         if (id == null){ 
            AppResponse(res, 400, {status:"error", message:"Invalid request parameters"})
            return
         }

         const getProfile = await Service.GetProfile(id)
         if (getProfile.error != null){
            AppResponse(res, getProfile.status, {status:"error", message:getProfile.error})
            return
         }
         AppResponse(res, 200, {status:"success", data: getProfile.data})
        return
   } catch (error) {
      AppResponse(res, 500, {status:"error", message:"An error occurred", data: null})
       return
   }
}

export const GetAllProfiles = async (req:Request, res:Response)=>{
   try {
      console.log(req.query)
      const {gender, country_id, age_group} = req.query
     
   } catch (error) {
      
   }
}

export const DeleteProfile = (req:Request, res:Response)=>{
   try {
      
   } catch (error) {
      
   }
}