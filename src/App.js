import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PokedexList from './pages/PokedexList/PokedexList';
import PokemonList from './pages/PokemonList/PokemonList';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/pokedex-list", name: "Pokedex List"},
    {url: "/pokemon-list", name: "Pokemon"},
    {url: "/Species-list", name: "Species List"}
  ])


  return (
    <>
      <NavBar navItems={navItems}/>
      <Routes>
        <Route path="/pokedex-list" element={<PokedexList />}/>
        <Route path="/pokemon-list" element={<PokemonList />}/>
      </Routes>
    </>
  );
}

export default App;
