import React from "react";
import "../Styles/RegisterLogin.css";
import iconBolaPoke from "../Images/iconPokeBola.png";
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { actionRegisterAsync } from "../Redux/Actions/actionUsers";
import { urlUsers } from "../Helpers/Url";


const Register = () => {
  const dispatch = useDispatch()
  const [values, handleInputChange, reset] = useForm({
    // id: uuidv4(),
    type: 'USER',
    nombre: '',
    email: '',
    pass1: '',
    pass2: '',
    image: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=200&quality=20'
  })

  // '

  const sendUser = async (type, nombre, email, password, image) => {
    const res = await fetch(urlUsers, {
      method: 'POST',
      body: JSON.stringify({
        type,
        nombre,
        email, 
        password, 
        image
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
        }
    })
    const data = await res.json()
    console.log(data)
  }

  const { type, nombre, email, pass1, pass2, image } = values

  const verificarRegistro = () => {
    if (values.nombre.length === 0 || values.email.length === 0 || values.pass1.length === 0 || values.pass2.length === 0) {
      alert('Debes rellenar todos los campos')
    } else {
      if (values.pass1 !== values.pass2) {
        alert('Las contraseñas no coinciden')
      }
      else if (values.pass1.length <= 5 && values.pass2.length <= 5){
        alert('Las contraseñas deben tener minimo 6 caracteres')
      }
      else {
        reset()
        sendUser(type, nombre, email, pass1, image)
        dispatch(actionRegisterAsync(type, nombre, email, pass1, image))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    verificarRegistro()
    console.log(values)
  }

  return (
    <div className="container-main">
      <div className="Container-register">
        <div className="container-header-register">
          <h2 className="title-form">Registrarte</h2>
          <img src={iconBolaPoke} width="60px" alt="pokeIcon" />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="nameInput">
            <input
              type="text"
              name="nombre"
              id="nameInput"
              placeholder="PokeNombre"
              onChange={handleInputChange}
              value={nombre}
            />
          </label>
          <label htmlFor="emailInput">
            <input
              type="email"
              name="email"
              id="emailInput"
              placeholder="PokeEmail"
              onChange={handleInputChange}
              value={email}
            />
          </label>
          <label htmlFor="pass1Input">
            <input
              type="password"
              name="pass1"
              id="pass1Input"
              placeholder="PokeContraseaña"
              onChange={handleInputChange}
              value={pass1}
              autoComplete='none'
            />
          </label>
          <label htmlFor="pass2Input">
            <input
              type="password"
              name="pass2"
              id="pass2Input"
              placeholder="Vuelva a escribir la PokeContraseaña"
              onChange={handleInputChange}
              value={pass2}
              autoComplete='none'
            />
          </label>

          <button type="submit" className="btn-submit">
            Registrate ya!
          </button>
        </form>
        <p className="link-go-login">
          ¿Ya tienes cuenta?{" "}
          <Link className="link" to='/'>
            Iniciar sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
