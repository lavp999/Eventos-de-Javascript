//Declare your function here
function miFuncion(){
    alert("Hello World");
}

let miInput = document.getElementById("hello");
miInput.setAttribute("onclick", "miFuncion()");
miInput.setAttribute("value", "Hola Mundo");
