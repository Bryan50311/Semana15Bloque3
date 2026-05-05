import './bootstrap';
import { createApp } from 'vue';
import saludo from './components/saludo.vue'

const app = createApp({});
app.component('saludo', saludo);
app.mount('#app');
