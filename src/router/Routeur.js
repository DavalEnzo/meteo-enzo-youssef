import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from "../pages/Home";
import MeteoVille from "../pages/MeteoVille";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ville/:ville' element={<MeteoVille />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur
