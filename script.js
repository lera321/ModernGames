

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



var Search =  document.getElementById('content')

 function()
 {

 }
 
if(Search == content )
{
 
    document.getElementById('content');


}

else
{

}

