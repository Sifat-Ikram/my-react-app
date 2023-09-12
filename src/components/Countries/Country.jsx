import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries}) => {
    console.log(country);
    const {name, flags, capital, continents, population, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    
    const newVisitedCountries = () => {
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h3>Country Code: {cca3}</h3>
            <h2>{name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>{name?.common} is a country, {capital} is its capital, it is situated in {continents}. There are {population} people lives here.</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={newVisitedCountries}>Mark Visited</button>
            {visited ? 'I have visited here' : 'I want to visit here'}
        </div>
    );
};

export default Country;