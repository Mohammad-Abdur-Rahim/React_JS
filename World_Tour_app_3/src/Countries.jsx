import { useEffect } from "react";
import { useState } from "react";
import Countrie from "./Countrie";
import './Container.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [flags , setFlag] = useState([]);
    const visitedFlag =(flag)=>{
        const newFlag = [... flags, flag]
        setFlag(newFlag);
    };

    const [mark,setMark] = useState([]);
    const handleMark =(country) => {
        const newMark =[...mark,country];
        setMark(newMark);
    }
    ;
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h3>Country : {countries.length}</h3>

             {/* Visited country  */}
           
              
          <div>
          <h5>Visited Country :{mark.length}</h5>
          <ul>
        {
            mark.map(country => <li key={countries.cca3}>{country.name.common}</li> )
        }
          </ul>
          </div>
          <div className="flag_container">
          {
              flags.map((flag,idx) => <img key={idx} src={flag} /> )
          }
       </div>
       {/* display country  */}
        <div className="container">
            {
                countries.map((c,idx) => 
                <Countrie handleMark={handleMark} visitedFlag={visitedFlag}
                 key={idx} countrie={c}></Countrie> 
            )
            }
        </div>
        </div>
    );
};

export default Countries;