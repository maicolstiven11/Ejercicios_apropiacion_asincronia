
const tomarDatos = (callback) => {
    setTimeout(() => {
        console.log(" Datos tomados");
        const datos = { valor: 5 };
        callback(datos);
    }, 1000);
};


const procesarDatos = (datos, callback) => {
    setTimeout(() => {
        console.log(" Procesando datos...");
        const resultado = datos.valor * 2;
        callback(resultado);
    }, 1000);
};


const mostrarResultado = (resultado, callback) => {
    setTimeout(() => {
        console.log("Resultado final:", resultado);
        callback();
    }, 1000);
};

tomarDatos((datos) => {
    procesarDatos(datos, (resultado) => {
        mostrarResultado(resultado, () => {
            console.log("Proceso completo");
        });
    });
});
