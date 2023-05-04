import axios from 'axios'

export default async function getPokeStats(pokeID){ 
        try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
        console.log(response.data)
        const statObj = { 
            "hp" : response.data.stats[0].base_stat,
            "attack" : response.data.stats[1].base_stat,
            "defense" : response.data.stats[2].base_stat,
            "speed" : response.data.stats[5].base_stat,
            "type" : response.data.types[0].type.name
        }
        return statObj
      } catch (error) {
        console.error(error);
      } 
}




