var radius = document.getElementById("radiusSize");

function circleAreaOutput() {
	var circleMaker = document.getElementById("circleMaker");
	var circleOutput = document.getElementById("circleOutputInfo");
	var radiusSize = radius.value;
	var circleArea = Math.PI * Math.pow(radiusSize, 2);

	circleOutput.innerHTML = "The area of a circle with a radius of " + radiusSize + " is " + circleArea.toFixed(3) + ".";
};

function drawCircle() {
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
	var radiusSize = radius.value;
	var cat = document.createElement("img");
	var catPics = document.getElementById("catPics");


	if (radiusSize < 25) {
		catPics.innerHTML = "";
		cat.setAttribute("src", "kitten.jpg");
		catPics.appendChild(cat);
	} else if (radiusSize < 51) {
		catPics.innerHTML = "";
		cat.setAttribute("src", "tiger.jpg");
		catPics.appendChild(cat);
	} else {
		catPics.innerHTML = "";
		cat.setAttribute("src", "lion.jpg");
		catPics.appendChild(cat);
	}
}

function rickPhrases () {
	var pageHeader = document.getElementById("pageHeader");
	var radiusSize = radius.value;

	if (radiusSize < 25) {
		pageHeader.innerHTML = "WUBBA LUBBA DUB DUB";
	} else if (radiusSize < 51) {
		pageHeader.innerHTML = "And that's why I always say, 'Shumshumschilpiddydah!'";
	} else {
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




