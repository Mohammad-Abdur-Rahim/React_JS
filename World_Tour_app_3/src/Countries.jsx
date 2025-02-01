import { useEffect } from "react";
import { useState } from "react";
import Countrie from "./Countrie";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    return (
        <div>
            <h2>Countries : {countries.length} </h2>
            {
                countries.map(c => 
                <Countrie key={countries.cca3} countrie={c}></Countrie> 
            )
            }
        </div>
    );
};

export default Countries;