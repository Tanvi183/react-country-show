import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPormise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log('handle vistied countries clicked', country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const countriesData = use(countriesPormise);
    const countries = countriesData.countries;
    // console.log(countries);
    
    return (
        <div>
            <h1>Show All Country : {countries.length}</h1>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        country={country} 
                        key={country.cca3.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;