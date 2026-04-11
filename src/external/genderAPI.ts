export async function  GetGender (name:string){
    const response = await fetch(`https://api.genderize.io/?name=${name}`)
    const data = await response.json()
    return data
}