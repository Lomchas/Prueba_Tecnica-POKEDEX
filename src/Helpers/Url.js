import { useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { actionChangePage } from "../Redux/Actions/actionListar";
import '../Styles/paginado.css'

export const Paginado = () => {
    const dispatch = useDispatch()
    let [numeroPagina, setnumeroPagina] = useState(0)
    let [counterPage, setCounterPage] = useState(1)

    const nextPage = () => {
        setnumeroPagina(numeroPagina + 26)
        fixCounterIncrement()
    }
    const PreviousPage = () => {
        setnumeroPagina(numeroPagina <= 0 ? numeroPagina = 0 : numeroPagina - 26)
        fixCounterDecrement()

    }


    const fixCounterIncrement = () => {
        setCounterPage(counterPage = counterPage + 1)
    }

    const fixCounterDecrement = () => {
        setCounterPage(counterPage <= 1 ? counterPage = 1 : counterPage - 1)
    }

    useEffect(() => {
        const renderizarEstado = () => {
            dispatch(actionChangePage(numeroPagina))
        }
        renderizarEstado()
    }, [numeroPagina, dispatch])


    return (
        <div className="container-paginado">
            <div className="container-flechas">
                <div className="flecha-izquierda" onClick={PreviousPage}>
                    <BiLeftArrow />
                </div>
                <div className="numero-pagina">
                    <p>Pagina: {''}</p>
                    <span>{ counterPage }</span>
                </div>
                <div className="flecha-derecha" onClick={nextPage}>
                    <BiRightArrow />
                </div>
            </div>
        </div>
    )
}


let offsetNumber = 0;
let limitNumber = 26;
const urlUsers = 'https://users-poke-dex.herokuapp.com/usersApp/'
export const nombreBusqueda = '';


export { limitNumber, offsetNumber, urlUsers }
