
import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Recipes from "./components/Recipes.js";
import Recipe from "./components/Recipe.js";
import useContentful from "./utils/useContentful.js";
import PokeDexSite from './components/PokeDexSite.js'
import PokeFight from './components/PokeFight.js'
import SinglePokemonSite from './components/SinglePokemonSite'

function App() {
  const [recipes, setRecipes] = useState();

  const { getRecipes } = useContentful();

  useEffect(()=>{
    getRecipes().then(response => setRecipes(response))
  },[])
  
  return (
    <>
    <nav>
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="pokedex">Pokedex </NavLink> 
        <NavLink className="navlink" to="pokefight">PokeFight</NavLink> 
        <NavLink className="navlink" to="recipes">Recipes</NavLink >
    </nav>   

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="pokedex" element={ <PokeDexSite /> } ></Route> 
          <Route path="pokedex/:pokeID" element={ <SinglePokemonSite /> } ></Route> 
          <Route path="pokefight" element={ <PokeFight /> } ></Route> 
          { recipes && <Route path="recipes" element={ <Recipes recipes={ recipes }/> } >
             
                <Route path=":name/" element={ <Recipe recipes={ recipes }/> }/>
          </Route>}
        </Routes>
    </>
  );
}

export default App;
