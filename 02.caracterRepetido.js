function vecesQueSeRepiteCaracter(caracter, cadenaTexto){
    let cantidad = 0;

    for (let i = 0; i < cadenaTexto.length; i++) {
        if (cadenaTexto[i] === caracter) {
            cantidad++;
        }
    }

    let textoFinal = `El caracter "${caracter}" se repite ${cantidad} veces  en la cadena de texto "${cadenaTexto}"`;
    return textoFinal;
}
let resultado = vecesQueSeRepiteCaracter("a","juan le gusta jugar a la pelota");
console.log(resultado);



