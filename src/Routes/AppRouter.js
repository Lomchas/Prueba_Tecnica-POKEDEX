import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashBoardRouters from "./DashBoardRouters";
import PrivateRouters from "./PrivateRouters";
import PublicRouters from "./PublicRouters";
import iconLoader from '../Images/loaderIcon.gif'
import '../Styles/Index.css'

const AppRouter = () => {

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setTimeout(() => {
        setChecking(false)
      }, 1000);
    })
  }, [setChecking, setIsLoggedIn])



  if (checking) {
    return (
      <div className="container-loader">
        <img src={iconLoader} alt='cargando...' />
        <h1>Cargando...</h1>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <PublicRouters isAuth={isLoggedIn}>
              <Login />
          </PublicRouters>} />

        <Route path='/register' element={
          <PublicRouters isAuth={isLoggedIn}>
            <Register />
          </PublicRouters>
        } />


        <Route path="/*" element={
          <PrivateRouters isAuth={isLoggedIn} >
            <DashBoardRouters />
          </PrivateRouters>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
