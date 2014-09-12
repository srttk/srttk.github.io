define(['backbone','text!templates/home_tpl.html'],function(Backbone,home_tpl){

	var HomeView=Backbone.View.extend({
		template:_.template(home_tpl),
		render:function(){
			$(this.$el).html(this.template({name:'Heoo'}));
			return this;
		}
	});
	return HomeView;
})