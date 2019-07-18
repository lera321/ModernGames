
/*
window.onload = function () {

    var imgLen = document.getElementById('slider');
    var images = imgLen.getElementsByTagName('img');
    var counter = 1;

   
    var src = [];

    for (var i = 0; i < images.length; i++) {   
        src[i] = images[i].src;
    }

    console.log(src);

    setInterval(function () {

        if (counter < images.length) {

            images[0].src = src[counter];
            console.log(src[counter]);
            counter++;


        }

        else {

            images[0].src = src[0];
            console.log(src[0]);
            counter = 1;

        }

        }, 3000);

}

*/
/*
$(document).ready(function(){
    $('.slick-slider).slick({
      setting-name: setting-value
    });
  });
*/
/*
  $('.uncycle').slick({
    infinite: false,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 3,
  
  });


*/

/*
var imgLen = document.getElementById('slideshow');
var images = imgLen.getElementsByTagName('img');
var counter = 1;


var src = [];

*/



/*
var slides = document.querySelectorAll('#slideshow .active');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'active';

    slides[currentSlide].className = 'active';

    currentSlide++; 
    if(currentSlide >= slides.length){ 
    currentSlide = 0; 
    }



}
*/


/*
window.onload = function () {

  var imgLen = document.getElementById('slider');
  var images = imgLen.getElementsByTagName('img');
  var counter = 1;

 
  var src = [];

  for (var i = 0; i < images.length; i++) {   
      src[i] = images[i].src;
  }

  console.log(src);

  setInterval(function () {

      if (counter < images.length) {

          images[0].src = src[counter];
          console.log(src[counter]);
          counter++;
      }

      else {

          images[0].src = src[0];
          console.log(src[0]);
          counter = 1;

      }

      }, 3000);

}

*/
/*
var slides = document.querySelectorAll('#slideshow .active');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'active';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'active';
}

*/



/*
window.onload = function () {

  var imgLen = document.getElementById('slideshow');
  var images = imgLength.getElementsByTagName('img');
  var counter = 1;

 
  var src = [];

  for (var i = 0; i < images.length; i++) {   
      src[i] = images[i].src;
  }

  console.log(src);

  setInterval(function () {

      if (counter < images.length) {

          images[0].src = src[counter];
          console.log(src[counter]);
          counter++;


      }

      else {

          images[0].src = src[0];
          console.log(src[0]);
          counter = 1;

      }

      }, 3000);

}


*/


