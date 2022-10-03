import React, { useState } from "react";
import "./App.css";
import { Denver, Cairns, Londres } from "./components/data/Data.js";
import Card from "./components/card/Card";
import Cards from "./components/cards/Cards";
import Searchbar from "./components/searchbar/Searchbar"

var ciudades = [Denver, Cairns, Londres];

function App() {
  const [city, setCity] = useState({
    temp_max: "",
    temp_min: "",
    name: "",
  });

  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  }

  return (
    <div className="App">
      <div>
{/* --------- Homework 06-React-Intro --------- INIT */}
{/* --------- Homework 07-React-Estilos --------- INIT */}
       <div>Weather Cities</div>
        <div>
          <Card
            temp_min={Denver.main.temp_min}
            temp_max={Denver.main.temp_max}
            img_src={Denver.weather[0].icon}
            name={Denver.name}
          />
        </div>
        <div>
          {ciudades.map((ciudad) => (
            <Cards
              temp_min={ciudad.main.temp_min}
              temp_max={ciudad.main.temp_max}
              img_src={ciudad.weather[0].icon}
              name={ciudad.name}
              boxes={ciudad.boxes}
            />
          ))}
          <div>
           <Searchbar />
         </div>
        </div>
      </div>
{/* --------- Homework 06-React-Intro --------- END */}
{/* --------- Homework 07-React-Estilos --------- END */}
      <div>
        <ul className="menu">
          <li>Menu</li>
          <li>Ciudades</li>
          <li>Ayuda</li>
        </ul>
      </div>
      

      <div>
        <form>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="ciudad"
            placeholder="ingrese aqui la ciudad"
          />
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="url"
            placeholder="ingrese aqui el url del icono"
          />
          <br />
          <input
            onChange={(e) => handleChange(e)}
            name="temp_min"
            type="text"
            placeholder="ingrese aqui la temp min"
          />
          <br />
          <input
            onChange={(e) => handleChange(e)}
            name="temp_max"
            type="text"
            placeholder="ingrese aqui la temp max"
          />
          <button>Ingresar info</button>
          <div>
            <Card
              temp_min={input.temp_min}
              temp_max={input.temp_max}
              img_src={input.img_src}
              name={input.ciudad}
            />
          </div>
        </form>
      </div>
      

      <div>Footer</div>
    </div>
  );
}

export default App;
