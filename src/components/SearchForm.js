import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const SearchForm = () => {
    const [city, setCity] = useState('')


    return (
        <div>
            <div className='searchVille'>
                <input
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Entrez la ville'
                    className='search'
                />
                <Link to={`ville/${city}`}>
                    <button type='submit'>recherche</button>
                </Link>
            </div>
        </div>
    )
}

export default SearchForm
