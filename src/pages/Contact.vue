<template>
	<div class="row">
		<h1>Contact Me</h1>
		<div class="col-md-5">
			<validator name="validation1">
			<form class="form-horizontal" novalidate>
				<div class="form-group">
					<label for="" class="col-md-4 control-label">Name</label>
					<div class="col-md-8">
						<input type="text" class="form-control" v-model="contact.name" v-validate:name="{ required: true, minlength: 3 }">
						<span v-if="$validation1.name.required" class="help-block">Name required</span>
						<span v-if="$validation1.name.minlength" class="help-block">Name at least 3 characters long?</span>
					</div>
				</div>
				<div class="form-group">
					<label for="" class="col-md-4 control-label" >Email</label>
					<div class="col-md-8">
						<input type="email" class="form-control" v-model="contact.email">
					</div>
				</div>
				<div class="form-group">
					<label for="" class="col-md-4 control-label">Phone</label>
					<div class="col-md-8">
						<input type="text" class="form-control" v-model="contact.phone">
					</div>
				</div>
				<div class="form-group">
					<label for="" class="col-md-4 control-label" >Message</label>
					<div class="col-md-8">
						<textarea  class="form-control" v-model="contact.message"></textarea>
					</div>
				</div>

				<div class="form-group">
					
					<div class="col-md-8 col-md-offset-4">

						
							<button class="btn btn-block btn-success" v-on:click="sendContact">Send</button>
						

					</div>
				</div>

			</form>
			</validator>
		</div>
		<div class="col-md-7">

			{{contact | json}}
			
		</div>
	</div>
</template>

<style type="sass">
	.heading{
		color:#f56;
	}
</style>

<script>

var firebase = require('firebase');

 // Initialize Firebase
  var config =  require('../config/firebase').default;

  var FirebaseApp = firebase.initializeApp(config);

  var fdb = FirebaseApp.database();

  var contactInterest = fdb.ref('contacts');

  var tnotify = require('../util/notifier/dist/js/notifier.min');
  var tnotifyCss = require('../util/notifier/dist/css/notifier.min.css');


	export default {
		data(){

			return {

				contact:{
					name:"Sarath",
					email:"sarath@moovooz.com",
					phone:"9495504504",
					message:"Hello"
				}

			};

		},
		ready(){
			tnotify.show('Hello!' , 'I am a default notification.', '', '', 0);
		},
		methods:{
			sayHello(e){
				alert('Hello');
				e.preventDefault();
			},
			sendContact(e){
				var self = this;
				var contact = self.contact;
				contactInterest.push(contact)

					.then(function(data){
						console.log(data);
						tnotify.show('Well Done!', 'You just submit your details successfuly.', 'success', '', 3000);
						
						self.resetForm();
					});

				e.preventDefault();

			},
			resetForm:function(){

				this.contact = {
					name:"",
					email:"",
					phone:"",
					message:""
				};

			}
		}
	}
</script>