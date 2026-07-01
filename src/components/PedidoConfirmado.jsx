import './PedidoConfirmado.css';

function PedidoConfirmado({ producto}){
    const numeroOrden= Math.floor(100 + Math.random() * 900);
    const codigoRetiro = Math.floor(10 + Math.random() * 99);

    return(
        <div className='confirmado-container'>
            <div className='confirmado-card'>
                <div className='confirmado-check'>✅</div>
                <h2>¡Pedido Confirmado!</h2>
                <p className='confirmado-subtexto'>Tu orden esta siendo preparada</p>

                <div className='confirmado-producto'>
                    <h3>{producto.nombre}</h3>
                    <p className='confirmado-precio'>S/ {producto.precio.toFixed(2)}</p>
                    <p className='confirmado-detalle'>⏱ Tiempo estimado: {producto.precio}</p>
                    <p className='confirmado-detalle'>Recoge en: Counter Principal</p>
                </div>

                <p className='confirmado-numero-label'>Número de orden</p>
                <p className='confirmado-numero'>#{numeroOrden}</p>
            </div>

            <div className='qr-card'>
                <h4>Código de Retiro</h4>
                <p className='qr-subtexto'>Presenta este QR en el counter asignado</p>

                <div className='qr-box'>
                    <span className='qr-codigo'>{codigoRetiro}</span>
                </div>

                <p className='qr-validez'>Código válido por 15 minutos</p>
            </div>
        </div>
    );
}

export default PedidoConfirmado;