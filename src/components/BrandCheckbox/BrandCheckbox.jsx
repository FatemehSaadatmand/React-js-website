import React from "react";
import "./BrandCheckbox.css"
const BrandCheckbox = () => {

 return(
    <div>
        <h3 className="brand-title">BRAND</h3>
        <div className="brand-inputs">
        <label className="label">
        <input className="input-radio" type="radio" name="brand" />SAMSUNG
        </label>

        <label className="label">
        <input className="input-radio" type="radio" name="brand" />SONY
        </label> 
        <label className="label">
        <input className="input-radio" type="radio"  name="brand"/>APPLE
        </label>
        </div>
    </div>
 )
};
 export default BrandCheckbox;