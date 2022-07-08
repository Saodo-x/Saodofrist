import Vue from "vue";
import VueRouter from "vue-router";
import AppTest3 from "@/pages/app-test3";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes: [
        {
            path: '/app-test3',
            component: AppTest3,
        },
        // {
        //     redirect: '/',
        //     component: AppTest3
        // }
    ]
})