define(['backbone','text!templates/404.html'],
	function(Backbone,html_tpl){
	var NotFoundView=Backbone.View.extend({
		template:_.template(html_tpl),
		render:function(){
			$(this.$el).html(this.template({name:'Heoo'}));
			return this;
		}
	});
	return NotFoundView;
});