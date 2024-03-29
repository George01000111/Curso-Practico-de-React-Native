import React,{useState,useEffect} from 'react'
import { SafeAreaView} from 'react-native'
import {getPokemonApi,getPokemonDetailsByUrlApi} from "../api/pokemon"
import PokemonList from '../components/PokemonList'

export default function Pokedex() {

    const [pokemons, setPokemons] = useState([])
     const [nextUrl, setNextUrl] = useState(null)



    useEffect(()=>{
    
    (async ()=>{
    await loadPokemons();
    })()

    },[])


 const loadPokemons = async () =>{
    
    try {
        const response = await getPokemonApi(nextUrl);
        console.log('COUNT ' + response.count)
        setNextUrl(response.next)  
        



        const pokemonArray=[];

       for await (const pokemon of response.results){
           console.log(pokemon.url)
           const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
           
           pokemonArray.push({
               id:pokemonDetails.id,
               name:pokemonDetails.name,
               type:pokemonDetails.types[0].type.name,
               order:pokemonDetails.order,
               image:pokemonDetails.sprites.other['official-artwork'].front_default
           })

       }   

        setPokemons([...pokemons,...pokemonArray]);

    } catch (error) {
        console.error(error)
    }
 }


    return (
        <SafeAreaView>
            <PokemonList 
            pokemons={pokemons} 
            loadPokemons={loadPokemons}
            isNext={nextUrl} 
            />
        </SafeAreaView>
    )
}
