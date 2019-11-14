import Vue from 'vue'
import App from './App.vue'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

Vue.use(VuePlyr)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
