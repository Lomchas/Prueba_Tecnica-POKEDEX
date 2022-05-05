import React, { useEffect } from "react";
import "../Styles/RegisterLogin.css";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import iconBolaPoke from '../Images/iconPokeBola.png'
import { useForm } from "../Hooks/useForm";
import { urlUsers } from "../Helpers/Url";
import { useDispatch, useSelector } from "react-redux";
import { actionFacebookAsync, actionGoogleAsync, actionLoginEmailYPassAsync, actionSaveUser } from "../Redux/Actions/actionUsers";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {users} = useSelector((store) => store.users)
  
  const [values, handleInputChange, reset] = useForm({
    email: '',
    pass: ''
  })
  
  const { email, pass } = values;


 

  const consultar_BD_Users = () => {
    const filter = users.find(user => user?.email === values?.email && user?.password === values?.pass)
    if(filter === undefined) {
      alert('Correo o Contraseña incorrecta')
    }
    else{
      reset()
      alert(`Bienvenido ${filter?.nombre}`)
      navigate('./home')
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    if(values.email.length === 0 || values.pass.length === 0){
      alert('Debes rellenar todos los campos')
    }
    else{
      consultar_BD_Users()
      dispatch(actionLoginEmailYPassAsync(email, pass))
    }
  }

  const onFacebook = () => {
    dispatch(actionFacebookAsync())
  }

  const onGoogle = () =>{
    dispatch(actionGoogleAsync()) 

  }

  useEffect(() => {
    const traer_BD_Users = async () => {
      const res = await fetch(urlUsers)
      const data = await res.json()
      data.map(dates => dispatch(actionSaveUser(dates)))
    }
    traer_BD_Users()
  }, [dispatch])


  return (
    <div className="container-main">
      <div className="Container-Login">
        <div className="container-header-login">
          <h2 className="title-form">Iniciar sesion</h2>
          <img src={iconBolaPoke} width='60px' alt="pokeIcon" />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="emailInput">
            <input
              type="email"
              name="email"
              id="emailInput"
              value={email}
              onChange={handleInputChange}
              placeholder="PokeEmail"
            />
          </label>
          <label htmlFor="passInput">
            <input
              type="password"
              name="pass"
              id="passInput"
              value={pass}
              onChange={handleInputChange}
              placeholder="PokeContraseña"
              autoComplete='none'
            />
          </label>
          <button type="submit" className="btn-submit">
            Iniciar Sesion
          </button>
        </form>
        <div className="container-btns-auth">
          <button type="button" className="btn-auth-google" onClick={onGoogle}>
            <FaGoogle />
            Continuar con Google
          </button>
          <button type="button" className="btn-auth-facebook" onClick={onFacebook}>
            <FaFacebookSquare />
            Continuar con Facebook
          </button>
        </div>
        <Link to='/register' className="forgot-pass">
          ¿Has olvidado tu contraseña?
        </Link>
        <p className="link-go-register">
          ¿Aun no tienes cuenta?{" "}
          <Link className="link" to='/register'>
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
