import { useEffect } from "react";

export default function Recipes({ recipes }){
   
   
    console.log(recipes ? recipes[0].name : "fetching failed")

    return(
        <>
        <h2>here we will display all the recipe-links:</h2>
        {recipes.map(recipe => <p>{recipe.name}</p> )}
        </>
    );
};


/*
<p>{recipes[0]}</p>

*/