import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import InitialPage from "./pages/InitialPage";
import Pokemon from "./pages/Pokedex/Pokemon";

import "./styles.scss";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
