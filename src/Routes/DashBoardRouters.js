import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DetallePokeCard from '../Components/DetallePokeCard'
import HomeApp from '../Components/HomeApp'

const DashBoardRouters = () => {
    return (
        <Routes>
            <Route path='/home' element={<HomeApp />} />
            <Route path='/detail/:name' element={<DetallePokeCard/>}/>
            <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
    )
}

export default DashBoardRouters