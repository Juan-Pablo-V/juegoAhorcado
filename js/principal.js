function crearTablero() {
    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0, 0, 1200, 800);

}

function escogerPalabraSecreta() {
    var palabras = ["CASA", "PERRO", "GATO", "HTML", "VOLCAN"];
    var alteatorio = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[alteatorio];
    console.log(palabraSecreta);
    crearGuiones(palabraSecreta);
}

function crearGuiones(palabraSecreta) {
    var numeroGuiones = palabraSecreta.length;
    pincel.fillStyle = "black";
    for (var i = 0; i < numeroGuiones; i++) {
        pincel.fillRect(380 + (70 * i), 700, 40, 5);

    }
}

function teclaPresionada(evento) {
    var tecla = evento.key;
    if (isNaN(tecla)) {
        console.log(tecla);
        dibujarLetraCorrecta(tecla)
    }

}

function dibujarLetraCorrecta(letra){
    var encontrada=false;
    var letraMayuscula=letra.toUpperCase();
    
    for(var i=0;i<palabraSecreta.length;i++){
        if(palabraSecreta.charAt(i)==letraMayuscula){
            encontrada=true;
            palabra[i]=letra;
        }else{
            palabra[i]=null;
        }
    }
    console.log(palabra);
}

var palabraSecreta;
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var botonInciar = document.querySelector("#boton-iniciar");
var palabra=[];

crearTablero();
botonInciar.onclick = escogerPalabraSecreta;
document.addEventListener("keypress", teclaPresionada);