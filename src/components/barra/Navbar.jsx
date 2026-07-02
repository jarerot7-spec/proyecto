import './Navbar.css';

function Navbar({ pantallaActiva, onHomeClick, onPedidosClick, onProfileClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🍔 <span>SmartFood</span>
      </div>

      <div className="navbar-links">
        <button
          className={`navbar-btn ${pantallaActiva === 'home' ? 'activo' : ''}`}
          onClick={onHomeClick}
        >
          🏠 <span>Home</span>
        </button>

        <button
          className={`navbar-btn ${pantallaActiva === 'pedidos' ? 'activo' : ''}`}
          onClick={onPedidosClick}
        >
          🧾 <span>Pedidos</span>
        </button>

        <button
          className={`navbar-btn ${pantallaActiva === 'perfil' ? 'activo' : ''}`}
          onClick={onProfileClick}
        >
          👤 <span>Perfil</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;