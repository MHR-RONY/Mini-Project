let btn = document.querySelector("button");

btn.addEventListener('click', function () {
	let randomColorRGB = getRandomColorRGB();
	let randomColorHex = rgbToHex(randomColorRGB);

	// Display RGB and Hex codes
	let rgbCode = document.getElementById("rgbCode");
	let hexCode = document.getElementById("hexCode");

	rgbCode.innerText = `RGB Code: ${randomColorRGB}`;
	hexCode.innerText = `Hex Code: ${randomColorHex}`;

	// Set the div background color to the new random color
	let div = document.querySelector('div');
	div.style.backgroundColor = randomColorRGB;

	// Get color details
	let colorDetails = document.getElementById("colorDetails");
	let colorInfo = getColorDetails(randomColorRGB);
	colorDetails.innerText = colorInfo;

	console.log("Color Updated");
});

function getRandomColorRGB() {
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	let color = `rgb(${red},${green},${blue})`;
	return color;
}

// Convert RGB to Hex
function rgbToHex(rgb) {
	// Extract the RGB values
	let rgbArray = rgb.match(/\d+/g);
	let red = parseInt(rgbArray[0]).toString(16).padStart(2, '0');
	let green = parseInt(rgbArray[1]).toString(16).padStart(2, '0');
	let blue = parseInt(rgbArray[2]).toString(16).padStart(2, '0');

	return `#${red}${green}${blue}`;
}

// Get color details based on the RGB values
function getColorDetails(rgb) {
	let rgbArray = rgb.match(/\d+/g);
	let red = parseInt(rgbArray[0]);
	let green = parseInt(rgbArray[1]);
	let blue = parseInt(rgbArray[2]);

	// Determine brightness
	let brightness = (red * 299 + green * 587 + blue * 114) / 1000; // Standard formula for brightness
	let brightnessLevel = brightness > 128 ? "Light" : "Dark";

	// Determine color temperature (warm/cool)
	let colorTemperature = (red > blue) ? "Warm" : "Cool";

	// Example usage of the color
	let usage = (brightnessLevel === "Light") ? "Good for backgrounds or light themes." : "Great for text or buttons.";

	return `This is a ${brightnessLevel} and ${colorTemperature} color. ${usage}`;
}
