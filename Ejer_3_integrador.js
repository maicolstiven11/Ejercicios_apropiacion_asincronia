const usuarios = [101, 102, 103, 104];
// function versionBloqueante() {
//     console.log("⏳ Iniciando versión bloqueante...");

//     for (let i = 0; i < usuarios.length; i++) {
//         // Simulamos una operación larga con un ciclo vacío
//         let sum = 0;
//         for (let j = 0; j < 1000000; j++) {
//             sum += j;
//         }
//         console.log("Usuario procesado:", usuarios[i]);
//     }

//     console.log(" Proceso bloqueante terminado");
// }

// versionBloqueante();





///////////

//asincronica con promesas

// // Funciones simuladas con tiempos
// function consultarUsuario(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Usuario consultado:", id);
//             resolve({ id: id, nombre: "Usuario " + id });
//         }, 1200);
//     });
// }

// function consultarSeguridad(usuario) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Seguridad consultada para:", usuario.nombre);
//             usuario.seguridad = "OK";
//             resolve(usuario);
//         }, 800);
//     });
// }

// function consultarRoles(usuario) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Roles consultados para:", usuario.nombre);
//             usuario.roles = ["admin", "ventas"];
//             resolve(usuario);
//         }, 2000);
//     });
// }

// function registrar(usuario) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(" Registro finalizado para:", usuario.nombre);
//             resolve(usuario);
//         }, 600);
//     });
// }

// // Flujo de procesamiento para un usuario
// function procesarUsuario(id) {
//     return consultarUsuario(id)
//         .then((usuario) => consultarSeguridad(usuario))
//         .then((usuario) => consultarRoles(usuario))
//         .then((usuario) => registrar(usuario))
//         .then((usuario) => {
//             usuario.tiempoTotal = "flujo completado";
//             console.log(" Usuario procesado:", usuario);
//             return usuario;
//         });
// }

// // Procesar usuarios uno por uno, sin Promise.all
// procesarUsuario(usuarios[0])
//     .then(() => procesarUsuario(usuarios[1]))
//     .then(() => procesarUsuario(usuarios[2]))
//     .then(() => procesarUsuario(usuarios[3]))
//     .then(() => {
//         console.log(" Todos los usuarios procesados con Promesas (sin .all)");
//     });


////////////

// //con async/await
// async function procesarUsuarioAsync(id) {
//     const usuario = await consultarUsuario(id);
//     const seguridad = await consultarSeguridad(usuario);
//     const roles = await consultarRoles(seguridad);
//     const registro = await registrar(roles);

//     registro.tiempoTotal = "flujo completado";
//     return registro;
// }

// async function ejecutarAsync() {
//     console.log(" Iniciando versión Async/Await...");

//     const resultados = await Promise.all([
//         procesarUsuarioAsync(usuarios[0]),
//         procesarUsuarioAsync(usuarios[1]),
//         procesarUsuarioAsync(usuarios[2]),
//         procesarUsuarioAsync(usuarios[3])
//     ]);

//     console.log(" Resultados Async/Await:", resultados);
//     console.log(" Grupo de usuarios procesado");
// }

// ejecutarAsync();
