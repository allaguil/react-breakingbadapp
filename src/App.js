import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';
import Search from './components/ui/Search';

const App = () => {

  // useState Hook
  const [items, setItems] = useState([]) // Represents the Characters that come from the API
  const [isLoading, setIsLoading] = useState(true) // We want to know if the data is still being fetch
  const [query, setQuery] = useState('') // Represents whatever the name is, what we typed

  // useEffect Hook
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      ) // This represents what we get from axios

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);

    }

    fetchItems();
  }, [query]); // Filter Query - Dependency

  // Return
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;


// App.js is the main file, it imports all the different Components and return them in JSX.

// useState
// items = Represent the characters that come from the API
// setItems = This is the function we use to change the state

// useState([]) = This will have an empty array for the initial default state, but once we make the request in the useEffect Hook then we'll fill this array with the data from the API

// useState(true) = We need to know if the data is being loaded or not, if it is still being fetched then we will display a spinner gif, that's why as default value we are passing a true, that way when the data is already fetched, we will assign the state to false

// useEffect = To make the request we use the useEffect hook, useEffect takes in an arrow function, we are using axios to make our HTTP request.
// El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales: Peticiones de datos, establecimiento de suscripciones y actualizaciones manuales del DOM en componentes de React serían ejemplos de efectos secundarios.



// fetchItems = axios returns a Promise, we are going to use a "async await" function to wait for that Promise, the const "result" represent what we get back from axios, we have to use await b/c axios returns a Promise.

