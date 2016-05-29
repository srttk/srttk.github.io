<template>
	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" v-link="{path:'/'}"> &gt;_Saratonite</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
				<li><a v-link="{ path: '/' }" title="Home page">Home</a></li>
				<li><a href="https://saratonite.github.io/resume" title="Resume">Resume</a></li>
        <li><a href="https://github.com/saratonite" title="Github">Github</a></li>
          <li><a v-link="{ path: '/contact' }" title="Contact me">Contact</a></li>
      </ul>

      <!-- <ul class="nav navbar-nav pull-right">
        <li><a v-link="{path:'/login'}">Login</a></li>
      </ul> -->


    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>

var collapse = "../../node_modules/bootstrap-sass/assets/javascript/bootstrap";

	export default{

	}
</script>
