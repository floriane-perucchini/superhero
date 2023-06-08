import axios from "axios";
import "dotenv/config";

const superHeroesFetch = {
    getSuperHeroesByName: async () => {
        const response = await axios.get(`${process.env.API_URL}${process.env.ACCES_TOKEN}/superheroes`);
        return response.data;
    }
}

export default superHeroesFetch;