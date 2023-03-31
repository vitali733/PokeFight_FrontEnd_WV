
import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import Home from './comp/Home';
import Recipes from "./comp/Recipes.js";
import Recipe from "./comp/Recipe.js";
import Contact from "./comp/Contact.js";
import useContentful from "./comp/useContentful.js";


function App() {
  const [recipes, setRecipes] = useState();
  const { getRecipes } = useContentful();

  useEffect(()=>{
    getRecipes().then(response => setRecipes(response))
  },[])
  
  return (
    <>
    <nav>
      
        <NavLink to="/">Home</NavLink> | 
        <NavLink to="recipes">Recipes</NavLink > | 
        <NavLink to="Contact">Contact</NavLink> 
      
    </nav>   

        <Routes>
          <Route path="/" element={<Home/>}/>
          {recipes && <Route path="recipes" element={<Recipes recipes={ recipes }/>} >
             
                <Route path=":name" element={ <Recipe recipes={ recipes }/> }/>
            
          </Route>}
          <Route path="contact" element={<Contact/>} />
        </Routes>
    </>
  );
}

export default App;
