import React from "react";

function CardImg({ imageUrl, name }) {
  return (
    <div className="image-container">
      <img
        src={imageUrl}
        alt={name}
        className="pokemon-image"
      />
    </div>
  );
}

export default CardImg;

