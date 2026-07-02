import { useState } from 'react';
import Navbar from './barra/Navbar';
import MenuPrincipal from './MenuPrincipal';
import ConfirmarPedido from './ConfirmarPedido';
import PedidoConfirmado from './PedidoConfirmado';
import Historial from './Historial';
import { useNavigate } from "react-router-dom";
import { logoutUser, getCurrentUser } from "../services/authService";
import { addOrder } from "../services/orderService";

function Menu() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [vista, setVista] = useState('flujo');
  const [pantalla, setPantalla] = useState('menu');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [historialPedidos, setHistorialPedidos] = useState([]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const irAConfirmarPedido = (producto) => {
    setProductoSeleccionado(producto);
    setPantalla('pedido');
  };
  const goProfile = () => {
  navigate("/profile");
  } ;
  const irAPedidoConfirmado = () => {
  const user = getCurrentUser();

  const nuevoPedido = {
    id: Date.now(),
    producto: productoSeleccionado,
    usuario: user?.correo,
    fecha: new Date().toLocaleString('es-PE'),
  };

  addOrder(user.correo, nuevoPedido);

  setHistorialPedidos([nuevoPedido, ...historialPedidos]);
  setPantalla('confirmado');
};

  const irAHome = () => {
    setVista('flujo');
    setPantalla('menu');
  };

  const irAPedidos = () => {
    setVista('historial');
  };

  return (
    <>
      {/* 🔥 HEADER USUARIO */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center",
        background: "#f5f5f5"
      }}>
        <div>
          👤 {user?.nombre}
        </div>

        <button onClick={handleLogout}>
          🚪 Cerrar sesión
        </button>
      </div>

      <Navbar
      pantallaActiva={vista === 'historial' ? 'pedidos' : 'home'}
      onHomeClick={irAHome}
      onPedidosClick={irAPedidos}
      onProfileClick={goProfile}
     />

      {vista === 'flujo' && pantalla === 'menu' && (
        <MenuPrincipal onOrdenar={irAConfirmarPedido} />
      )}

      {vista === 'flujo' && pantalla === 'pedido' && (
        <ConfirmarPedido
          producto={productoSeleccionado}
          onConfirmar={irAPedidoConfirmado}
        />
      )}

      {vista === 'flujo' && pantalla === 'confirmado' && (
        <PedidoConfirmado producto={productoSeleccionado} />
      )}

      {vista === 'historial' && (
        <Historial pedidos={historialPedidos} />
      )}
    </>
  );
}

export default Menu;