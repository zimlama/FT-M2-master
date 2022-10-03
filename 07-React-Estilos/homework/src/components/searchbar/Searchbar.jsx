import React from "react";

import "./Searchbar.css";

function Searchbar(){
    return (
    <div>
        <div className="box-searchBar">
            <div id="leftbox-Searchbar">
                <input type="text"
                    placeholder="City..."
                />
            </div>
            <div id="rightbox-Searchbar">
                <button className="btn-Searchbar">Search</button>
            </div>
        </div>
    </div>
    )

}

export default Searchbar;