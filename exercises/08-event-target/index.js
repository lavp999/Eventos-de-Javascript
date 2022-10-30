window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		let targetElemento = event.target.textContent;	
		console.log(targetElemento);
		alert(targetElemento);
	});
};


