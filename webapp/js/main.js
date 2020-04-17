import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
import '/js/import-vue.js'
import VueRouter from 'vue-router'
import routes from '/js/routes.js'
import App from '/app.vue'

Vue.use(VueRouter);
window.router = new VueRouter({routes})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#main-wrapper")