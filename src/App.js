
import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Recipes from "./components/Recipes.js";
import Recipe from "./components/Recipe.js";
import Contact from "./components/Contact.js";
import useContentful from "./components/useContentful.js";


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
        <NavLink className="navlink" to="recipes">Recipes</NavLink >
        <NavLink className="navlink" to="Contact">Contact</NavLink> 
      
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
