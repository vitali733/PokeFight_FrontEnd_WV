import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import getSinglePokeData from '../utils/getPokeData.js'
import './Pokedex.css'

export default function Pokedex(){
    const [pokeData, setPokeData] = useState([])
    const [pageNum, setPageNum] = useState(1)

    const navigate = useNavigate();

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

    function handlePokeClick(e){
        console.log('handlePokeClick executed')
        const pokeName = e.target.parentElement.firstChild.innerText.split(' ')[1]
        console.log('redirecting to: ' +  pokeName  )
        navigate(`/pokedex/${pokeName}`)
        
    }

    async function generatePokedex(page){
        console.log('executing generatePokedex')
        const arr = []
        try{
        for(let i = pokemonPerPage*(page-1)+1 ; i < pokemonPerPage*page; i++){
            let data = await getSinglePokeData(i)
            arr.push(data)
        }
        setPokeData(arr)
        console.log(arr)
        } catch(error){
            console.log(error)
        }
    }
   
    return(
        <>
        <br/>
        <form>
            <input type="text"/>
            <button>search</button>
        </form>
        <br/>
        <div className='pagination'>
            <button disabled={pageNum === 1 ? true : false} onClick={handlePrevBtn}>prev page</button>
            <div>{pageNum}</div>
            <button onClick={handleNextBtn}>next page</button>
        </div>
        <br/>
        <div  className = 'parent-container'>
        {pokeData.map((e, index) =>         
            <div key={index} className = 'poke-container' onClick={handlePokeClick}>
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


