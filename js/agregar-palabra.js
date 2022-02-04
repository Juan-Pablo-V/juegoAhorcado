var botonInciar = document.querySelector("#boton-agregar");
var inputPalabra = document.querySelector("#nueva-palabra");


botonInciar.onclick= agregarPalabra;

function agregarPalabra(){

    var nueva= inputPalabra.value;
    palabras.push(nueva);
    inputPalabra.value="";
    alert("Palabra Agregada");

}