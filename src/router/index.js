import Vue from "vue";
import VueRouter from "vue-router";
import AppTest3 from "@/pages/app-test3";
import AppTest3_1 from "@/pages/app-test3.1";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes: [
        {
            path: '/app-test3',
            component: AppTest3,
        },
        {
            path: '/app-test3.1',
            component: AppTest3_1,
        }
        // {
        //     redirect: '/',
        //     component: AppTest3
        // }
    ]
})