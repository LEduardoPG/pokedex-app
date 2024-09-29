
import React from "react";

function Stats({ label, value }) {

  const normalizedValue = Math.max(0, Math.min(value, 255)); 
  const width = (normalizedValue / 255) * 100; 

  return (
    <div className="stat">
      <span className="stat-info"> {label} </span>
      <span className="stat-percentage">{normalizedValue}</span>
      <div className="stat-bar">
        <div className="stat-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

export default Stats;
