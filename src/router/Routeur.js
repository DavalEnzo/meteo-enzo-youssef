import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from "../pages/Home";
import WeatherDisplay from "../components/WeatherDisplay";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ville/:ville' element={<WeatherDisplay />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur
