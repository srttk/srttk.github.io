<template>
	<div class="st-jumbo">
		<h1>Hi I'm Sarath</h1>
		<p class="srt-sec-text">I build web based software that makes it easy to connect, share, explore and fun.
I love the web. I hope that you like too.</p>
	</div>
</template>

<script>

var Helpers = require('../util/helpers').default;


	export default{

		ready(){
			Helpers.setDocumentTitle("Saratonite :: Fullstack Developer :)");
		}

	}
</script>

<style type="sass">
	.st-jumbo{
		@extend .btn;
		padding: 10px;
	}

	.srt-sec-text{
		font-size: 1.5em;
	}

</style>
