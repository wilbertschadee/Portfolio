if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {

	window.onblur = function () {
		document.title = 'Where did you go?';
	}

	window.onfocus = function () {
		document.title = 'Portfolio | Wilbert Schadee';
	}

} else {
	
	var titles = ["Where did you go?", "Please come back", "Don't leave me", "Aaah, Come on", "Oke then :("];

	var titleInterval;

	window.onblur = function () {

		titleInterval = setInterval(changeTitel, 1000);

		var index = 0;
		
		function changeTitel() {

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