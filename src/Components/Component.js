import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokeCards from "./PokeCards";

const Component = () => {
  //   const pokemons = store.getState()?.pokemons?.results[0];
  //   console.log(pokemons);
  const [pokemonsAll, setPokemonsAll] = useState([]);
  const { results } = useSelector((store) => store.pokemons);

  useEffect(() => {
    const traerPokemons = () => {
        for (let i = 0; i < results.length; i++) {
          setPokemonsAll([])
          axios.get(results[i].url).then((res) => {
            setPokemonsAll((pokemonsAll) => [...pokemonsAll, res.data]);
          });
        }}
      
    traerPokemons();
  }, [results]);



  return (
    <div className="container-PokeCards">
      {(pokemonsAll)
      ? pokemonsAll.map((pokemon, index) => (
        <PokeCards key={index} data={pokemon} />
      ))
    : <h1>Cargando...</h1>
    }
    </div>
  );
};

export default Component;
