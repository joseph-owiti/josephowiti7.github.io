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

$('#btnf21').click(function(){ 
    if(!$('#iframe').length) {
        $('#iframeHolder').html('<div id="iframe" class="proj_info" width="100%" height="100%"><h1>Software Engineering Capstone</h1><ul><li>Project Ongoing</li><li>Focussed on building a Machine Learning framework</li><li>Tools: Python Libraries, Visual Studios, GitHub, Microsoft Office</li><li>Learned data collection, analysis, formatting, and storage methods</li><li>Project Management tools: Atlassian (Confluence & Trello)</li><li>Additional skills gained: extensive research, teamwork, virtual team collaboration and communication</li</ul></div>');
    }
});

$('#btnf22').click(function(){ 
    if(!$('#iframe').length) {
        $('#iframeHolder').html('<div id="iframe" class="proj_info" width="100%" height="100%"><h1>AWS CloudFormation</h1><ul><li>Built <a href="https://aws.amazon.com/cloudformation/" target="_blank">CloudFormation</a> nested stacks that automatically deployed specific Amazon Web Services, invoked by a static website button click</li><li><a href="https://aws.amazon.com/" target="_blank">AWS</a> Resources researched and utilized: Virtual Private Cloud, Elastic Container Service, Elastic Compute Cloud, Relational Database Service, Simple Storage Service</li><li>Tools: Python, JavaScript, HTML, CSS, JSON/YAML, Boto3 </li><li>Additional skills gained: extensive research and documentation</li><li>Project Management tools: Git (SourceTree), Atlassian (Confluence & Jira)</li</ul></div>');
    }
}); 

$('#btnf23').click(function(){ 
    if(!$('#iframe').length) {
        $('#iframeHolder').html('<div id="iframe" class="proj_info" width="100%" height="100%"><h1>Force-Directed Network Graph</h1><ul><li>You will find me playing volleyball, soccer or lacrosse, but never basketball</li><li>I enjoy going on hikes and roadtrips</li><li>I enjoy games like Settlers of Catan and Avalon</li><li>I am a big fan of the Marvel Cinematic Universe movies</li><li>I love to design and create things</li</ul></div>');
    }
});  

$('#popup__close').click(function(){
    $('.apm-youtube').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
        $("#iframe").remove();

    $('html,body').animate({scrollTop: $("home.html#f").offset().top},'slow');
});


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


                



         