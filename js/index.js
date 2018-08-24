var homeNavHeight = document.getElementById('nav-wrapper').offsetHeight;
document.getElementById('carousel-example').style.top = homeNavHeight;
$(function(){
	$("#login-modal").load("/get-login-modal"); 
});


