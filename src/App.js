import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Pokemons from "./pages/Pokemons";
import PokemonForm from "./pages/Pokemons/PokemonForm";
import Users from "./pages/Users";
import UserForm from "./pages/Users/UserForm";

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

            <Route path="/users" element={<Users />} />
            <Route path="/user/form" element={<UserForm />} />
            <Route path="/user/form/:id" element={<UserForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
