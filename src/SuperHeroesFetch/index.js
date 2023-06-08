import axios from "axios";

const superHeroesFetch = {
    getSuperHeroesByName: async (heroName) => {
        try {
            const response = await axios.get(`http://localhost:4000/hero/name?heroName=${heroName}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default superHeroesFetch;