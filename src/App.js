import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

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
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;