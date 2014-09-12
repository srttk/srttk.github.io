define(['backbone','text!templates/services_tpl.html'],function(Backbone,html_tpl){
	var ServicesView=Backbone.View.extend({
		render:function(){
			$(this.$el).html(html_tpl);
			return this;
		}
	});
	return ServicesView;
});