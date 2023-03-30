import { NavLink, Outlet } from "react-router-dom"



export default function Recipes({ recipes }){
      
    console.log(recipes ? recipes[0].name : "fetching failed")

    return(
        <>
        {recipes && recipes.map((recipe, index) => <NavLink to="recipe" key={index} >{recipe.name}</NavLink> )}
        <Outlet />
        </>
    );
};


