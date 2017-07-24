var circleMaker = document.getElementById("circleMaker");
var circleOutput = document.getElementById("circleOutputInfo");

function circleAreaOutput() {
	var circleMaker = document.getElementById("circleMaker");
	var circleOutput = document.getElementById("circleOutputInfo");
	var radius = document.getElementById("radiusSize");
	var radiusSize = radius.value;
	var circleArea = Math.PI * Math.pow(radiusSize, 2);
	circleOutput.innerHTML = "The area of a circle with a radius of " + radiusSize + " is " + circleArea.toFixed(3) + ".";
};

function drawCircle() {
	var radius = document.getElementById("radiusSize");
	var radiusSize = radius.value;
	var canvas = document.getElementById("circleCanvas");
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.arc(150, 75, radiusSize, 0, 2 * Math.PI);
	ctx.stroke();
}

function catPics () {
	var radius = document.getElementById("radiusSize");
	var radiusSize = radius.value;
	var kitten = document.createElement("img");
	kitten.setAttribute("src", "kitten.jpg");
	var tiger = document.createElement("img");
	tiger.setAttribute("src", "tiger.jpg");
	var lion = document.createElement("img");
	lion.setAttribute("src", "lion.jpg");
	var imgClear = document.createElement("img")
	imgClear.setAttribute("src", "");

	var catPics = document.getElementById("catPics");


	if (radiusSize < 25) {
		catPics.innerHTML = "";
		catPics.appendChild(kitten);
	} else if (radiusSize < 51) {
		catPics.innerHTML = "";
		catPics.appendChild(tiger);
	} else {
		catPics.innerHTML = "";
		catPics.appendChild(lion);
	}
}

function rickPhrases () {
	var pageHeader = document.getElementById("pageHeader");
	var radius = document.getElementById("radiusSize");
	var radiusSize = radius.value;

	if (radiusSize < 25) {
		pageHeader.innerHTML = "";
		pageHeader.innerHTML = "WUBBA LUBBA DUB DUB";
	} else if (radiusSize < 51) {
		pageHeader.innerHTML = "";
		pageHeader.innerHTML = "And that's why I always say, 'Shumshumschilpiddydah!'";
	} else {
		pageHeader.innerHTML = "";
		pageHeader.innerHTML = "Rubber baby buggy bumpers!";
	}
}

function allTheFunctions () {
	drawCircle();
	circleAreaOutput();
	catPics();
	rickPhrases();
}

circleMaker.onclick = allTheFunctions;




