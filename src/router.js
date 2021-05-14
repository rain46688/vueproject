import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Home2 from "./views/Home2";


//뷰 라우터를 사용하겠다는 의미
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/",component: Home},
        {path:"/h2",component: Home2}
    ]
})
export default router;