var botonNueva = document.querySelector("#boton-nueva");
var botonAgregar = document.querySelector("#boton-agregar");
var botonCancelar = document.querySelector("#boton-cancelar");
var inputPalabra = document.querySelector("#nueva-palabra");
var botonNuevo = document.querySelector("#boton-nuevo");

var controlesInicio = document.querySelector("#contenedor-inicio");
var controles = document.querySelector("#contenedor-agregar");


botonNueva.onclick = mostrarControles;
botonAgregar.onclick = agregarPalabra;
botonCancelar.onclick = ocultarControles;



function agregarPalabra() {

    var nueva = inputPalabra.value;
    if (nueva.length > 0) {        
        var nuevaMayuscula= nueva.toUpperCase();
        palabras.push(nuevaMayuscula);
        alert("Palabra Agregada");
        ocultarControles();
       crearTablero();
    }

}

function mostrarControles() {
    controles.style.display = "block";
    controlesInicio.style.display = "none";
}

function ocultarControles() {
    controles.style.display = "none";
    inputPalabra.value = "";
    controlesInicio.style.display = "block";
}



botonNuevo.onclick = crearTablero;