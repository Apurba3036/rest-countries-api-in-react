
import './App.css';

import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
           
    
    </div>
  );
}


// function Loadcountires(){
//   const [countries,setCountires]= useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data => setCountires(data))

//   },[])

// return(

//     <div>
//       <h1>Vsisting Every Country of the World</h1>
//       <h3>Available countries:{ countries.length}</h3>

//       {

//          countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )

//   function Country(props){
   
//     return(

//       <div>
//         <h3>Name: {props.name}</h3>
//         <p>Population: {props.population}</p>
//       </div>
//     )

//   }

// }

export default App;
