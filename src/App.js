
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import Recipetile from './Recipetile';
import Footer from './Footer';

const App = () => {
  
  const YOUR_APP_ID= "f78f5246";
  const YOUR_APP_KEY= "8af119eda55073d4ebbaa3fee3922685"
const[recipes, setRecipies]=useState([]);
const[query, setQuery]=useState("");
const[healthLabel, setHealthLabel]=useState("vegetarian");



  
  const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
 // const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  const getRecipieInfo = async () => {
    var result=await Axios.get(url); 
    setRecipies(result.data.hits);
    console.log(recipes);
   // console.log(result.data.hits);
  };
 

const onSubmit = (event) => {
   event.preventDefault();  // this will prevent page from reloading 
   getRecipieInfo();
}


  return (
  <div className='App'>


  
  <h1 onClick={getRecipieInfo}>
  &nbsp;&nbsp;<u>Foodhub🍔</u>
  </h1>
  <form className="appSearch" onSubmit={onSubmit}>
    <input type="text" placeholder ="type the integridients" autoComplete="off" className="app_input" onChange={(event)=> {setQuery(event.target.value)}}/>
   
    <select className="app__healthLabels">

      <option value="vegan" onClick={() => {setHealthLabel("vegan")}}>vegan</option>
      <option value="vegetariann" onClick={() => {setHealthLabel("vegetarian")}}>vegetarian</option>
      <option value="low-suga" onClick={() => {setHealthLabel("low-sugar")}}>low-sugar</option>
      <option value="dairy-free" onClick={() => {setHealthLabel("dairy-free")}}>dairy-free</option>
      <option value="imuno-suppportive" onClick={() => {setHealthLabel("imuno-suppportive")}}>immuno-suppportive</option>
      <option value="wheat-free" onClick={() => {setHealthLabel("wheat-free")}}>wheat-free</option>
    </select>

  <input type="submit" value="Get Recipe" className='app__submit'/>
  </form>

  <div className='appRecipes'>

{recipes.map((recipe) => {
  return <Recipetile recipe={recipe}/>
}
)}

  </div>

  
<Footer/>


  </div>
  )
}

export default App;
