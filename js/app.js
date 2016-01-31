(function(){
	console.log('Hai ');

	// 
	var Home = Vue.extend({
		template:$("#tpl-home").html()

	});

	var Contact = Vue.extend({
    template: $("#tpl-contact").html()
	});

	var Projects = Vue.extend({
		template:$("#tpl-projects").html()
	});

	var Tools = Vue.extend({
		template:$("#tpl-tools").html()
	});

	// Creating router
	var router = new VueRouter();

	router.map({
    '/contact': {
        component: Contact
    },
    '/': {
        component: Home
    },
    '/projects':{
    	component:Projects
    },
    '/tools':{
    	component:Tools
    }
	});

	// Creating app
	var App = Vue.extend({});


	router.start(App,"#app");
})();