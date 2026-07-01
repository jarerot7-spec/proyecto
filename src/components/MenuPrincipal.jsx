import { useState } from 'react';
import { productos } from './data/productos';
import './MenuPrincipal.css';

function MenuPrincipal({onOrdenar}) {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  return (
    <div className="menu-container">
      <div className="menu-header">
        <span className="menu-icono">⚡</span>
        <h2>Express Menu</h2>
        <span className="menu-badge">Preparación rápida</span>
      </div>

      <div className="menu-lista">
        {productos.map((producto) => (
          <div className="menu-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="menu-card-img"
              onClick={() => setImagenAmpliada(producto)} />

            <div className="menu-card-info">
              <h3>{producto.nombre}</h3>
              <p className="menu-card-detalle">
                ⏱ {producto.tiempo} · Quedan {producto.porciones} porciones
              </p>
              <p className="menu-card-precio">S/ {producto.precio.toFixed(2)}</p>
            </div>

            <button className="menu-card-btn"onClick={() => onOrdenar(producto)}>
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
