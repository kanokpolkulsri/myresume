var top = 0;
function navSlide(){
	document.getElementById('floor').style.left = -$(window).scrollTop()*0.7+"px";
	document.getElementById('mountain').style.left = -($(window).scrollTop()*0.4)+500+"px";


	if(top != $(window).scrollTop()){
		// if($(window).scrollTop() % 20 === 0){
		// 	document.getElementById('human').src = './img/human2.png';
		// }
		// if($(window).scrollTop() % 40 === 0){
		// 	document.getElementById('human').src = './img/human1.png';
		// }
	}
	top = $(window).scrollTop();
}

$(window).scroll(navSlide);