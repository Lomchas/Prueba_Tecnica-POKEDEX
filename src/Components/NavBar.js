import { getAuth } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import logo from '../Images/logoApp.svg'
import { actionLogoutAsync } from '../Redux/Actions/actionUsers'
import '../Styles/nav.css'
import { HiOutlineLogout } from "react-icons/hi";


const NavBar = () => {
  const dispatch = useDispatch()
  const auth = getAuth()
  const avatar = auth.currentUser.photoURL
  return (
    <div className='container-navBar'>
      <div className='container-logo'>
        <img src={logo} width='150px' alt='logoApp' />
      </div>
      <nav className='nav-item'>
        <div className='card-user'>
          <img src={avatar} width='40px' alt='[*User*]' />
          <h2 className='user-name'>{auth.currentUser.displayName}</h2>
        </div>
        <button type='button' className='btn-logout' onClick={() => {
          dispatch(actionLogoutAsync())
        }}>Cerrar Sesion</button>
        <button type='button' className='btn-logout-icon' onClick={() => {
          dispatch(actionLogoutAsync())
        }}>
          <HiOutlineLogout />
        </button>
      </nav>
    </div>
  )
}

export default NavBar