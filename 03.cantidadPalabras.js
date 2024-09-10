function cantidadPalabrasEnCadena(cadenaTexto){
    let cantidad = 1;
    let i = 0;
    while(i < cadenaTexto.length){
        if(cadenaTexto[i] == " "){
            cantidad++;
        }
        i++;
    }

    let textoFinal = `La cadena de texto "${cadenaTexto}" tiene ${cantidad} palabras`;
    return textoFinal;
}

let resultado = cantidadPalabrasEnCadena("hola mundo");
console.log(resultado);