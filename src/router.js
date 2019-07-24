import VueRouter from 'vue-router'
import Main from './views/Main'
import Home from './views/Home'
import ToDoList from './components/ToDoList'
import My from './components/My'
import Vue from "vue";

Vue.use(VueRouter)
const routes = [
    {path: '/', component: Main},
    {
        path: '/home', component: Home,
        children: [{path:'',component:ToDoList},{path: '/to-do-list', component: ToDoList}, {path: '/my', component: My}]
    },

];
export default new VueRouter({
    routes,
});