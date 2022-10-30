//Declare your function here
function laFuncion(){
    alert("Hello World");
    return 0;
}

let miInput = document.getElementById("hello");
miInput.setAttribute("onclick", "laFuncion()");
miInput.setAttribute("value", "Hola Mundo");
