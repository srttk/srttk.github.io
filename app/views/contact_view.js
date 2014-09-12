define(['backbone',
	'text!templates/contact_tpl.html','nprogress','clickify'],
	function(Backbone,html_tpl,nprogress){
	var ContactView=Backbone.View.extend({
		template:_.template(html_tpl),
		initialize:function(){
			this.model.on('change',this.render,this);
		},
		events:{
			'click button':'send',
			'submit':'send'
		},
		render:function(){

			$(this.$el).html(this.template(this.model.toJSON()));
			$(document).clickify();
			return this;
		},
		send:function(){
			name=$("#name").val();
			email=$("#email").val();
			phone=$("#phone").val();
			note=$("#note").val();
			this.model.set('note','Cool note');
			data={'name':name,'email':email,'phone':phone,'note':note};
			this.model.save(data,{success:function(a,b,c){
				//a=Current model
				//b=response data
				//a.set('sended',true);
				a=b;
			},
			error:function(d){
				alert("Error communication");
			},
			beforeSend:function(){
				$("#submit").attr('disabled','disabled').text("Sending..");
				nprogress.start();
				
			},
			complete:function(){
				nprogress.done();
				$("#submit").removeAttr('disabled').text("Send");
			}
		});
			
		}
	});

	return ContactView;
});