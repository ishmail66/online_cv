window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
       document.getElementById("slider").style.display = "block";
   } else {
       document.getElementById("slider").style.display = "block";
   }
}