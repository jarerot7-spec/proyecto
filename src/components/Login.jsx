import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-left">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000"
          alt="Comida"
        />
      </div>

      <div className="login-right">

        <h1>🍔 SmartFood</h1>
        <h2>¡Bienvenido!</h2>

        <p>Inicia sesión para disfrutar de tus comidas favoritas.</p>

        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <button>Iniciar sesión</button>

        <a href="#">¿Olvidaste tu contraseña?</a>

      </div>

    </div>
  );
}

export default Login;