import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header"
import MainPage from "./MainPage"
import PokemonPage from "./PokemonPage"
import './App.css';
import Input from "./Input";
import ItemsGrid from "./ItemsGrid";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Input />
      <ItemsGrid />

      <Routes>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/pokemon' element={<PokemonPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
