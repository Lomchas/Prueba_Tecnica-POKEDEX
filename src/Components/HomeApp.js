import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../Styles/home.css";
import { BiSearchAlt } from "react-icons/bi";
import Listar from "./Listar";
import { useForm } from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { actionSearchingBar } from "../Redux/Actions/actionListar";
import PokeCards from "./PokeCards";
import { Paginado } from "../Helpers/Url";

const HomeApp = () => {
    const dispatch = useDispatch();
    const [isSearching, setIsSearching] = useState(false)
    const [pokemonBuscado, setPokemonBuscado] = useState([])
    const [values, handleInputChange] = useForm({
        searching: "",
    });

    const { searching } = values;

    const buscar = (name) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(resp => resp.json())
            .then(data => {
                setPokemonBuscado(data)
                setIsSearching(true)
            })
            .then(data => console.log(data))
            .catch((err) => alert(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searching === '') {
            setIsSearching(false)
            setPokemonBuscado([])
        } else {
            dispatch(actionSearchingBar(searching));
            buscar(searching)
        }

    };

    useEffect(() => {
        console.log(pokemonBuscado)
    }, [pokemonBuscado])

    useEffect(() => {
        
    }, [])
    

    return (
        

        <div className="container-home" >
            <NavBar />
            <div className="search-bar" >
                <form onSubmit={handleSubmit} >
                    <label htmlFor="inputSearch" >
                        <input type="text"
                            name="searching"
                            value={searching}
                            id="inputSearch"
                            onChange={handleInputChange}
                            placeholder="Buscar Pokemon por nombre especifico..." />
                        <button type="submit" >
                            <BiSearchAlt />
                        </button>
                    </label>
                </form>
            </div>

            <Paginado />
            {
                isSearching === true ?

                    <div className="container-busqueda">
                        {
                            pokemonBuscado.length === undefined ?

                                <PokeCards key={pokemonBuscado?.id} data={pokemonBuscado} />
                                :
                                ''
                        }
                    </div>
                    :

                    <div className="container-cards" >
                        <Listar filter={values} />
                    </div>
            }

        </div>
    );
};

export default HomeApp;