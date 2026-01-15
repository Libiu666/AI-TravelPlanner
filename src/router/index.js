import { createWebHashHistory, createRouter } from "vue-router";
import Home from '../page/home/home.vue'
import GoodsDetails from '@/page/goodsDetails/index.vue'
import ComplaintPage from '@/page/complaintPage/index.vue'

const routes=[
    {
        //聊天界面
        path:'/',
        component:Home,
    },
    {
        //商品详情页
        path:'/goodsDetails',
        component:GoodsDetails,
    },
    {   //投诉页面
        path:'/complaintPage',
        component:ComplaintPage,
    }
]
//路由实例通过createRouter创建
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
//导出，用于main.js注册
export default router; 