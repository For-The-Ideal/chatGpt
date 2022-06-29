import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'view-ui-plus/dist/styles/viewuiplus.css'
const app = createApp(App)
app.use(router).use(store).use(ViewUIPlus).mount('#app')
