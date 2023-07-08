
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Bulbul', 'Alamagir', 'Salman Shah']
  const products = [
    {name:'Photoshop', price:'$12.00'},
    {name:'Illustrator', price:'$18.00'},
    {name:'Oracle SQL  Database', price:'$30.00'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Product product={products[0]}  ></Product>
        <Product product={products[1]}  ></Product>
        <Product product={products[2]}  ></Product>
        <Person name= "Munna" job="footballer"></Person>
        <Person name= "Masum" job="batpar"></Person>
        
        
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float:'left',
    margin:'5px',

  }

  const {name, price} = props.product
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button className='btn btn-success'>Buy Now</button>
    </div>
  )
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
