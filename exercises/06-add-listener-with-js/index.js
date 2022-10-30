window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
function miAlerta(){
	return alert("wuju");
}


let miBoton = document.getElementById("theGreen");
miBoton.addEventListener("click", miAlerta, false);
