import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
  const[Countries,setCountires]=useState([])

  useEffect(()=>{

     fetch('https://restcountries.com/v3.1/all')
     .then(res=>res.json())
     .then(data=>setCountires(data))

  },[])
    return (
         
        <div>
      
         <div className='head'>
         <h3>ALL THE COUNTIRES OF THE WORLD</h3>
         </div>
     
          <div className='countries-container'>
          {/* {
            Countries.map(country=>console.log(country))
          } */}
          {

              Countries.map(country=><Country 
                country={country}
                 key={country.cca3}
                ></Country>)
          }
          </div>
        </div>
    );
};

export default Countries;