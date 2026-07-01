import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">

      {/* Barra superior */}
      <header className="navbar">
        <h1>🍔 SmartFood</h1>

        <div className="user-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="Usuario"
          />
          <span>Juan Pérez</span>
        </div>
      </header>

      {/* Contenido */}
      <div className="profile-content">

        {/* Información del usuario */}
        <aside className="profile-card">

          <img
            className="profile-photo"
            src="https://i.pravatar.cc/200"
            alt="Perfil"
          />

          <h2>Juan Pérez</h2>

          <p>📧 juan@smartfood.com</p>

          <p>📱 +51 999 999 999</p>

          <button>Editar perfil</button>

        </aside>

        {/* Historial */}
        <section className="orders">

          <h2>📦 Mis pedidos</h2>

          <div className="order-card">
            <h3>Pedido #1054</h3>
            <p>🍔 Smart Burger + Papas</p>
            <p>📅 30/06/2026</p>
            <span className="status delivered">Entregado</span>
            <h4>S/ 32.90</h4>
          </div>

          <div className="order-card">
            <h3>Pedido #1055</h3>
            <p>🍕 Pizza Familiar</p>
            <p>📅 01/07/2026</p>
            <span className="status shipping">En camino</span>
            <h4>S/ 45.00</h4>
          </div>

          <div className="order-card">
            <h3>Pedido #1056</h3>
            <p>🥗 Ensalada César</p>
            <p>📅 02/07/2026</p>
            <span className="status preparing">Preparando</span>
            <h4>S/ 24.50</h4>
          </div>

        </section>

      </div>

    </div>
  );
}

export default Profile;