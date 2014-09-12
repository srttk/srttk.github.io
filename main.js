require.config({
	baseUrl:'app/',
	paths:{
		jquery:'vendor/jquery-1.10.2.min',
		backbone:'vendor/backbone-min',
		underscore:'vendor/underscore-min',
		text:'vendor/text',
		Modernizr:'vendor/modernizr-2.6.2.min',
		collapse:'vendor/collapse',
		plax:'vendor/plax',
		transition:'vendor/transition',
		backstretch:'vendor/jquery.backstretch',
		fittext:'vendor/jquery.fittext',
		nprogress:'vendor/nprogress',
		clickify:'vendor/clickify'
	},
	shim:{
		'Modernizr':{
			exports:'Modernizr'
		},
		'colory':{
			deps:['jquery'],
			exports:'jQuery.fn.colory'
		},
		'backbone':{
			deps:['underscore','jquery'],
			exports:'Backbone'
		},
		'underscore':{
			exports:'_'
		},
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
		},
		'clickify':{
			deps:['jquery','backbone'],
			exports:'jQuery.fn.clickify'
		}
	}
});
require(['jquery','routes','backstretch','collapse'],function($,AppRouter,Backstretch){
	$.backstretch('images/blur_green.jpg');
	$.backstretch('images/waves.gif');

	$(document).ready(function(){
		var app=new AppRouter();
		app.start();
		
	});
});