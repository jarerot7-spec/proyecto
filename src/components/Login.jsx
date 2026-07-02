import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser, getCurrentUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔥 SI YA ESTÁ LOGUEADO, LO ENVÍA AL MENÚ
  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      navigate("/menu");
    }
  }, []);

  const iniciarSesion = () => {
    if (correo.trim() === "" || password.trim() === "") {
      setError("⚠️ Debes completar todos los campos.");
      return;
    }

    const result = loginUser(correo, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setError("");
    navigate("/menu");
  };

  return (
    <div className="login-container">

      {/* IZQUIERDA */}
      <div className="login-left">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000"
          alt="Comida"
        />
      </div>

      {/* DERECHA */}
      <div className="login-right">

        <h1>🍔 SmartFood</h1>
        <h2>¡Bienvenido!</h2>

        <p>Inicia sesión para disfrutar de tus comidas favoritas.</p>

        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={iniciarSesion}>
          Iniciar sesión
        </button>

        {error && <p className="error-message">{error}</p>}

        <div className="divider">
          <span>o</span>
        </div>

        <div className="register-section">
          <p>¿Aún no tienes una cuenta?</p>
          <Link to="/register">
            <button className="register-btn">
              Crear cuenta
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;