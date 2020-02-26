import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const App_Id = "ea3e45dc";
  const App_Key = "9b03ca6da51f863cb921a6f581f46be0";
  const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";


  return(
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}


export default App;
