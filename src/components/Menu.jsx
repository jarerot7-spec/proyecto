import { useState } from 'react';
import Navbar from './barra/Navbar';
import MenuPrincipal from './MenuPrincipal';
import ConfirmarPedido from './ConfirmarPedido';
import PedidoConfirmado from './PedidoConfirmado';
import Historial from './Historial';

function Menu() {
  const [vista, setVista]= useState('flujo');
  const [pantalla, setPantalla] = useState('menu');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [historialPedidos, setHistorialPedidos] = useState([]);

  const irAConfirmarPedido = (producto) => {
    setProductoSeleccionado(producto);
    setPantalla('pedido');
  };

  const irAPedidoConfirmado = () => {
    const nuevoPedido={
      id: Date.now(),
      producto: productoSeleccionado,
      usuario: "Usuario UTP",
      fecha: new Date().toLocaleString('es-PE'),
    };
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
      <Navbar
        pantallaActiva={vista === 'historial' ? 'pedidos' : 'home'}
        onHomeClick={irAHome}
        onPedidosClick={irAPedidos}
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