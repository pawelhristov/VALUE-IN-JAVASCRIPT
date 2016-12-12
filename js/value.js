function getValueData() {

	var getVal = document.getElementById('first-input').value;
	var getVal2 = document.getElementById('second-input').value;
	var getVal3 = document.getElementById('third-input').value;

	console.log(getVal3);


if (isNaN(getVal) || getVal < 1 || isNaN(getVal2) || getVal2 < 1) {
	alert("Please enter number!!!");
}
	else {
		getVal = getVal * 1;

		getVal2 = parseInt(getVal2);

		var result = getVal + getVal2;

		alert(result);

		for (var i = 1; i <= result; i++) {

			var createCurcle = document.createElement("div");
			createCurcle.setAttribute("class", "circle");
			createCurcle.style.backgroundColor = getVal3;
			document.body.appendChild(createCurcle);
		}

	}

}