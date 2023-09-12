import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountry] = useState([]);

            useEffect(() => {
               fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
               .then(data => setCountries(data));
            }, [])

    const handleVisitedCountries = country =>{
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountry(newVisitedCountry);
    } 
    return (
        <div>
            <div>
                <h1>Visited Countries: {visitedCountries.length}</h1>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3}>{country.name.common}</li>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country => 
                <Country handleVisitedCountries={handleVisitedCountries}
                key={country.cca3} country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;