import React from "react";
import "./BrandCheckbox.css"
const BrandCheckbox = () => {

 return(
    <div>
        <h3>Brand</h3>
        <div className="brand-inputs">
        <label>
        <input type="radio" name="brand" />SAMSUNG
        </label>

        <label>
        <input type="radio" name="brand" />SONY
        </label> 
        <label>
        <input type="radio"  name="brand"/>APPLE
        </label>
        </div>
    </div>
 )
};
 export default BrandCheckbox;