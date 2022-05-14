import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
// import 'vue-fullpage.js/dist/style.css'
// import VueFullPage from 'vue-fullpage/dist/vue-fullpage.es'

import 'fullpage.js/dist/fullpage.js'
import 'fullpage.js/dist/fullpage.css'




const app = createApp(App)
// app.use(VueFullPage)
app.mount('#app')
