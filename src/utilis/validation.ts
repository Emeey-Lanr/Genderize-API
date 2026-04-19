import {z} from "zod"

export const ValidateProfileSchema = z.object({
    name:z.string().min(1)
})