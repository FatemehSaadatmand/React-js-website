import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(334);
  const [maxValue, setMaxValue] = useState(884);
  const minLimit = 100;
  const maxLimit = 1000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Prevent overlap
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Prevent overlap
    setMaxValue(value);
  };

  const handleMinThumbChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Prevent overlap
    setMinValue(value);
  };

  const handleMaxThumbChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Prevent overlap
    setMaxValue(value);
  };

  return (
    <div>
      <h3>Price</h3>
          <div className="slider-container">
      {/* Slider Track */}
      <div className="slider-track">
        {/* Red Range */}
        <div
          className="range"
          style={{
            left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
            width: `${((maxValue - minValue) / (maxLimit - minLimit)) * 100}%`,
          }}
        />
        {/* Left Thumb */}
        <input
          type="range"
          className="thumb"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinThumbChange}
        />
        {/* Right Thumb */}
        <input
          type="range"
          className="thumb"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxThumbChange}
        />
      </div>

      {/* Input Fields */}
      <div className="input-container">
        <input
          type="number"
          className="input"
          value={minValue}
          onChange={handleMinChange}
        />
        <span className="separator">-</span>
        <input
          type="number"
          className="input"
          value={maxValue}
          onChange={handleMaxChange}
        />
      </div>
    </div>
    </div>
  );
};

export default RangeSlider;

