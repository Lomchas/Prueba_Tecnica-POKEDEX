import React, { useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'
import '../Styles/pokemon.css'
import { BiLeftArrow } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const DetallePokeCard = (id) => {
  const navigate = useNavigate()
  const dataPokemon = JSON.parse(localStorage.getItem('detail-Poke'))

  const irAtras = () => {
    navigate(-1)
  }

  useEffect(() => {
    console.log(dataPokemon)
  }, [dataPokemon])


  return (
    <div className='Container-detalle'>
      <div className='container-atras' onClick={irAtras}>
        <BiLeftArrow className='atras'/>
      </div>
      <div className='item-detalle'>
        <h2>{dataPokemon.name}</h2>
        <div className='image-item'>
          <img width='200px' src={dataPokemon?.sprites?.other?.home?.front_default} alt='Pokemon' />
        </div>

        <div className="container-skills">
          <h6>Habilidades</h6>
          <label>
            <p>{dataPokemon ? dataPokemon?.stats[0]?.stat?.name + ":" : "skill%"}</p>
            <ProgressBar
              className="progress hp-progress"
              animated
              now={dataPokemon ? dataPokemon?.stats[0]?.base_stat : "0%"}
              label={dataPokemon ? dataPokemon?.stats[0]?.base_stat + "%" : "0%"}
            />
          </label>

          <label>
            <p>{dataPokemon ? dataPokemon?.stats[1]?.stat?.name + ":" : "skill%"}</p>
            <ProgressBar
              className="progress attack-progress"
              animated
              now={dataPokemon ? dataPokemon?.stats[1]?.base_stat : "0%"}
              label={dataPokemon ? dataPokemon?.stats[1]?.base_stat + "%" : "0%"}
            />
          </label>

          <label>
            <p>{dataPokemon ? dataPokemon?.stats[2]?.stat?.name + ":" : "skill%"}</p>
            <ProgressBar
              className="progress defense-progress"
              animated
              now={dataPokemon ? dataPokemon?.stats[2]?.base_stat : "0%"}
              label={dataPokemon ? dataPokemon?.stats[2]?.base_stat + "%" : "0%"}
            />
          </label>

          <label>
            <p>{dataPokemon ? dataPokemon?.stats[3]?.stat?.name + ":" : "skill%"}</p>
            <ProgressBar
              className="progress speAttack-progress"
              animated
              now={dataPokemon ? dataPokemon?.stats[3]?.base_stat : "0%"}
              label={dataPokemon ? dataPokemon?.stats[3]?.base_stat + "%" : "0%"}
            />
          </label>

          <label>
            <p>{dataPokemon ? dataPokemon?.stats[4]?.stat?.name + ":" : "skill%"}</p>
            <ProgressBar
              className="progress speDefense-progress"
              animated
              now={dataPokemon ? dataPokemon?.stats[4]?.base_stat : "0%"}
              label={dataPokemon ? dataPokemon?.stats[4]?.base_stat + "%" : "0%"}
            />
          </label>
        </div>

        <div className='Container-abilities'>
          <table>
            <th>Poke - Poderes</th>
            <tr>
              <td>Nombre</td>
              {dataPokemon?.abilities?.map((ability, index) => (
                <td key={index}>{ability.ability.name}</td>
              ))}
            </tr>

            <tr>
              <td>Tipo</td>
              {
                dataPokemon?.abilities?.map((element, index) => (
                  <td key={index}>{element.slot}</td>
                ))
              }
            </tr>
            <tr>
              <td>¿Esta oculto?</td>
              {
                dataPokemon?.abilities?.map((element, index) => (
                  <td>{JSON.stringify(element.is_hidden)}</td>
                ))
              }
            </tr>

          </table>
        </div>

      </div>
    </div>
  )
}

export default DetallePokeCard