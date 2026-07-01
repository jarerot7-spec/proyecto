import { productos } from "./data/productos";
import './MenuPrincipal.css';

function MenuPrincipal({onOrdenar}){
    return (
        <div className="menu-container">
            <div className="menu-header">
                <span className="menu-icono">⚡</span>
                <h2>Express Menu</h2>
                <br />
                <span className="menu-badge">Preparación rápida</span>
            </div>

            <div className="menu-lista">
                {productos.map((producto) => (
                    <div className="menu-card" key={producto.id}>
                        <img src={producto.imagen} alt={producto.nombre} className="menu-card-img"/>

                        <div className="menu-card-info">
                            <h3>{producto.nombre}</h3>
                            <p className="menu-card-detalle">
                                ⏱ {producto.tiempo} * Quedan {producto.porciones} porciones
                            </p>
                            <p className="menu-card-precio">S/ {producto.precio.toFixed(2)}</p>
                        </div>

                        <button className="menu-card-btn" onClick={() => onOrdenar(producto)}>Ordenar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuPrincipal;
