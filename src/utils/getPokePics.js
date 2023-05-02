import axios from 'axios'

export default async function getPokePics(){ 
        console.log('fetching PokemonData from server')
        try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10');
        return response.data
      } catch (error) {
        console.log('error while fetching')
        console.error(error);
      } 
}

