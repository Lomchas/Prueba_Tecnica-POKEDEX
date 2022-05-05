import React, { useEffect } from "react";
import "../Styles/pokemon.css";
import {
  actionListarAsincronico,
} from "../Redux/Actions/actionListar";
import { useDispatch, useSelector } from "react-redux";
import Component from "./Component";

const Listar = () => {
  const dispatch = useDispatch();
  const { numPage } = useSelector((store) => store.pokemons)
  const Url = `https://pokeapi.co/api/v2/pokemon/?offset=${numPage}&limit=${26}`


  useEffect(() => {
    dispatch(actionListarAsincronico(Url));
  }, [dispatch, numPage, Url]);
 

  return (
    <div className="container-PokeCards">
      <Component />
    </div>
  );
};

export default Listar;
