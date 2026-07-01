import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Login />} />

      {/* Registro */}
      <Route path="/register" element={<Register />} />

      {/* Perfil */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;