import Home from '@/pages/Home';
import * as VueRouter from 'vue-router';

const routes = [{
  path: '/',
  component: Home
}];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

