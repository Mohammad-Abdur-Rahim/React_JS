
import './App.css'
import Counter from './Counter';

function App() {
function one(){
  alert("Clicked 1")
}
function sum (num){
  alert(num + 5);
}

  return (
    <>
      <h3>React Core Concept 2</h3>
      <button onClick={one}>One</button>
      <button onClick={()=>{  alert("Clicked 2")}}>Two</button>
      <button onClick={()=>sum(3)}>Sum </button>

      <Counter></Counter>
    
    </>
  )
}
export default App
