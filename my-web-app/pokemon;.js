pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon/gengar")
    .then(response => response.json())
    .then(data => {

     const Nombre = data.name[0].toUpperCase() + data.name.slice(1);
     const Habilidades = data.abilities.map(abilityInfo => abilityInfo.ability.name);
     const Tipos = data.types.map(typeInfo => typeInfo.type.name);
     const Stats = data.stats.map(statInfo => statInfo.stat.name);

     console.log(" Name: ",Nombre);
     console.log(" Moves: ",Habilidades);
     console.log(" Tipo: ",Tipos);
     console.log(" Stats: ",Stats);

    })
    .catch(error => {
        console.error('Error:', error);
    });  
}
