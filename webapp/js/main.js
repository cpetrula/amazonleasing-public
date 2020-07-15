import "/css/main.scss";
//import "uikit/dist/css/uikit.min.css"
import Vue from "vue";
//import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);


import VueRouter from 'vue-router'
import '/js/import-jquery.js'
import routes from '/js/routes.js'
import App from '/app.vue'

//Vue.use(Vuetify);

Vue.use(VueRouter);
window.router = new VueRouter({routes})

window.amazon = {
	Utils : require('/js/utils.js')
}

const app = new Vue({
  	router,
	//vuetify: new Vuetify(),
  	render: h => h(App)
}).$mount("#main-wrapper")