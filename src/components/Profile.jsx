import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../services/authService";
import { getUserOrders } from "../services/orderService";

function Profile() {
  const navigate = useNavigate();

  const user = getCurrentUser();

  if (!user) return null;

  const orders = getUserOrders(user.correo);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="profile-bg">

      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar">
            {user.nombre?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{user.nombre}</h2>
            <p>{user.correo}</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>📦 Mis pedidos</h3>

          {orders.length === 0 ? (
            <p className="empty">No tienes pedidos aún</p>
          ) : (
            <div className="orders">
              {orders.map((item, index) => (
                <div key={index} className="order-item">
                  <span>
                    🍔 {item?.producto?.nombre || item?.producto || "Producto"}
                  </span>
                  <small>{item.fecha}</small>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Cerrar sesión
        </button>

      </div>

    </div>
  );
}

export default Profile;