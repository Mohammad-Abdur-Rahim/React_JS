import { useState } from 'react';
import './Country.css';
const Countrie = ({countrie}) => {
   
    const {name,flags,population} = countrie;
    const [visited,setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h1>{name.common} </h1>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <button onClick={handleVisited}>{visited?'visited':'Going'}</button>
            {visited ? 'already visited':'not visited'}
        </div>
    );
};

export default Countrie;