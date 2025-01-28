import { useState } from "react"

export default function Counter(){

    const [count,setUpdate] = useState(0);

    const handleAdd = ()=>{
        const newCount = count +1;
        setUpdate(newCount);
    }
    const reduce = ()=>{
        const newCount = count -1;
        setUpdate(newCount);
    }

    return (
        <div style={{border:'5px solid yellow', padding:'20px', margin:'10px'}}>
        <h2>Counter : {count} </h2>
        <button onClick={handleAdd} style={{background:'tomato'}}>Add</button>
        <button onClick={reduce} style={{background:'tomato', marginLeft:'4px'}}>Reduce</button>
        </div>
    )
}