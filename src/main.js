import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import ChooseTable from './components/administrator/ChooseTable.vue';
import UsersTable from './components/administrator/UsersTable.vue';
import PostTable from './components/administrator/PostTable.vue';
import TagTable from './components/administrator/TagTable.vue';
import MainPage from './components/user/LoadTable.vue'

const routes = [
  { path: '/', name: 'load-table', component: MainPage },
  { path: '/administrator', name: 'choose-table', component: ChooseTable },
  { path: '/users', name: 'users', component: UsersTable },
  { path: '/posts', name: 'posts', component: PostTable },
  { path: '/tags', name: 'tags', component: TagTable },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component('ChooseTable', ChooseTable);
app.mount('#app');

