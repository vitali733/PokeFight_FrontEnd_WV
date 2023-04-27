import { NavLink, Outlet } from "react-router-dom"



export default function Recipes({ recipes }){
      
    //console.log(recipes ? recipes : "fetching failed")

    return(
        <>
        <ul>
        {recipes && recipes.map((recipe, index) => 
        
        
        <li key={index} ><NavLink to={recipe.name} >{recipe.name}</NavLink></li>  
        
        
        
        )}
        </ul>

        <Outlet />
        </>
    );
};


