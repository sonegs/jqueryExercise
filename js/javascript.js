/* 
EL CÓDIGO SE DIVIDE EN DOS BLOQUES
ESTE PRIMER BLOQUE SE CENTRA EN EL MOVIMIENTO DE LOS ADORNOS Y DE LOS ÁRBOLES
*/

$(document).ready(function() {
    var id = "";
    var idnum = 1;
    var tree = "arbol";


    function getRandom(min, max) { // función que pide un mínimo y un máximo. La función escoge un número aleatorio entre ellos el que se colocarán los adornos
        return Math.round(Math.random() * (max - min) + min);
    }
    $("#Poner").click(function() { // Esta función se ejecuta al pulsar el botón "Poner adorno"

        for (idnum = 1; idnum <= count_appear; idnum++) { //incrementa en uno para que jquery coja el id de las bolas que se van creando
            id = "adorno" + idnum;
        }

        var elem = document.getElementById(id); // aquí identidica el id de la nueva bola y la mueve dentro del arbol
        $(elem).animate({
            marginLeft: getRandom(90, 290),
            marginTop: getRandom(150, 320),
        }, 500);

    });
    $("#Quitar").click(function() { // tira al suelo los adornos y los elimina. Además, sacude el arbol

        id = document.getElementsByClassName("adorno"); // tira los adornos al suelo
        $(id).animate({
            marginTop: getRandom(340, 360)
        }, 200);
        borrarAdornos(); // esta función borra los divs de los adornos en unos milisegundos

        function borrarAdornos() {
            myVar = setTimeout(deleteBalls, 800);
        }

        function deleteBalls() {
            $(id).remove();
        }

        var elem = document.getElementById(tree); // aquí identifica la variable con el id del arbol y lo sacude
        $(elem).animate({ marginLeft: 50 }, 150).animate({ marginLeft: -40 }, 150).animate({ marginLeft: 0 }, 150);

    });

    /* 
    ESTE SERÍA EL SEGUNDO BLOQUE, CENTRADO EN LOS BOTONES Y EN LOS CONTADORES
    */


    // Estas funciones llaman al incremento de los contadores

    $("button[id='Poner']").click(function() {
        countAppear();
    });
    $("button[id='Quitar']").click(function() {
        countQuit();
    });

});

//Script para los contadores
// Se declara la variable que va a contar los adornos
var count_appear = 1;
//Incrementa en uno la variable contador. Esta función se llamará al hacer click en el botón "Poner adorno"
function countAppear() {
    count_appear += 1;
}

// AÑADE A TODOS LOS BOTONES CON EL NAME count_click QUE AL SER PULSADOS EJECUTEN l


function appear() {

    /* 
    Esta función añade un valor al apartado "Bolas creadas" 
    e imprime un div en el archivo HTML con el adorno 
    */

    var contador1 = "Bolas creadas: " + count_appear; // Añade un valor al apartado "Bolas creadas"
    var adorno = "<div class='adorno' id='adorno" + count_appear + "'></div>"; // variable con el div que se añade al hacer click en el botón "Añadir adorno"
    document.getElementById('Contar1').innerHTML = contador1; // Lo imprime en el documento HTML
    document.getElementById('adornos').innerHTML += adorno;

}

function quit() {

    /* 
    Esta función añade un valor al div "Limpieza de adornos" cada vez que se pulsa, 
    borra el valor de las bolas creadas y pone la variable count_appear en 1 para 
    que aparezca el siguiente div de adornos
    */

    var contador2 = "Eliminadas: " + (count_appear - 1); // Se guarda en esta variable los adornos eliminados. Se resta 1 valor para no añadir el último click
    document.getElementById('Contar2').innerHTML = contador2; // Imprime la variable en el documento HTML
    document.getElementsByClassName('adorno').innerHTML += ""; // Restaura el valor de la clase "adorno" 
    this.count_appear = 0; // La reinicia a 0
    this.contador1 = "Bolas creadas: " + this.count_appear; // Guarda en una variable el valor del marcador reiniciado a 0
    document.getElementById('Contar1').innerHTML = this.contador1; // Lo imprime en el documento HTML
    this.count_appear = 1; // Restaura el valor de la variable count_appear para poder seguir sumándole un valor al hacer click en "Poner adorno"
}