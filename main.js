require.config({
    baseUrl: '/js',
    paths: {
        jquery: 'jquery',
        plax:'vendor/plax'

    },
    shim:{
    	'plax': {
            deps: ['jquery'],
            exports: 'jQuery.fn.plaxify'
        }
    }
});
require(['app'],function(app){

});