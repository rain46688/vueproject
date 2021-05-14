import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";


//뷰 라우터를 사용하겠다는 의미
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/",component: Home},
        {path:"/about",component: About}
    ]
})
export default router;