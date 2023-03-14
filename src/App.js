import React, { useState } from 'react';
import './style.css';

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png

const pokemons = [
  {
    dexId: 1,
    name: 'Bulbasaur',
  },
  {
    dexId: 2,
    name: 'Ivysaur',
  },
  {
    dexId: 3,
    name: 'Venusaur',
  },
];

export default function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      {pokemons.map((pokemon) => (
        <>
          <p>{pokemon.name}</p>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${pokemon.dexId}.png`}
          />
        </>
      ))}
    </div>
  );
}
