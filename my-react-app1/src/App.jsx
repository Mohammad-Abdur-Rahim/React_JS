
import './App.css'
import ToDo from './ToDo';
import Player from './Plyers';

function App() {
  const players =['Tammim','Shakib','Musfiq','Mahamudullah','Masrafe'];

  return (
    <>
      <h1> React</h1>
      <Player name={'Md Abdur Rahim'}></Player>

{
  players.map(player=><Player name={player}></Player>)
}


      <Device name='Laptop' price='99'></Device>
      <Device name='Mobile' price='27'></Device>
      <Device name='Watch' price='7'></Device>
     <ToDo todo={{ html: ' All '}} isDone={true}></ToDo> 
     <ToDo todo={{ html: 'Pending' }}isDone={false}></ToDo> 
    
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Developer></Developer>

    </>
  );
}

function Device({ name, price }) {
  console.log(name, price);
  return <h2>This Device :{name} Price is : {price}</h2>
}

function Person() {
  const age = 25;
  let salary = 45000;
  const person = { name: 'Md Abdur Rahim' }
  return (
    <div className='student'>
      <h3>{person.name} React developer with age {age} and salary is : {salary} taka .</h3>


    </div>
  );
}
function Developer() {
  const devoloperstyle = {
    border: '2px solid red',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={devoloperstyle}>
      <h2>React Developer</h2>
      <p>age : 25</p>
      <h5>salary : 45000 taka</h5>

    </div>
  );
}

export default App
