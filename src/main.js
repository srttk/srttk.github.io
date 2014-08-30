require.config({
	shim:{
		'collapse': {
			deps: [ 'jquery','transition'],
			exports: 'jQuery'
		},
		'transition':{
			deps:['jquery'],
			exports:'jQuery'
		},
		// Plax Plugin 
		'plax': {
			deps: [ 'jquery'],
			exports: 'jQuery.fn.plaxify'
		}
		//End plax plugin shim
		,
		'backstretch':{
			deps:['jquery'],
			exports:'jQuery.fn.backstretch'
		},
		'fittext':{
			deps:['jquery'],
			exports:'jQuery.fn.fittext'
		},
		'nprogress':{
			deps:['jquery'],
			exports:'jQuery.fn.nprogress'
		}
		
	},
	paths:{
		jquery:'js/jquery',
		collapse:'js/collapse',
		plax:'js/plax',
		transition:'js/transition',
		backstretch:'js/jquery.backstretch',
		fittext:'js/jquery.fittext',
		nprogress:'js/nprogress'
	}
});
require(['jquery','collapse','backstretch','plax','fittext','nprogress'],function($,col,back,plax,fit,nprogress){
	nprogress.start();
	//alert('Whoops');

	$(document).ready(function(){
	//Document ready state

		
	$.backstretch('images/blur_green.jpg');
	$('.fa').plaxify();
	$.plax.enable();
	
	//Fittext Plugin
	$(".rs-h1").fitText(1.2,{ minFontSize: '20px', maxFontSize: '40px' });
	$(".rs-h3").fitText(2.2,{ minFontSize: '20px', maxFontSize: '32px'});
	//Back Struch Plugin
	nprogress.done();
	//End Document Ready
	});
});