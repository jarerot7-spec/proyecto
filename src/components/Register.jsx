import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = () => {

  if (
    nombre.trim() === "" ||
    correo.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    setSuccess("");
    setError("⚠️ Debes completar todos los campos.");
    return;
  }

  if (password !== confirmPassword) {
    setSuccess("");
    setError("❌ Las contraseñas no coinciden.");
    return;
  }

  const result = registerUser({
    nombre,
    correo,
    password,
  });

  if (!result.success) {
    setSuccess("");
    setError(result.message);
    return;
  }

  setError("");
  setSuccess("✅ Cuenta creada correctamente.");

  setTimeout(() => {
    navigate("/");
  }, 2000);
};

  return (
    <div className="register-container">

      {/* IZQUIERDA */}
      <div className="register-left">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000"
          alt="Comida saludable"
        />
      </div>

      {/* DERECHA */}
      <div className="register-right">

        <h1>🍔 SmartFood</h1>
        <h2>Crear cuenta</h2>

        <p>Únete a SmartFood y descubre tus comidas favoritas.</p>

        <label>Nombre completo</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

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
          placeholder="Crea una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirmar contraseña</label>
        <input
          type="password"
          placeholder="Repite la contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Registrarse
        </button>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <p className="login-link">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;