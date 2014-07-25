define(['jquery','underscore','Backbone','text!../templates/services.html'],function($,_,Backbone,page_tpl){

	var ServicesView=Backbone.View.extend({

		el:$('#content'),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(page_tpl);
		}
	});

	return ServicesView;

});