import React, { useState, useEffect } from 'react';
import Card from './Card';

import CardDescription from './CardDescription'; // Importamos el componente de descripción

function Finder() {
  const [busqueda, setBusqueda] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState(''); // Nuevo estado para la descripción
  const [error, setError] = useState(null); // Estado para manejar errores
  const [iniciarBusqueda, setIniciarBusqueda] = useState(false);

  const buscarPokemon = async () => {
    if (!busqueda) return; // No hacer nada si el input está vacío
    setError(null); // Reiniciar el estado de error
    try {
      // datos básicos del Pokémon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`);
      if (!response.ok) throw new Error('Pokémon no encontrado'); // Manejo de errores
      const data = await response.json();
      setPokemonData(data);

      // la descripción del Pokémon
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${busqueda.toLowerCase()}`);
      if (!speciesResponse.ok) throw new Error('Descripción no disponible'); // Manejo de errores
      const speciesData = await speciesResponse.json();

     // Idioma de la descripción
const flavorTextEntry = speciesData.flavor_text_entries.find(
  entry => entry.language.name === 'es'
);

if (flavorTextEntry) {
  setPokemonDescription(flavorTextEntry.flavor_text);
} else {
  // Si no hay descripción en español, buscamos en inglés
  const englishFlavorTextEntry = speciesData.flavor_text_entries.find(
    entry => entry.language.name === 'en'
  );
  
  setPokemonDescription(englishFlavorTextEntry ? englishFlavorTextEntry.flavor_text : 'Descripción no disponible.');
}

    } catch (error) {
      console.error('Error fetching the Pokémon data:', error);
      setPokemonData(null); // Reiniciar los datos si hay un error
      setPokemonDescription(''); // Reiniciar la descripción si hay un error
      setError(error.message); // Establecer el mensaje de error
    }
  };

  // Ejecutar búsqueda cuando se cambie iniciarBusqueda
  useEffect(() => {
    if (iniciarBusqueda) {
      buscarPokemon();
      setIniciarBusqueda(false); // Reiniciar el estado de búsqueda
    }
  }, [iniciarBusqueda]);

  const onClickButton = () => {
    setIniciarBusqueda(true);
  };

  return (
    <>
<label htmlFor="pokemon-search" style={{ fontSize: '30px', fontWeight: 'bold' }}>
  <p>Buscador:</p>
</label>

<input
  type="text"
  id="pokemon-search"
  className="pokemon-search-input"
  onChange={(e) => setBusqueda(e.target.value)}
  placeholder="Escribe el nombre del Pokémon..."
/>
<input
  type="button"
  className="pokemon-search-button"
  value="Buscar"
  onClick={onClickButton}
/>
{error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar el mensaje de error */}
{pokemonData && (
  <>
          <Card pokemonData={pokemonData} description={pokemonDescription}/> 
        </>
      )}
    </>
  );
}

export default Finder;
