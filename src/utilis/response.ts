import { Response } from "express"

export const ClassifyResponse = (res:Response,  statusCode:number,status:string, data:any,  message:string | null)=>{
 res.status(statusCode).json(message != null ? {status, message} :{status, data})

}