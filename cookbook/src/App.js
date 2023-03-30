
import React from 'react';
import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import Home from './comp/Home';
import RecipeList from "./comp/RecipeList.js";
import Recipies from "./comp/Recipies.js";
import Contact from "./comp/Contact.js";


function App() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="recipies">Recipies</NavLink></li>
        <li><NavLink to="Contact">Contact</NavLink></li>
      </ul>
    </nav>   


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="recipies" element={<Recipies/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
    </>
  );
}

export default App;
