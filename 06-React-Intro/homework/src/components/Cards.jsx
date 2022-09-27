import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div>
    {props?.cities?.map(
      (p) =>(
      <Card 
      max={p.main.temp_max}
      min={p.main.temp_min}
      name={p.name}
      img={p.weather[0].icon}
      onClose={() => alert(p.name)}
      />)   
    )
    }
  </div>
  )
};