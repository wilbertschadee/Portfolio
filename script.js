window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;


  
  var scaledValue = [scaleValue(scrolled, 3, 8, 1, 0), scaleValue(scrolled, 23, 40, 0, 1), scaleValue(scrolled, 43, 50, 1, 0), scaleValue(scrolled, 69, 79, 0, 1), scaleValue(scrolled, 82, 93, 1, 0)];

  var foto = [document.getElementById("header"), document.getElementById("img2"), document.getElementById("img3")];

  if (scrolled < 20) {
    foto[0].style.opacity = scaledValue[0];
  } else if (scrolled < 41) {
    foto[1].style.opacity = scaledValue[1];
  } else if (scrolled > 20 && scrolled < 65) {
    foto[1].style.opacity = scaledValue[2];
  } else if (scrolled > 58 && scrolled < 82) {
    foto[2].style.opacity = scaledValue[3];
  } else if (scrolled > 83 && scrolled < 100) {
    foto[2].style.opacity = scaledValue[4];
  }

  
  const headerRect = fot0[0].getBoundingClientRect();
  
  console.log(headerRect);

  
  // console.log(scrolled)

  // document.getElementById("myBar").style.height = scrolled + "%";
}

function scaleValue(input, imin, imax, omin, omax) {
  var percent = (input - imin) / (imax - imin);
  var outputX = percent * (omax - omin) + omin;
  return outputX;
}

