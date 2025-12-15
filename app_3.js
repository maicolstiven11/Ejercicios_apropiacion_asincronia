function procesarPedido( callback) {
    console.log("procesando pedido");

    setTimeout( () => {
        console.log("pedido listo");
        callback();
    }, 3000 );
    
}
procesarPedido( () => {
    console.log("Pedido entregado");
});
