import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getSinglePokeData from '../utils/getSinglePokeData.js'
import getPokeStats from '../utils/getSinglePokeStats.js'

export default function SinglePokemon(){
    const [pokeData, setPokeData] = useState(null)
    const [pokeStats, setPokeStats] = useState(null)
   
    let { pokeID } = useParams();

    useEffect( () => {
        showSinglePokeData(pokeID)
        showPokeStats(pokeID)
    }, [])

    async function showSinglePokeData(id){
        try{
            let data = await getSinglePokeData(id)
            setPokeData(data)
        } catch(error){
            console.log(error)
        }
    }

    async function showPokeStats(id){
        try{
            let data = await getPokeStats(id)
            setPokeStats(data)
        } catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <img src= {pokeData && pokeData.sprites.front_default} alt={`Pokemon ${pokeData && pokeData.name}`}/>
            <p>id: {pokeData && pokeData.id} </p>
            <p>name: {pokeData && pokeData.name} </p>
            <p>hp: {pokeStats && pokeStats.hp} </p>
            <p>attack: {pokeStats && pokeStats.attack} </p>
            <p>defense: {pokeStats && pokeStats.defense} </p>
            <p>speed: {pokeStats && pokeStats.speed} </p>
            <p>type: {pokeStats && pokeStats.type} </p>
        </>
    );
};

/*
<span>#{e.id} {e.name}</span>

*/