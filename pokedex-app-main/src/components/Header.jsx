import React from "react";

function Header({ name, id }) {
  return (
    <div className="header-container">
      <h1 className="pokemon-name">{name.toUpperCase()}</h1>
      <h1 className="pokemon-id">#{id}</h1>
    </div>
  );
}

export default Header;
