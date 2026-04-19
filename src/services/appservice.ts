;
import { prisma } from "../lib/prisma";
import { API } from "../external/api";
import { Age, Gender, Nationality } from "../schema/schema";

export class Service {
  static async CreateProfile (name:string){
    try {
        const gender:Gender = await API.GetGender(name)
        const nationality:Nationality = await API.GetNationality(name)
        const age:Age = await API.GetAge(name)

        
        // check if user exist
    
        const user = await prisma.profile.findFirst({
            where:{
             name:name
            }
        })


        if (user != null){
            return {error: "Profile already exist", status: 201, data: user}
        }
        //Genderize returns gender: null or count: 0
         if(gender.gender == null || gender.count == 0){
            return {error: "Genderize returned an invalid response", status: 502, data:null}
         }
        
        // Agify returns age null
        if (age.age == null){
            return {error: "Agifyreturned an invalid response", status: 502, data:null}
        }

        // Nationalize returns no country data
         if (nationality.country.length == 0){
            return {error: "Nationalize returned an invalid response", status: 502, data:null}
         }

        let highest = 0
        let country = ""
        nationality.country.map((value, _)=>{
         if (value.probability > highest){
            highest = value.probability
            country = value.country_id
         }
        })

       let  ageGrade =  ""
       if (age.age <= 12){
         ageGrade = "child"
       }else if (age.age <= 19){
         ageGrade = "teenager"
       }else if (age.age <= 59){
         ageGrade = "adult"
       }else{
         ageGrade = "senior"
       }

       const  data = {
            name: name,
            gender:gender.gender,
             gender_probability: gender.probability,
            sample_size:  gender.count,
           age: age.age,
            age_group:  ageGrade,
            country_id: country,
             country_probability: highest
            
        }

        console.log(data)
       const profile = await prisma.profile.create({
           data
       })
  
     return {error: null, status: 201, data: profile}
    } catch (error:any) {
        return  {error: "An error occurred", status: 500, data: null}
    }

  }
}