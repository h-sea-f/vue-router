
import VueRouter from 'vue-router'
import Main from './components/Main'
import Home from './components/Home'
import ToDoList from './components/ToDoList'
import My from './components/My'
import Vue from "vue";
Vue.use(VueRouter)
const routes = [
    {path:'/',component:Main},
    {path:'/home',component:Home},
    {path:'/to-do-list',component:ToDoList},
    {path:'/my',component:My}
];
export default new VueRouter({
    routes,
});