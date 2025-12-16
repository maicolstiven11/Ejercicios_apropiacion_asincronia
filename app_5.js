
const tomarDatos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(" Datos tomados");
            const datos = { valor: 5 };
            resolve(datos);
        }, 1000);
    })

};


const procesarDatos = (datos) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(" Procesando datos...");
            const resultado = datos.valor * 2;
            resolve(resultado);
        }, 1000);
    })

};


const mostrarResultado = (resultado) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Resultado final:", resultado);
            resolve();
            console.log("proceso terminado");
            
        }, 1000);
    })
    

};

tomarDatos() 
    .then((datos) => procesarDatos(datos))
    .then((resultado) => mostrarResultado(resultado))


