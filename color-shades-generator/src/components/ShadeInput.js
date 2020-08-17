import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <div className="emojis">Color Shades</div>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        value={color}
        className="shade-input"
        placeholder="type any colour !!!"
      />
      <div className="emojis">🎨🎨🎨🎨🎨</div>
    </div>
  );
};

export default ShadeInput;
