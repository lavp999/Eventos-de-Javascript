//This is a global variable
var counter = 0;

function muestraValor(accion){
	return document.getElementById('screen').innerHTML = "The counter value is "+counter+accion;
}

window.onload = function loadFunction()
{
	//here I set the screen to the initial value when the website is fully loaded.
	muestraValor(".");
}

//called when the user clicks
window.increaseCounter = function incrementa()
{
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	muestraValor(". Añadiendo");
} 

window.decreaseCounter = function decreaseCounter()
{
	//decrease the global counter in one
	counter--;
	//update the screen with the new value
	muestraValor(". Restando");
} 




