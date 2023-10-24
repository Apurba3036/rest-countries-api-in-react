import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country.name)

    const {area,region,population,name,flags}=props.country;
    return (
        <div className='country'> 
            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;