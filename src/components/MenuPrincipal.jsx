import { useState, useEffect } from 'react';
import './MenuPrincipal.css';

function MenuPrincipal({ onOrdenar }) {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/productos')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error al obtener productos');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar los productos');
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div className="menu-container"><p>Cargando productos...</p></div>;
  }

  if (error) {
    return <div className="menu-container"><p>{error}</p></div>;
  }

  return (
    <div className="menu-container">
      <div className="menu-header">
        <span className="menu-icono">⚡</span>
        <h2>Express Menu</h2>
        <span className="menu-badge">Preparación rápida</span>
      </div>

      <div className="menu-lista">
        {productos.map((producto) => (
          <div className="menu-card" key={producto.idProducto}>
            <img src={producto.imagen} alt={producto.nombre} className="menu-card-img"
              onClick={() => setImagenAmpliada(producto)} />

            <div className="menu-card-info">
              <h3>{producto.nombre}</h3>
              <p className="menu-card-detalle">{producto.categoria}</p>
              <p className="menu-card-precio">S/ {producto.precio.toFixed(2)}</p>
            </div>

            <button className="menu-card-btn" onClick={() => onOrdenar(producto)}>
              Ordenar
            </button>
          </div>
        ))}
      </div>

      {imagenAmpliada && (
        <div
          className="imagen-modal-overlay"
          onClick={() => setImagenAmpliada(null)}
        >
          <div className="imagen-modal-contenido">
            <img src={imagenAmpliada.imagen} alt={imagenAmpliada.nombre} />
            <p>{imagenAmpliada.nombre}</p>
            <button className="imagen-modal-cerrar" onClick={() => setImagenAmpliada(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPrincipal;
