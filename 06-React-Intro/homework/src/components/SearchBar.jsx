import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  let {onSearch} = props;
  function handleOnSearch() {
    if(typeof onSearch === 'function') { // para crear una funcionalidad crear una funcion
     const elemento = document.getElementById('search-bar-input');
     onSearch(elemento.value);
    }
   } 
  return (
    <div>
      <input id='search-bar-input'/>
      <button onClick={handleOnSearch} >Agregar</button>
    </div>
  )
};