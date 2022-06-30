import { createApp } from "vue";
import ViewUIPlus from "view-ui-plus";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "view-ui-plus/dist/styles/viewuiplus.css";
import { get, post, put } from "./services/request";
const app = createApp(App);
app.config.globalProperties.$get = get;
app.config.globalProperties.$post = post;
app.config.globalProperties.$put = put;
app.use(router).use(store).use(ViewUIPlus).mount("#app");
