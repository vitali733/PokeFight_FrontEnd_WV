import axios from 'axios'

export default async function getPokeData(pokeID){ 
        try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokeID}/`);
        return response.data
      } catch (error) {
        console.log('error while fetching')
        console.error(error);
      } 
}

