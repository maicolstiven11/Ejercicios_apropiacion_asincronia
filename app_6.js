const proceso = ()=>{
    return new Promise((resolve, reject ) =>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve("proceso exitoso")
            }
            else{
                reject("proceso fallido")
            }
        })
    })
}
proceso()
    .then((mesaje)=>{
        console.log(mesaje);
    })
    .catch((error) =>{
        console.log(error);
    })