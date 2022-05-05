import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiCodeforces } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const PokeCards = ({ data }) => {
  const navigate = useNavigate() 
  const capturarCard = (pokemon) => {
    const enviable = JSON.stringify(pokemon)
    localStorage.setItem('detail-Poke', enviable)
  };

  return (
    <Link className="card-item" to={`/detail/${data ? data.name : undefined}`} onClick={()=>{capturarCard(data? data : '')}}>
        <div className="card-img">
          <img
            width="400px"
            src={data?.sprites?.other?.home?.front_default}
            alt="pokemon"
          />
        </div>
        <div className="card-info">
          <p className="poke-name">{data ? data.name : "nombre"}</p>

          <div key={data?.id} className="container-peso">
            <p>{`${data ? data.weight + "kg" : "0kg"}`}</p>
          </div>
          <div className="container-types">
            {data.types.map((type, index) => {
              switch (type.type.name) {
                case "grass":
                  return (
                    <p key={index} className="type tierra">
                      {type?.type?.name}
                    </p>
                  );
                case "poison":
                  return (
                    <p key={index} className="type poison">
                      {type?.type?.name}
                    </p>
                  );
                case "fire":
                  return (
                    <p key={index} className="type fire">
                      {type?.type?.name}
                    </p>
                  );
                case "flying":
                  return (
                    <p key={index} className="type fly">
                      {type.type.name}
                    </p>
                  );
                case "water":
                  return (
                    <p key={index} className="type water">
                      {type.type.name}
                    </p>
                  );
                case "bug":
                  return (
                    <p key={index} className="type bug">
                      {type.type.name}
                    </p>
                  );
                case "normal":
                  return (
                    <p key={index} className="type normal">
                      {type.type.name}
                    </p>
                  );
                case "electric":
                  return (
                    <p key={index} className="type electric">
                      {type.type.name}
                    </p>
                  );
                default:
                  return (
                    <p key={index} className="type">
                      {type?.type?.name}
                    </p>
                  );
              }
            })}
          </div>
          <div className="container-evolutions">
            {

            }
          </div>
          <div className="container-place">
            <button type="button" onClick={() => {
              capturarCard(data? data : '')
              navigate(`/detail/${data ? data.name : undefined}`)
            }}>
              <SiCodeforces className="icon-skills" />
            </button>
            <p>{data.id}</p>
          </div>
        </div>
    </Link>
  );
};

export default PokeCards;
