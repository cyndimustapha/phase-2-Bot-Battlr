// SortBar.js
import React from "react";

const SortBar = ({ handleSort }) => {
  return (
    <div className="container mt-4 mb-4">
      <h3>Sort by:</h3>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleSort("health")}
        >
          Health
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleSort("damage")}
        >
          Damage
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleSort("armor")}
        >
          Armor
        </button>
      </div>
    </div>
  );
};

export default SortBar;
