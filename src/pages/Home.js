import React from 'react';
import SearchForm from '../components/SearchForm';
import '../css/styles.css';

function Home() {
  return (
    <div className='container-box'>
        <div>
      <h1>recherche :</h1>
    <SearchForm/>
    </div>
    </div>
  );
}

export default Home;
