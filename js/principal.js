function crearTablero() {
    pincel.fillStyle = "rgb(240, 240, 240)";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.moveTo(200, 650);
    pincel.lineTo(100, 750);
    pincel.lineTo(300, 750);
    pincel.fill();

    incorrectas = "";
    pasoAhorcado = 0;
    aciertos = 0;
    letrasPresionadas = "";

    document.addEventListener("keypress", teclaPresionada);
    escogerPalabraSecreta();
    crearGuiones(palabraSecreta);
}

function escogerPalabraSecreta() {
    var alteatorio = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[alteatorio];
}

function crearGuiones(palabraSecreta) {
    var numeroGuiones = palabraSecreta.length;
    pincel.fillStyle = "rgb(226, 102, 102)";
    for (var i = 0; i < numeroGuiones; i++) {
        pincel.fillRect(480 + (70 * i), 700, 40, 5);
    }
}

function teclaPresionada(evento) {
    var tecla = evento.key;
    if (isNaN(tecla)) {
        if (!letrasPresionadas.includes(tecla)) {
            pertenecePalabraSecreta(tecla);
        letrasPresionadas= letrasPresionadas+tecla;
        }

    }

}

function dibujarLetraCorrecta(letra, x, y) {
    pincel.font = "21px Georgia";
    pincel.fillStyle = "rgb(226, 102, 102)";
    pincel.fillText(letra, x, y);
}

function dibujarLetraIncorrecta(letra) {
    
        pincel.font = "21px Georgia";
        pincel.fillStyle = "black";
        incorrectas = incorrectas + letra;
        pincel.fillText(incorrectas, 480, 550);

}

function pertenecePalabraSecreta(letra) {
    var encontrada = false;
    var letraMayuscula = letra.toUpperCase();

    for (var i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) == letraMayuscula) {
            encontrada = true;
            dibujarLetraCorrecta(letraMayuscula, 483 + (70 * i), 690);
            aciertos++;
        }
    }
    if (!encontrada) {
        dibujarLetraIncorrecta(letraMayuscula);
        dibujarAhorcado();
        pasoAhorcado++;
    }

    verificarGanador();
}

function dibujarAhorcado() {
    pincel.fillStyle = "black";

    switch (pasoAhorcado) {
        case 0:
            pincel.fillStyle = "brown";
            pincel.fillRect(198, 350, 5, 300);
            break;
        case 1:
            pincel.fillStyle = "brown";
            pincel.fillRect(198, 350, 120, 5);
            break;
        case 2:
            pincel.fillStyle = "brown";
            pincel.fillRect(318, 350, 5, 50);
            break;
        case 3:
            pincel.beginPath();
            pincel.arc(320, 400, 25, 0, Math.PI * 2);
            pincel.fill();
            break;
        case 4:
            pincel.fillRect(320, 420, 3, 100);
            break;
        case 5:
            pincel.beginPath();
            pincel.lineWidth=3;
            pincel.moveTo(320,520);
            pincel.lineTo(280,560);
            pincel.stroke();
            break;
        case 6:
            pincel.beginPath();
            pincel.lineWidth=3;
            pincel.moveTo(320,520);
            pincel.lineTo(370,560);
            pincel.stroke();
            break;
        case 7:
            pincel.beginPath();
            pincel.lineWidth=3;
            pincel.moveTo(320,450);
            pincel.lineTo(270,400);
            pincel.stroke();
            break;
        case 8:
            pincel.beginPath();
            pincel.lineWidth=3;
            pincel.moveTo(320,450);
            pincel.lineTo(370,400);
            pincel.stroke();
            finalizar();
            break;

    }

}

function finalizar(){
    pincel.font = "30px Georgia";
    pincel.fillStyle = "lightcoral";
    pincel.fillText("Fin ", 480, 450);
    pincel.fillStyle = "black";
    pincel.fillText("del juego ", 530, 450);
}

function verificarGanador(){
    if(aciertos== palabraSecreta.length){
        felicitar();
    }
}

function felicitar(){
    pincel.font = "31px Georgia";
    pincel.fillStyle = "lightcoral";
    pincel.fillText("Ganaste, ", 480, 450);
    pincel.fillStyle = "black";
    pincel.fillText("felicidades ", 605, 450);
}


var palabras = ["CASA", "PERRO", "GATO", "HTML", "VOLCAN", "CARTA", "GUITARRA"];
var palabraSecreta;
var incorrectas = "";
var pasoAhorcado = 0;
var aciertos=0;
var letrasPresionadas="";
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var botonInciar = document.querySelector("#boton-iniciar");


botonInciar.onclick = crearTablero;
