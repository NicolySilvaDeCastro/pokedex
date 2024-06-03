import { useState, useEffect } from "react"

export default function Pokedex(){
    const[id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => { //função assincrona para encontrar dados e conectar ba API
        
        // try{
        //     const response = await fetch(`link API: https://pokeapi.co/api/v2/pokemon/0${id}`)
        //     //crase template string, utilizado para strings que vão mudar de valor no decorrer da renderização
        // const data = await response.json
        // setPokemon(data)

        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemon(data)
        }catch(error){
        console.error('Erro: ', error)
        }
    }

    useEffect(() =>{
        fetchData()
    }, [id])
    //useEffect

       const antesPokemon = () => {
        if(id > 1){
            setId(id - 1)
        }
       
    }
        const nextPokemon = () =>{
            setId(id + 1)
        }


    return(
        <div className="card">
            {pokemon && (
                <div className="pokemon">
                <h1>Pokémon: {pokemon.name}</h1>
                <h3>Peso: {pokemon.weight}g</h3>
                <img src={pokemon.sprites.front_default} alt= "Pokemon"></img>
                <button onClick={nextPokemon}>Próximo</button>
                <button onClick={antesPokemon}>Anterior</button>
                </div>
            )}
        </div>
    )
}