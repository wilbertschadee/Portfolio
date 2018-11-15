window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  var scaledValue = [scaleValue(scrolled, 3, 8, 1, 0),
    scaleValue(scrolled, 85, 93, 1, 0),
  ];

  var foto = [document.getElementById("header"),
    document.getElementById("aboutMeMain"),
  ];

  if (scrolled < 20) {
    foto[0].style.opacity = scaledValue[0];
  } else if (scrolled > 80) {
    foto[1].style.opacity = scaledValue[1];
  }

  console.log(scrolled)

  // document.getElementById("myBar").style.height = scrolled + "%";
}

function scaleValue(input, imin, imax, omin, omax) {
  var percent = (input - imin) / (imax - imin);
  var outputX = percent * (omax - omin) + omin;
  return outputX;
}