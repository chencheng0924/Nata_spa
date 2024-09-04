import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import dayjs from "dayjs";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/reset.css";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import "./assets/font.css";
import emailjs from "@emailjs/browser";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(dayjs);
app.use(VueSplide);
app.use(ElementPlus);
app.use(Vue3Lottie);
app.use(emailjs);

app.mount("#app");
