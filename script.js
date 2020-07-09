var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

color1.value = "#ff0000";
color2.value = "#ffff00"

body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor1() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = color;
  return color;
}

function getRandomColor2() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color2.value = color;
  return color;
}

function setRandomColor() {
	//console.log(getRandomColor());
  	body.style.background = "linear-gradient(to right, " 
	+ getRandomColor1()
	+ ", " 
	+ getRandomColor2() 
	+ ")";

	css.textContent = body.style.background + ";";
}

/*color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);*/

