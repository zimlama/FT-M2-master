import React from "react";

import "./Card.css";

function Card({ temp_min, temp_max, img_src, name }) {
  return (
    <div className="mainHeader">
        <div className="contenedor-card">
            Weather
            <div className="card">
                <div>
                    City : {name}    
                </div>
                <div className="tempImgWeather">
                    <div>
                        <div>
                            Max : {temp_max}
                        </div>
                        <div>
                            Min : {temp_min}
                        </div>
                    </div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${img_src}@2x.png`} />
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={() => alert(`tu ciudad es ${name}`)}>
                        x
                    </button>
                </div>
                </div>
        </div>
    </div>
    
  );
}

export default Card;
