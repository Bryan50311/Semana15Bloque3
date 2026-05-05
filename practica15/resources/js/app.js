import './bootstrap';
import { createApp } from 'vue';
import saludo from './components/saludo.vue';
import convertidorTemp from './components/convertidorTemp.vue';

const app = createApp({});
app.component('saludo', saludo);
app.component('convertidorTemp', convertidorTemp);
app.mount('#app');
