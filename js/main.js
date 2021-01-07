//Sticky Nav Bar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("b");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};


//Responsive Nav Bar
function myFunction2() {
  document.getElementById("icon-content").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.icon')) {
    var dropdowns = document.getElementsByClassName("icon-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Home.html Image Toggle
function eritoggle() {
    var image = document.getElementById('image'); 
    $('.changesize').css("object-fit", "cover");
    if (image.src.match("eri")) 
        image.src = "images/professional.jpg"; 
    else
        image.src = "images/eri.jfif"; 
} 
function ratoggle() {
    var image = document.getElementById('image'); 
    $('.changesize').css("object-fit", "cover");
    if (image.src.match("lu")) 
     image.src = "images/professional.jpg"; 
    else
     image.src = "images/lu.png"; 
} 
function apmtoggle() {
     var image = document.getElementById('image'); 
     $('.changesize').css("object-fit", "cover");
     if (image.src.match("lu")) 
         image.src = "images/professional.jpg"; 
     else
         image.src = "images/lu.png"; 
} 
function edstoggle() {
    var image = document.getElementById('image'); 
    $('.changesize').css("object-fit", "contain");
    if (image.src.match("eds")) 
        image.src = "images/professional.jpg"; 
    else
        image.src = "images/eds.gif"; 
}
function woltoggle() {
    var image = document.getElementById('image'); 
    $('.changesize').css("object-fit", "cover");
    if (image.src.match("wol")) 
        image.src = "images/professional.jpg"; 
    else
        image.src = "images/wol.jpg"; 
} 


//Home.html Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


//POPUP Script 
$('#buttonapm').click(function(){ 
    if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe class="apm-youtube" width="100%" height="100%" src="https://www.youtube.com/embed/sgd4GJD2C68?autoplay=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }
});   
$('#popup__close').click(function(){
    $('.apm-youtube').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
    $('html,body').animate({scrollTop: $("home.html#f").offset().top},'slow');
    $("#iframe").remove();
});


//SmoothScroll Script
        //Smooth Scroll Script
$(document).ready(function(){
     $( document ).ready(function() {
      $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });
    }); 
});
    
    $("#eriproj").click(function() {
    $('html,body').animate({
        scrollTop: $("project.html#f25").offset().top},'slow');
}); 

//$("#about").click(function() {
//    $('html,body').animate({
//        scrollTop: $("home.html#c").offset().top},'slow');
//});   
//$(".skills").click(function() {
//    $('html,body').animate({
//        scrollTop: $("home.html#d").offset().top},'slow');
//}); 
//$(".experience").click(function() {
//    $('html,body').animate({
//        scrollTop: $("home.html#g").offset().top},'slow');
//}); 
//$(".contact").click(function() {
//    $('html,body').animate({
//        scrollTop: $("home.html#h").offset().top},'slow');
//}); 
//$(".home").click(function() {
//    $('html,body').animate({
//        scrollTop: $("home.html").offset().top},'slow');
//});
    



                



         