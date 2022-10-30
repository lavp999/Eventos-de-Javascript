// adding the function to the window makes it globally available
// no entiendo el ejercicio, será sumas dos dos primeros inputs y mostraslos en el tercero
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	// return  document.getElementById("resultNumber").value = (parseInt(stringA) + parseInt(stringB));
	let stringC = document.getElementById("resultNumber");
	stringC.value = (parseInt(stringA) + parseInt(stringB));
	return  stringC.value;
};
