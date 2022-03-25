import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>


      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}





















/*  /////Using Props//////////

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>World Tour !!</h1>
      <h3>Availabe Countries : {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population} ></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Country Name : {props.name}</h2>
      <h4>Population : {props.population}</h4>
    </div>
  )
}

*/
export default App;
