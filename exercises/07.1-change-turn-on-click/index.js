var currentUser = "Mario";
const jugadores = ["Mario", "Juan", "Josh"];
const long = jugadores.length-1;

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

function encuentraSiguiente(actual){
	let i = 0;

	do {
		console.log(jugadores[i], i, actual);
		if (jugadores[i] == actual){
			break;
		}
		i += 1;
  	} while (i <= long);
	if(i >= long)	return jugadores[0];
	else			return jugadores[i+1];

}

window.turnChanger = function turnChanger() {
	currentUser = encuentraSiguiente(currentUser);

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
