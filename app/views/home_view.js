define(["backbone","text!templates/home_tpl.html"],function(a,b){return a.View.extend({template:_.template(b),render:function(){$(this.$el).html(this.template({name:"Heoo"}));return this}})});
