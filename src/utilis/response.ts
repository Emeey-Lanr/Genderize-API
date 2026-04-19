import { Response } from "express"

export const AppResponse = (res:Response,  statusCode:number, info:any | null)=>{
 res.status(statusCode).json(info)

}