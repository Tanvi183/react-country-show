import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'


// const countriesPormise = fetch('https://openapi.programming-hero.com/api/all')
// .then(res => res.json());

const fetchCountries = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  return res.json();
}

function App() {

  const countriesPormise = fetchCountries();

  return (
    <>
      <Suspense fallback={<h3>Countries Are Loading....</h3>}>
        <Countries countriesPormise={countriesPormise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
