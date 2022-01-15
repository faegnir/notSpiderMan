var spidey = document.querySelector("#spido");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (spidey.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (spidey.clientHeight / 2);

	spidey.style.left = xPosition + "px";
	spidey.style.top = yPosition + "px";
	}
);