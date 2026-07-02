import React, { useState, useEffect } from 'react';
import { horasPico } from './data/horas';
import './Historial.css';

export default function Historial({ pedidos }) {
    const numeroDiaActual = new Date().getDay();
    const indiceDia = numeroDiaActual === 0 ? 6 : numeroDiaActual - 1;
    const datosDiaActual = horasPico[indiceDia] || horasPico[0];

    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/productos')
            .then((res) => res.json())
            .then((datos) => {
                setProductos(datos);
                setCargandoProductos(false);
            })
            .catch((err) => {
                console.error(err);
                setCargandoProductos(false);
            });
    }, []);

    return (
        <div className="page-background-wrapper">
            <div className="estado-container-main">

                <div className="historial-pedidos-box">
                    <div className="historial-header">
                        <span className="icon-clipboard">📋</span>
                        <h2>Historial de Pedidos</h2>
                    </div>

                    {pedidos.length === 0 ? (
                        <p className="no-pedidos-text">Aún no tienes pedidos realizados</p>
                    ) : (
                        <div className="pedidos-lista">
                            {pedidos.map((pedido) => (
                                <div className="pedido-item-row" key={pedido.id}>
                                    <img
                                        src={pedido.producto.imagen}
                                        alt={pedido.producto.nombre}
                                        className="pedido-item-img"
                                    />
                                    <div className="pedido-item-info">
                                        <span className="pedido-item-usuario">{pedido.usuario}</span>
                                        <span className="pedido-item-nombre">{pedido.producto.nombre}</span>
                                        <span className="pedido-item-fecha">{pedido.fecha}</span>
                                    </div>
                                    <span className="pedido-item-precio">
                                        S/ {pedido.producto.precio.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="estado-card-box">
                    <div className="card-title-section">
                        <span className="icon-clock">🕒</span>
                        <h3>Horas Pico del Día ({datosDiaActual.dia})</h3>
                    </div>

                    <div className="bloques-pico-list">
                        {datosDiaActual.bloques.map((bloque, index) => (
                            <div key={index} className="bloque-pico-row">
                                <div className="bloque-info">
                                    <span className="bloque-rango">{bloque.rango}</span>
                                    <span className="bloque-tipo">{bloque.tipo}</span>
                                </div>
                                <span className={`badge-estado estado-${bloque.estado.toLowerCase()}`}>
                                    {bloque.estado}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="estado-card-box">
                    <div className="card-title-section">
                        <span className="icon-box">📦</span>
                        <h3>Inventario Disponible</h3>
                    </div>

                    {cargandoProductos ? (
                        <p className="no-pedidos-text">Cargando inventario...</p>
                    ) : (
                        <div className="inventario-list">
                            {productos.map((item) => (
                                <div key={item.idProducto} className="inventario-row">
                                    <div className="producto-detalle-col">
                                        <div className="producto-imagen-wrapper">
                                            {item.imagen && (
                                                <img src={item.imagen} alt={item.nombre} className="producto-img-thumb" />
                                            )}
                                            <span className="producto-nombre-text">{item.nombre}</span>
                                        </div>
                                        <span className="bloque-tipo">{item.categoria}</span>
                                    </div>

                                    <span className="badge-stock stock-alto">
                                        S/ {item.precio.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}