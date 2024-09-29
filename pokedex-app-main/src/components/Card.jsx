import React from "react";
import CardImg from "./CardImg"; 
import Header from "./Header"; 
import Types from "./Types"; 
import BaseStats from "./BaseStats"; 
import CardInfo from "./CardInfo"; 
import CardDescription from "./CardDescription"; 

function Card({ pokemonData, description }) { 
  if (!pokemonData) {
    return <p></p>;
  }

  const typeColors = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A98FF3',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#706b52',
    ghost: '#505a61',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#F0B6BC',
    normal: '#A8A878',
  };

  // Determinar el color de fondo según el tipo del Pokémon
  const primaryType = pokemonData.types[0].type.name;
  const backgroundColor = typeColors[primaryType];

  // Convertir peso y altura a las unidades deseadas
  const weightInKg = (pokemonData.weight / 10).toFixed(1);
  const heightInCm = (pokemonData.height * 10).toFixed(1);

  return (
    <div className="card pokewhite" style={{ backgroundColor }}>
      <CardImg imageUrl={pokemonData.sprites.front_default} name={pokemonData.name} />
      
      <div className="poke-info">
        <div className="pokemon-details">
          <Header name={pokemonData.name} id={pokemonData.id} />
          <CardDescription description={description} />
          <Types types={pokemonData.types} />
          <CardInfo weight={weightInKg} height={heightInCm} />
          <BaseStats stats={pokemonData.stats} />
        </div>
      </div>
    </div>
  );
}

export default Card;
