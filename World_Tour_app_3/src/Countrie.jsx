import { useState } from 'react';
import './Country.css';
const Countrie = ({countrie,handleMark,visitedFlag}) => {
   
    const {name,flags,population} = countrie;
    const [visited,setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h1>{name.common} </h1>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <button onClick={handleVisited} style={{ marginRight: "10px" }}>{visited?'visited':'Going'}</button>
            {visited ? 'already visited':'not visited'}
            <button onClick={()=>handleMark(countrie)} style={{ marginLeft: "10px" }}>Mark</button>
            <br />
            <button onClick={()=>visitedFlag(countrie.flags.png)}>Add Flag</button>

        </div>
    );
};

export default Countrie;