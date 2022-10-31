window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		let targetElemento = event.target.id;	
		console.log(targetElemento);
		alert(targetElemento);
	});
};


