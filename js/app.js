
$("#press-me").click(function() {
	let r = Math.floor(Math.random() * 256);
 	let g = Math.floor(Math.random() * 256);
 	let b = Math.floor(Math.random() * 256);

 	$(this).css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
});