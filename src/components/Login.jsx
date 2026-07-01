import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
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
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <Link to="/menu">
         <button>Iniciar sesión</button>
       </Link>

        <a href="#" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>

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