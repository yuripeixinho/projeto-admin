import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import { AuthProvider } from "./contexts/Auth";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Pokemons from "./pages/Pokemons";
import PokemonForm from "./pages/Pokemons/PokemonForm";
import Users from "./pages/Users";
import UserForm from "./pages/Users/UserForm";

import "./styles.scss";

import { AuthContext } from "./contexts/Auth";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="main-app">
      <BrowserRouter>
        <AuthProvider>
          <div className="nav-bar-container">
            <NavBar />
          </div>

          <div className="main-page-container">
            <Routes>
              <Route path="/login" element={<LoginPage />} />

              <Route
                path="/"
                element={
                  <Private>
                    <Dashboard />
                  </Private>
                }
              />

              <Route
                path="/pokemons"
                element={
                  <Private>
                    <Pokemons />
                  </Private>
                }
              />
              <Route
                path="/pokemon/form"
                element={
                  <Private>
                    <PokemonForm />
                  </Private>
                }
              />
              <Route
                path="/pokemon/form/:id"
                element={
                  <Private>
                    <PokemonForm />
                  </Private>
                }
              />

              <Route
                path="/users"
                element={
                  <Private>
                    <Users />
                  </Private>
                }
              />
              <Route
                path="/user/form"
                element={
                  <Private>
                    <UserForm />
                  </Private>
                }
              />
              <Route
                path="/user/form/:id"
                element={
                  <Private>
                    <UserForm />
                  </Private>
                }
              />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
