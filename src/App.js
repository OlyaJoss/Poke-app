import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header"
import MainPage from "./MainPage"
import PokemonPage from "./PokemonPage"
import './App.css';

function App() {
  return (
    <BrowserRouter basename='Poke-app'>
    <div className='page-wrapper'>
      <Header />
      {/* <MainPage /> */}
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/pokemon/:pokeId' element={<PokemonPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
