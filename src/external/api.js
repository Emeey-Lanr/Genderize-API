export class API {
    static async GetGender(name) {
        const response = await fetch(`https://api.genderize.io/?name=${name}`);
        const data = await response.json();
        return data;
    }
    static async GetAge(name) {
        const response = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await response.json();
        return data;
    }
    static async GetNationality(name) {
        const response = await fetch(`https://api.nationalize.io/?name=${name}`);
        const data = await response.json();
        return data;
    }
}
