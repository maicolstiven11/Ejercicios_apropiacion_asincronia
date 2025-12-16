const ordenes = [
  { id: 1, cliente: "Ana", monto: 120000 },
  { id: 2, cliente: "Luis", monto: 80000 },
  { id: 3, cliente: "María", monto: 150000 }
];

// function verificarOrden(orden, callback) {
//   setTimeout(() => {
//     console.log(` Verificación completa para orden ${orden.id}`);
//     callback(orden);
//   }, 1500);
// }

// function procesarOrden(orden, callback) {
//   setTimeout(() => {
//     console.log(` Procesamiento completo para orden ${orden.id}`);
//     callback(orden);
//   }, 2000);
// }

// function registrarOrden(orden, callback) {
//   setTimeout(() => {
//     console.log(` Registro completo para orden ${orden.id}`);
//     callback(orden);
//   }, 1000);
// }

// function notificarCliente(orden, callback) {
//   setTimeout(() => {
//     console.log(` Notificación enviada a ${orden.cliente}`);
//     callback();
//   }, 500);
// }

// // Flujo con callbacks
// verificarOrden(ordenes[0], (orden) => {
//   procesarOrden(orden, (orden) => {
//     registrarOrden(orden, (orden) => {
//       notificarCliente(orden, () => {
//         console.log(` Orden ${orden.id} completada con callbacks`);
//       });
//     });
//   });
// });

//promesas
// function verificarOrden(orden) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(` Verificación completa para orden ${orden.id}`);
//       resolve(orden);
//     }, 1500);
//   });
// }

// function procesarOrden(orden) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(` Procesamiento completo para orden ${orden.id}`);
//       resolve(orden);
//     }, 2000);
//   });
// }

// function registrarOrden(orden) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(` Registro completo para orden ${orden.id}`);
//       resolve(orden);
//     }, 1000);
//   });
// }

// function notificarCliente(orden) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(` Notificación enviada a ${orden.cliente}`);
//       resolve();
//       console.log(` Orden completada con Promesas`)
//     }, 500);
//   });
// }

// // Flujo con promesas
// verificarOrden(ordenes[0])
//   .then((orden) => procesarOrden(orden))
//   .then((orden) => registrarOrden(orden))
//   .then((orden) => notificarCliente(orden))




// Paso 1: Verificación
function verificarOrden(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Verificación completa para orden:", orden.id);
            resolve(orden);
        }, 1500);
    });
}

// Paso 2: Procesamiento
function procesarOrden(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Procesamiento completo para orden:", orden.id);
            resolve(orden);
        }, 2000);
    });
}

// Paso 3: Registro
function registrarOrden(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Registro completo para orden:", orden.id);
            resolve(orden);
        }, 1000);
    });
}

// Paso 4: Notificación
function notificarCliente(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Notificación enviada a:", orden.cliente);
            resolve("Orden finalizada");
        }, 500);
    });
}

// Procesar una sola orden paso a paso
async function procesarUnaOrden(orden) {
    console.log(" Iniciando orden:", orden.id);

    const verificada = await verificarOrden(orden);
    const procesada = await procesarOrden(verificada);
    const registrada = await registrarOrden(procesada);
    const notificada = await notificarCliente(registrada);

    console.log(notificada);
    console.log(" Orden", orden.id, "completada");
}

// Procesar todas las órdenes en serie (una detrás de otra)
async function procesarSerie() {
    console.log(" Procesando órdenes en serie...");
    for (let i = 0; i < ordenes.length; i++) {
        await procesarUnaOrden(ordenes[i]); // espera a que termine cada orden antes de pasar a la siguiente
    }
    console.log(" Todas las órdenes completadas en serie");
}

// Procesar todas las órdenes en paralelo (todas a la vez)
async function procesarParalelo() {
    console.log(" Procesando órdenes en paralelo...");
    for (let i = 0; i < ordenes.length; i++) {
        // todas se lanzan al mismo tiempo
        procesarUnaOrden(ordenes[i]);
    }
    console.log(" Todas las órdenes lanzadas en paralelo (se completarán casi al mismo tiempo)");
}

// Ejecutar primero en serie y luego en paralelo
procesarSerie().then(() => {
    console.log(" Ahora pasamos al procesamiento en paralelo...");
    procesarParalelo();
});