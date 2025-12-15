const sumar = (a, b, callback) => {
    callback(a + b);   
}
sumar(5, 3, (r1) => {
    sumar(r1, 10, (r2) => {
        console.log(r2);
    });-
});  