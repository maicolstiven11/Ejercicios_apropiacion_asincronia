const tarea =() =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("preceso terminado despues de 2 s")
        }, 2000)
    })
}
async function ejecutar (){
    console.log("iniciando");
    const resultado = await tarea();

    console.log(resultado);
    console.log("fin del proceso");
    
    
}
ejecutar();