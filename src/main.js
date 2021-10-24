import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const { obj } = require('./commonjs/test');

console.log(obj.sum(1, 2));

const app = createApp(App);
app.use(router);
app.mount('#app');
