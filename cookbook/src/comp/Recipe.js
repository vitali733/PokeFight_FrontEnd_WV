import {useParams} from "react-router-dom";



export default function Recipe({ recipes }){

    let param = useParams();
   
    let filteredRecipe = recipes.filter(recipe => recipe.name === param.name)[0]
    console.log(filteredRecipe)

    return(
        <>
        <h2>{filteredRecipe.name}</h2>
        <img src={filteredRecipe.imgUrl}></img>
       <p>time: {filteredRecipe.time}</p>
       <p>date of creation: {filteredRecipe.creationDate.slice(0,10)}</p>
       <h3>Ingredients</h3>
       <ul>
            {filteredRecipe.ingredients.map(ingredient => <li>{ingredient}</li> )}
       </ul>
       <h3>Instructions</h3>
       <ol>
            {filteredRecipe.instructions.map(instruction => <li>{instruction}</li> )}
       </ol>
       </>

    );
};

/*

*/