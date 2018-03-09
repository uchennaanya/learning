$(document).ready(function(){
	
	 // scroll and fixed
	
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
	
 // menu toggle 
	
	 $(".toggle").click(function(){
		 $("nav").toggleClass("active");
	 });  
	
// Get the modal
	
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

})
