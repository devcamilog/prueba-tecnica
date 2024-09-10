function cadenaInvertida(cadenaTexto){
    let cadenaNueva = "";
    for(let i = cadenaTexto.length - 1; i >=0; i--){
        cadenaNueva += cadenaTexto[i];
    }
    return cadenaNueva;
}

let resultado = cadenaInvertida("camilo");
console.log(resultado);