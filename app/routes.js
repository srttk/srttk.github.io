/* Copyright 2014 Sarath Kumar . All rights reserved. */
define(['backbone','Modernizr','models/contact_model',
	'views/contact_view',
	'views/home_view',
	'views/services_view',
	'views/notfound_view','clickify'],
	function(Backbone,Modernizr,ContactModel,
		ContactView,HomeView,ServicesView,View404){
	var AppRouter=Backbone.Router.extend({
		routes:{
			'':'index',
			'contact':'contact',
			'contact/edit':'editContact',
			'services':'servicesRoute',
			'*action':'notFound'

		},
		initialize:function(){
			this.contact=new ContactModel();
			this.contact.urlRoot="server/api/contacts/";
			this.homeview=new HomeView();

			
		},
		index:function(){
			$('#main').html(this.homeview.render().el);
			//this.prettyUrl();
			$(document).clickify();
		},
		contact:function(){
			
			this.contactview=new ContactView({model:this.contact});
			$('#main').html(this.contactview.render().el);
			//this.prettyUrl();
			$(document).clickify();
		},
		editContact:function(){
			$(document).clickify();
			this.contact.set('sended',false);
			Backbone.history.navigate('contact',{trigger:true});
			
		},
		servicesRoute:function(){
			var sv=new ServicesView();

			$('#main').html(sv.render().el);
			$(document).clickify();
		},
		notFound:function(){
			var nf=new View404();
			$('#main').html(nf.render().el);
			$(document).clickify();
		},
		start:function(){
		// Html5 Mode
			if(Modernizr.history){
				//Pretty links
            /*$('a').click(function(e){
                e.preventDefault();
                Backbone.history.navigate(e.target.pathname,{trigger:true});
            });*/
            
				Backbone.history.start({pushState: true});
				//Backbone.history.start();
			}
			else{
				Backbone.history.start();
			}
			
			
		// End Html5 Mode
		//Backbone.history.start();
			

		},
		markNav: function(route) {
            $("#master-nav").find('li').removeClass('active')
                .end()
                .find("a[href^='/" + route + "']").parent().addClass('active');
        },
        prettyUrl:function(){
        	// //Pretty links
            $('a').click(function(e){
                e.preventDefault();
                Backbone.history.navigate(e.target.pathname,{trigger:true});
            });
    		// //
        }
	});

	return AppRouter;

});