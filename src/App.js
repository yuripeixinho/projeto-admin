import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

import "./styles.scss";

function App() {
  return (
    <div className="main-app">
      <div className="nav-bar-container">
        <NavBar />
      </div>

      <div className="main-page-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/products" element={<Dashboard />} />
            <Route path="/users" element={<Dashboard />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
