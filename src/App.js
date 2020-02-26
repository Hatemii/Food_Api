import React,{useEffect,useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "ea3e45dc";
  const APP_KEY = "9b03ca6da51f863cb921a6f581f46be0";

  const [counter,setCounter] = useState(0);

  useEffect(()=> {

  },[]);


  const getRecipes = async () =>{
    const resoponse = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const = data = resoponse.json();
    console.log(data);
  }


  return(
    <div className="App">

      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type = "submit">Search</button>
      </form>

  </div>
  );
}


export default App;
