function navSlide(){
	document.getElementById('floor').style.left = -($(window).scrollTop()*0.7)+"px";
	document.getElementById('mountain').style.left = -($(window).scrollTop()*0.4)+500+"px";
}
$(window).scroll(navSlide);