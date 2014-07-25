define(['jquery','underscore','Backbone','views/headerview','views/homeview','views/servicesview','views/aboutview','views/notfoundview'],function($,_,Backbone,HeaderView,HomeView,ServicesView,AboutView,NFView){
    var App=Backbone.Router.extend({
    	initialize:function(){
            console.log('This site is Created and maintained by Sarath');
            console.log('Visit http://saratonite.github.io  For more information.');
    		this.header=new HeaderView();
    	},
    	routes:{
    		'':'homePage',
            'home':'homePage',
            'services':'servicesPage',
    		'about':'aboutPage',
    		'*actions':'notfoundPage'
    	},
    	homePage:function(){
    		var home=new HomeView();
            this.markNav('home');
    	},
        servicesPage:function(){
            var services=new ServicesView();
            this.markNav('services');
        },
    	aboutPage:function(){
    		var about=new AboutView();
            this.markNav('about');
    	},
    	notfoundPage:function(actions){
            this.markNav('contact');
    		var nf=new NFView();
    	},
    	start:function(){
            //Pretty links
            $('a').click(function(e){
                e.preventDefault();
                Backbone.history.navigate(e.target.pathname,{trigger:true});
            });
            //
    		// Backbone.history.start();
            Backbone.history.start({pushState: true});
    	},
        markNav: function(route) {
            $(".masthead-nav").find('li').removeClass('active')
                .end()
                .find("a[href^='#" + route + "']").parent().addClass('active');
        }
    });
    return App;

});
