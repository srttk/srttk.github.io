(function(){
	console.log('Hai ');

	// Creating components
	var Contact = Vue.extend({
    template: '<p>This is c!ontact page</p>'
	});

	// Creating router
	var router = new VueRouter();

	router.map({
    '/contact': {
        component: Contact
    },
    '/home': {
        component: Contact
    }
	});

	// Creating app
	var App = Vue.extend({});


	router.start(App,"#app");
})();