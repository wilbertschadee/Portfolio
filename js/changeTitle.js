if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {

	window.onblur = function () {
		document.title = 'Where did you go?';
	}

	window.onfocus = function () {
		document.title = 'Portfolio | Wilbert Schadee';
	}

} else {
	var index = 0;

	var titles = ["Where did you go?", "Pleas come back", "don't leave me", "Aaah, Come on", "Oke then :("];

	var titleInterval;

	window.onblur = function () {

		titleInterval = setInterval(changeTitel, 5000);
		console.log("titleInterval enabled");

		function changeTitel() {
			console.log("changing title to: " + index);
			document.title = titles[index];
			index++;

			if (index > 4) {
				index = 0;
			}
		}
	}

	window.onfocus = function () {
		clearInterval(titleInterval);
		document.title = 'Portfolio | Wilbert Schadee';
	}

}