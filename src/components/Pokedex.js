

export default  function Pokedex( {pokeStats, pokePics} ){
      
    //console.log(recipes ? recipes : "fetching failed")

    
    console.log(pokePics.results)

   

    return(
        <>
        <p>{pokePics.results[0].name}</p>
        <img src='https://pokeapi.co/api/v2/pokemon/4/'></img>
        </>
    );
};


/*

    {recipes && recipes.map((recipe, index) => 
        
        
        <li key={index} ><NavLink to={recipe.name} >{recipe.name}</NavLink></li>  
        
        
        
        )}


*/


