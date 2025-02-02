import { useEffect } from "react";
import { useState } from "react";
import Countrie from "./Countrie";
import './Container.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    return (
        <div>
            <h3>Country : {countries.length}</h3>
          <div>
          <h5>Visited Country :</h5>
          <ul>
            
          </ul>
          </div>
       
        <div className="container">
            {
                countries.map(c => 
                <Countrie key={countries.cca3} countrie={c}></Countrie> 
            )
            }
        </div>
        </div>
    );
};

export default Countries;