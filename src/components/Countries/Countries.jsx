import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPormise}) => {
    const countriesData = use(countriesPormise);
    const countries = countriesData.countries;
    // console.log(countries);
    
    return (
        <div>
            <h1>Show All Country : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country} key={country.cca3.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;