import axios from 'axios'

export default async function getPokeStats(){ 
    
        console.log('fetching PokemonData from server')
        try {
        const response = await axios.get('http://localhost:8000/pokemon');
        return response.data
      } catch (error) {
        console.log('error while fetching')
        console.error(error);
      } 
}

