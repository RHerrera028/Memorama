var arreglo = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P', 'Q', 'Q', 'R', 'R'];
shuffleArray(arreglo);

var par = false;
var guardar;
var elegir;
var n = false;

var contador = 1;
for (let i = 0; i < arreglo.length; i++) {
   var container = document.getElementById("filas");
   container.innerHTML += `
            <div class='col-1 hidden' id='${contador}'>
            <p>${arreglo[i]}</p> 
            </div> 
        `;
    if (contador%6==0) {
        container.innerHTML += `<div class="w-100"></div>` 
    }
    contador++;
}

var cards = document.getElementsByClassName("col-1");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", voltear);
  }


function voltear() {
    if (n == true) {
        return
    }
    if (par == false){
        guardar = this.id;
    }
    elegir = this.id;
    var elemento = document.getElementById(elegir);
    if (document.getElementById(elegir).classList.contains("hidden")) {
        elemento.classList.remove("hidden")
        elemento.classList.add("visible");   
    }
    else if (document.getElementById(elegir).classList.contains("visible")) {
        elemento.classList.remove("visible")
        elemento.classList.add("hidden");
    }
    if (document.getElementById(guardar).innerHTML != document.getElementById(elegir).innerHTML) {
        n = true;
        setTimeout(regresar, 2000);
    }
    if (par == false){
        par = true;
     
    }
    else if (par == true){
        par = false;
 
    }
 
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function regresar() {
    document.getElementById(guardar).classList.remove("visible");
    document.getElementById(elegir).classList.remove("visible");
    document.getElementById(guardar).classList.add("hidden");
    document.getElementById(elegir).classList.add("hidden");
    n = false;
}