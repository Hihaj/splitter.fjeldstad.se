window.onload = function() {
	document.getElementById('thumbnail').onmouseover = switchToColor;	
	document.getElementById('thumbnail').onmouseout = switchToGrayscale;
}

function switchToColor(e) {
	document.getElementById('thumbnail').src = 'images/shattering_glass_small.jpg';
}

function switchToGrayscale(e) {
	document.getElementById('thumbnail').src = 'images/shattering_glass_small_bw.jpg';
}