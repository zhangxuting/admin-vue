import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Home from '@/views/home';
import Users from '@/views/users/users';
Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component:  Home,
      children: [
        //用户列表
        {
          name: 'users',
          path: '/users',
          component: Users
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: Login
     
    }
  ]
});

