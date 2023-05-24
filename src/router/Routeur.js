import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from './NoMatch'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur
