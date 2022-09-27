import React from 'react';

export default function Card(props) {
  // acá va tu código
  
  return <div>
    <button onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div>
      <h2>Min</h2>
      <h2>{(props.min - 273.15).toFixed(0)}</h2>
    </div>
    <div>
      <h2>Max</h2>
      <h2>{(props.max -273.15).toFixed(0)}</h2>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="wheater"></img>
  </div>
};