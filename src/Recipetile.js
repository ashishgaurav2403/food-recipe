import React from 'react';
import './style.css';


const recipetile = ({recipe}) => {
  return(
recipe["recipe"]["image"].match(/\.(jpg|jpeg|gif|png)$/) !=null && (
<div className='recipeTile'>
<img className="recipeTile_image" onClick={() => window.open(recipe["recipe"]["url"])}  src={recipe["recipe"]["image"]} alt='title-image'/>
<p>{recipe["recipe"]["label"]}</p>

  </div>
)
  )
};

export default recipetile;
 