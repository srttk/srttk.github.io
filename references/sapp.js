$(function(){
	//Plax Plugin
	$('.fa').plaxify();
	$.plax.enable();
	//Fittext Plugin
	$(".rs-h1").fitText(1.2,{ minFontSize: '20px', maxFontSize: '40px' });
	$(".rs-h3").fitText(2.2,{ minFontSize: '20px', maxFontSize: '32px'});
	//Back Struch Plugin

	$.backstretch('images/blur_green.jpg');
	NProgress.done();
});