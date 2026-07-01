import './Historial.css';

function Historial ({pedidos}){
    return(
        <div className='historial-container'>
            <h2 className="historial-titulo">📋 Historial de Pedidos</h2>
            {pedidos.length === 0 && (
                <p className='historial-vacio'>Aún no tienes pedidos realizados</p>
            )}

            <div className='historial-lista'>
                {pedidos.map((pedido)=> (
                    <div className='historial-card' key={pedido.id}>
                        <img src={pedido.producto.imagen} alt={pedido.producto.nombre} className='historial-img'/>

                        <div className='historial-info'>
                            <p className='historial-usuario'>{pedido.usuario}</p>
                            <h3>{pedido.producto.nombre}</h3>
                            <p className='historial-precio'>S/ {pedido.producto.precio.toFixed(2)}</p>
                            <p className='historial-fecha'>{pedido.fecha}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Historial;