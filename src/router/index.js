import { createRouter,
    createWebHashHistory
 } from "vue-router";

import HomePage from "@/home/HomePage.vue";
import RobotBuilder from "@/build/RobotBuilder.vue";
import PartInfo from "@/parts/PartInfo.vue";

export default createRouter ({
    history: createWebHashHistory(),
    routes: [{
        path:'/',
        name: 'ГЛАВНАЯ',
        component: HomePage,
    }, {
        path: '/build',
        name: 'ПОСТРОЙ БОТА',
        component: RobotBuilder,
    },{
        path: '/parts',
        name: 'ЗАПЧАСТИ',
        component: PartInfo,
    
    }]
});