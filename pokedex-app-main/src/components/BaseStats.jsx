import React from "react";
import Stats from "./Stats/Stats"; // Asegúrate de importar el componente Stats

function BaseStats({ stats }) {
  return (
    <div>
      <p className="base-stats-title">Base Stats:</p>
      {stats.map((stat, index) => (
        <Stats key={index} label={stat.stat.name.toUpperCase()} value={stat.base_stat} />
      ))}
    </div>
  );
}

export default BaseStats;
