
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Bulbul', 'Alamagir', 'Salman Shah']

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name= "Munna" job="footballer"></Person>
        <Person name= "Masum" job="batpar"></Person>
        
        
      </header>
    </div>
  );
}

function Person(props){
  return(
      <div style={{border: '2px solid yellow',  padding:'5px', margin:'5px',     width:'400px'}}>
          <h3>My Name: {props.name} </h3>
          <p>Profession: {props.job} </p>
      </div>
  )
}

export default App;
