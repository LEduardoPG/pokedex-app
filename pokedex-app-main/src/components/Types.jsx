import React from "react";

function Types({ types }) {
  return (
    <p className="pokemon-types">
      Types: {types.map((type) => (
        <span key={type.type.name} className={`type ${type.type.name}`}>
          {type.type.name}
        </span>
      ))}
    </p>
  );
}

export default Types;
