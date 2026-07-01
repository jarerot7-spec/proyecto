import { useState } from "react";
import './ConfirmarPedido.css';


function ConfirmarPedido({ producto, onConfirmar}){
    const [metodoPago, setMetodoPago]= useState('tarjeta');
    const descuento = producto.precio * 0.10;
    const total= producto.precio - descuento;

    return(
        <div className="pedido-container">
            <h2 className="pedido-titulo">Página de Confirmación</h2>
            <div className="pedido-card">
                <h3>{producto.nombre}</h3>
                <p className="pedido-detalle">
                    ⏱ Listo en {producto.tiempo} * Disponible
                </p>
                <p className="pedido-precio">S/ {producto.precio.toFixed(2)}</p>
            </div>
            <br />
            <div className="pedido-card">
                <h4>Detalles del pedido</h4>

                <div className="pedido-fila">
                    <span>Subtotal</span>
                    <span>S/ {producto.precio.toFixed(2)}</span>
                </div>

                <div className="pedido-fila">
                    <span>Descuento estudiante UTP</span>
                    <span className="pedido-descuento">- S/ {descuento.toFixed(2)}</span>
                </div>

                <div className="pedido-fila pedido-total">
                    <span>Total</span>
                    <span>S/ {total.toFixed(2)}</span>
                </div>
            </div>
        
            <div className="pedido-card">
                <h4>Método de Pago</h4>

                <label className="pedido-opcion">
                    <input type="radio" name="metodoPago" 
                        checked={metodoPago === 'tarjeta'} onChange={()=> setMetodoPago('tarjeta')}
                        /> Tarjeta universitaria
                </label>

                <label className="pedido-opcion">
                    <input type="radio" name="metodoPago"
                        checked={metodoPago === 'efectivo'} onChange={()=> setMetodoPago('efectivo')}
                        /> Efectivo al recoger
                </label>
            </div>

            <button className="pedido-btn-confirmar" onClick={onConfirmar}>
                Confirmar Pedido One-Tap</button>
        </div>
    );
}

export default ConfirmarPedido;