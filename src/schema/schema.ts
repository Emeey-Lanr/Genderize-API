export type Gender = {
    count: number
  gender:  string
  probability: number
}

export type Nationality = {
  country: {country_id: string
     probability: number}[]
}

export type Age = {
    age: number
}

export type Query = {gender:string, 
   country_id:string, age_group:string, }