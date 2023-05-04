import { useEffect, useState } from 'react';
import getSinglePokeData from '../utils/getSinglePokeData.js'
import './Pokedex.css'

export default function Pokedex(){
    const [pokeData, setPokeData] = useState([])
    const [pageNum, setPageNum] = useState(1)

    const pokemonPerPage = 50
          
    useEffect( () => {
        generatePokedex(pageNum) 
    }, [])

    function handleNextBtn(){
        console.log('executing handleNextBtn')
        setPageNum(pageNum + 1)
        generatePokedex(pageNum + 1) 
    }

    function handlePrevBtn(){
        setPageNum(pageNum - 1)
        generatePokedex(pageNum - 1) 
    }

    async function generatePokedex(page){
        const arr = []
        try{
        for(let i = pokemonPerPage*(page-1)+1 ; i < pokemonPerPage*page; i++){
            let data = await getSinglePokeData(i)
            arr.push(data)
        }
        setPokeData(arr)
        } catch(error){
            console.log(error)
        }
    }
   
    return(
        <>
        <br/>
        <div className='pagination'>
            <button disabled={pageNum === 1 ? true : false} onClick={handlePrevBtn}>prev page</button>
            <div>{pageNum}</div>
            <button onClick={handleNextBtn}>next page</button>
        </div>
        <br/>
        <div  className = 'parent-container'>
        {pokeData.map((e, index) =>         
            <div key={index} className = 'poke-container' >
                <span>#{e.id} {e.name}</span>
                <img src= {e.sprites.front_default} alt={`Pokemon ${e.name}`}/>
            </div>
        )}
        </div>
        <br/>
        <div className='pagination'>
            <button disabled={pageNum === 1 ? true : false} onClick={handlePrevBtn}>prev page</button>
            <div>{pageNum}</div>
            <button onClick={handleNextBtn}>next page</button>
        </div>
        </>
    );
};


/*


*/


