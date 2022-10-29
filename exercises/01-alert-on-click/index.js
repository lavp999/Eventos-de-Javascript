window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

let miBoton = document.getElementById("button2");
// miBoton.addEventListener("onclick", myClickFunction);
miBoton.setAttribute("onclick", "myClickFunction()");


