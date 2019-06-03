import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Work from './components/Work.vue';
import Blog from './components/Blog.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
  ]
});
