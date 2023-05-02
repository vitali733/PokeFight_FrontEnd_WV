
import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Recipes from "./components/Recipes.js";
import Recipe from "./components/Recipe.js";
import Contact from "./components/Contact.js";
import useContentful from "./utils/useContentful.js";
import Pokedex from './components/Pokedex.js'
import SinglePokemon from './components/SinglePokemon'

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
        <NavLink className="navlink" to="pokedex">Pokedex</NavLink> 
        <NavLink className="navlink" to="recipes">Recipes</NavLink >
        <NavLink className="navlink" to="Contact">Contact</NavLink> 
    </nav>   

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="pokedex" element={ <Pokedex /> } ></Route> 
          { recipes && <Route path="recipes" element={ <Recipes recipes={ recipes }/> } >
             
                <Route path=":name" element={ <Recipe recipes={ recipes }/> }/>
            
          </Route>}
          <Route path="contact" element={<Contact/>} />
          <Route path="pokedex/:pokeName" element={ <SinglePokemon /> } ></Route> 
        </Routes>
    </>
  );
}

export default App;
