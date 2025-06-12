import { useEffect, useState } from "react";
import "../style/pokeStyle.css";

export const Pokemon = () =>{
    const [apiData,setApiData] = useState(null);

    const fetchPokemon =()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((res)=>res.json())
        .then((data)=>setApiData(data))
        .catch((error)=>console.log(error))
    }
    //todo useEffect hooks
    useEffect(()=>{
        fetchPokemon()
    },[])
    
    console.log(apiData);

    if(apiData){
          return (
      <section className="container">
        <header>
            <h1>Lets catch pokemon</h1>
        </header>
        <ul className="card-demo">
            <li className="pokemon-card">
                <figure>
                    <img src={apiData.sprites.other['official-artwork'].front_default} alt={apiData.name} />
                </figure>
                <h1>{apiData.name}</h1>
            </li>
        </ul>
      </section>
    );
    }
}