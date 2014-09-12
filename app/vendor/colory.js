// A Sample jQuery plugin
// Sarath
//Aug 31 2014
(function($){
		$.fn.colory=function(config){
			if(config){
				$(this).css('color',config);
			}
			else{
				$(this).css('color','red');	
			}
			
		}
})(jQuery);