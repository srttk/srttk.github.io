(function(){
	console.log('Hai ');

	// 
	var Home = Vue.extend({
		template:$("#tpl-home").html()

	});

	var Contact = Vue.extend({
    template: $("#tpl-contact").html()
	});

	// Creating router
	var router = new VueRouter();

	router.map({
    '/contact': {
        component: Contact
    },
    '/': {
        component: Home
    }
	});

	// Creating app
	var App = Vue.extend({});


	router.start(App,"#app");
})();