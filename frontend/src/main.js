import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import vSelect from "vue-select";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(vSelect);
appInstance.use(router);
appInstance.use(QuillEditor)
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
