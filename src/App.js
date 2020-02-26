import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "ea3e45dc";
  const APP_KEY = "9b03ca6da51f863cb921a6f581f46be0";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return(
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}


export default App;
