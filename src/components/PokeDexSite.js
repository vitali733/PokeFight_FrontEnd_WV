import Pokedex from "./Pokedex.js";
import { useNavigate } from "react-router-dom"

export default function PokeDexSite({  }){

    const navigate = useNavigate();
      
    function handlePokeClick(e){
        console.log('handlePokeClick executed')
        const pokeID = e.target.parentElement.firstChild.innerText.split(' ')[0].slice(1)
        console.log('redirecting to pokeID: ' +  pokeID  )
        navigate(`/pokedex/${pokeID}`)
    }

    return(
        <>
        <h1>Pokedex</h1>      
        <Pokedex onClick={handlePokeClick}/>
        </>
    );
};


