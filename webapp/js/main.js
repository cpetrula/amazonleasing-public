import "/css/main.scss";
import Vue from "vue";
import '/js/import-jquery.js';
import "bootstrap";
import fontawesome from '@fortawesome/fontawesome-free/js/all';
import VueRouter from 'vue-router'
import routes from '/js/routes.js'
import App from '/app.vue'

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