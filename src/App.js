
import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Recipes from "./components/Recipes.js";
import Recipe from "./components/Recipe.js";
import Contact from "./components/Contact.js";
import useContentful from "./utils/useContentful.js";
import Pokedex from './components/Pokedex.js'
import getPokeStats from './utils/getPokeStats.js'
import getPokePics from './utils/getPokePics.js'


function App() {
  const [recipes, setRecipes] = useState();
  const [pokeStats, setPokeStats] = useState(); 
  const [pokePics, setPokePics] = useState();

  const { getRecipes } = useContentful();


  useEffect(()=>{
    getRecipes().then(response => setRecipes(response))
    getPokeStats().then(response => setPokeStats(response))
    getPokePics().then(response => setPokePics(response))
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
          { pokeStats && <Route path="pokedex" element={ <Pokedex pokeStats = {pokeStats} pokePics = {pokePics} /> } ></Route> }
          { recipes && <Route path="recipes" element={ <Recipes recipes={ recipes }/> } >
             
                <Route path=":name" element={ <Recipe recipes={ recipes }/> }/>
            
          </Route>}
          <Route path="contact" element={<Contact/>} />
        </Routes>
    </>
  );
}

export default App;
