import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleRegister = () => {
    alert("✅ Datos guardados correctamente");
    navigate("/");
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
        <input type="text" placeholder="Ingresa tu nombre" />

        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña</label>
        <input type="password" placeholder="Crea una contraseña" />

        <label>Confirmar contraseña</label>
        <input type="password" placeholder="Repite la contraseña" />

        <button onClick={handleRegister}>
          Registrarse
        </button>

        <p className="login-link">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;