import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Pokemons from "./pages/Pokemons";
import PokemonForm from "./pages/Pokemons/PokemonForm";

import "./styles.scss";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <div className="nav-bar-container">
          <NavBar />
        </div>

        <div className="main-page-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/pokemon/form" element={<PokemonForm />} />
            <Route path="/pokemon/form/:id" element={<PokemonForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
