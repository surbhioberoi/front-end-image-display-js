function pageLoad() {
	for (var i = 0; i<4; i++) {
		clone();
	}
}

function clone() {
	var main = document.getElementById("main-div");
	var template = document.querySelector(".inside-div");
	var cloneDiv = template.cloneNode(true);
	cloneDiv.style.display = "block";
	cloneDiv.style.padding = "20px";
	main.appendChild(cloneDiv);
}