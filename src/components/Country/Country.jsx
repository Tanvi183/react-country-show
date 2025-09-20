import React, { useState } from 'react';

const Country = ({country}) => {
    
    const [isVisited, setVisited] = useState(false);
    
    const handleVisited = () => {
        // setVisited(isVisited ? false : true)
        setVisited(!isVisited);
    }
    
    return (
        <div className={`card ${isVisited && 'visited-country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <h4>Capital : {country.capital.capital}</h4>
            <p>Populartion : {country.population.population}</p>
            <p>Area : {country.area.area} 
                {country.area.area > 300000 ? " (big country)" : " (Small Country)"}
            </p>
  
            <button onClick={handleVisited}>
                {
                    isVisited ? 'Visited' : 'Not Visited'
                }
            </button>
        </div>
    );
};

export default Country;