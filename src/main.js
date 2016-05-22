import Vue from 'vue'

import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'


import NavPublic from './components/nav-public'

// Pages
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'

//var style = require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

var btsCollapse = require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap');

var appStyle = require('./scss/app.scss');


Vue.use(VueRouter)
Vue.use(VueValidator)

var router = new VueRouter();


router.map({
    '/': {
        component: HomePage
    },
    '/contact':{
    	component:ContactPage
    }
})


var app =  Vue.extend({
	components:{
		'nav-public':NavPublic
	}
});

router.start(app,'#app')
/* eslint-disable no-new */
