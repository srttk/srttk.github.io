<template>
	<div class="row">
		<h1>Contact Me</h1>
		<div class="col-md-5">
			<validator name="validation1">
			<form class="form-horizontal">
				<div class="form-group">
					<label for="" class="col-md-4 control-label">Name</label>
					<div class="col-md-8">
						<input type="text" class="form-control" v-model="contact.name" v-validate:name="{ required: true, minlength: 8 }">
						<span v-if="$validation1.name.required" class="help-block">Name required</span>
					</div>
				</div>
				<div class="form-group">
					<label for="" class="col-md-4 control-label" >Email</label>
					<div class="col-md-8">
						<input type="text" class="form-control" v-model="contact.email">
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
	
	export default {
		data(){

			return {

				contact:{
					name:"",
					email:"",
					phone:"",
					message:""
				}

			};

		},
		methods:{
			sayHello(e){
				alert('Hello');
				e.preventDefault();
			},
			sendContact(e){

				e.preventDefault();

			}
		}
	}
</script>