//version con callbacks
// Buscar usuario
// const buscarUsuario = (callback) => {
//     setTimeout(() => {
//         console.log(" Usuario encontrado");
//         const usuario = { id: 1, nombre: "Michael" };
//         callback(usuario);
//     }, 1000);
// };

// //  Consultar permisos
// const consultarPermisos = (usuario, callback) => {
//     setTimeout(() => {
//         console.log(" Permisos consultados para:", usuario.nombre);
//         const permisos = ["leer", "escribir"];
//         callback(permisos);
//     }, 2000);
// };

// // Generar reporte
// const generarReporte = (usuario, permisos, callback) => {
//     setTimeout(() => {
//         console.log(" Reporte generado:", { usuario, permisos });
//         callback();
//     }, 1000);
// };

// // Encadenamiento con callbacks
// buscarUsuario((usuario) => {
//     consultarPermisos(usuario, (permisos) => {
//         generarReporte(usuario, permisos, () => {
//             console.log(" Proceso completo con callbacks");
//         });
//     });
// });


// // version con promesas
// // Buscar usuario
// const buscarUsuario = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Usuario encontrado");
//             resolve({ id: 1, nombre: "Michael" });
//         }, 1000);
//     });
// };

// // Consultar permisos
// const consultarPermisos = (usuario) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Permisos consultados para:", usuario.nombre);
//             resolve(["leer", "escribir"]);
//         }, 2000);
//     });
// };

// //  Generar reporte
// const generarReporte = (usuario, permisos) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Reporte generado:", { usuario, permisos });
//             resolve();
//             console.log("proceso completado con promesas");
            
//         }, 1000);
//     });
// };

// // Encadenamiento con Promesas
// buscarUsuario()
//     .then((usuario) => consultarPermisos(usuario)
//         .then((permisos) => generarReporte(usuario, permisos)))


//version con async y await
//  Buscar usuario
const buscarUsuario = () => {
    return new Promise((resolve,) => {
        setTimeout(() => {
            console.log(" Usuario encontrado");
            resolve({ id: 1, nombre: "Michael" });
           
        }, 1000);
    });
};

//  Consultar permisos
const consultarPermisos = (usuario) => {
    return new Promise((resolve, ) => {
        setTimeout(() => {
            console.log(" Permisos consultados para:", usuario.nombre);
            resolve(["leer", "escribir"]);
        
        }, 2000);
    });
};

//  Generar reporte
const generarReporte = (usuario, permisos) => {
    return new Promise((resolve, ) => {
        setTimeout(() => {
            console.log(" Reporte generado:", { usuario, permisos });
            resolve(" Reporte final listo");
            
        }, 1000);
    });
};

// Función principal con async/await
async function consultaUsuario() {

    console.log(" Iniciando proceso...");

    const usuario = await buscarUsuario();
    const permisos = await consultarPermisos(usuario);
    const reporte = await generarReporte(usuario, permisos);

    console.log(reporte);
    console.log(" Proceso completo con Async/Await");
     
}

// Ejecutar
consultaUsuario();