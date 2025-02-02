import { useState } from 'react';
import './Country.css';
const Countrie = ({countrie}) => {
   
    const {name,flags,population} = countrie;
    const [visited,setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }
    visited
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h1>{name.common} </h1>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <button onClick={handleVisited} style={{ marginRight: "10px" }}>{visited?'visited':'Going'}</button>
            {visited ? 'already visited':'not visited'}
            <button style={{ marginLeft: "10px" }}>Mark</button>

        </div>
    );
};

export default Countrie;