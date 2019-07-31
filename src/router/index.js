import Vue from 'vue'
import Router from 'vue-router'
import footIndex from '@/components/footIndex'
import mine from '@/components/mine'
import foodSearch from '@/components/foodSearch'
import order from '@/components/order'
import specialOrder from '@/components/specialOrder'
import myOrder from '@/components/myOrder'
import login from '@/components/login'
import about from '@/components/about'
import evaluate from '@/components/evaluate'
import whiteEvaluate from '@/components/whiteEvaluate'
import orderSuccess from '@/components/orderSuccess'
import orderFail from '@/components/orderFail'
import responsibility from '@/components/responsibility'
import orderTime from '@/components/orderTime'
import orderResult from '@/components/orderResult'
import specialTime from '@/components/specialTime'
import specialResult from '@/components/specialResult'
import orderDetail from '@/components/orderDetail'
import adminApproval from '@/components/adminApproval'
import adminIndex from '@/components/adminIndex'
import adminFoodSearch from '@/components/adminFoodSearch'

import adminEvaluate from '@/components/adminEvaluate'
import adminCommonOrder from '@/components/adminCommonOrder'
import adminMine from '@/components/adminMine'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'footIndex',
      component: footIndex,
      meta: {
        title: "首页",    
        show: true               
    }
  
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{
        title: "我的",    
        show: true               
    }
    },
    {
      path: '/foodSearch',
      name: 'foodSearch',
      component: foodSearch,
      meta:{
        title: "供餐查询",    
        show: false               
    }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta:{
        title: "预约",    
        show: false               
    }
    },
    {
      path: '/specialOrder',
      name: 'specialOrder',
      component: specialOrder,
      meta:{
        title: "特殊预约",    
        show: false               
    }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder,
      meta:{
        title: "我的预约",    
        show: false               
    }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        title: "登录",    
        show: false               
    }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{
        title: "关于",    
        show: false               
    }
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate,
      meta:{
        title: "我的评价",    
        show: false               
    }
    },
    {
      path: '/whiteEvaluate',
      name: 'whiteEvaluate',
      component: whiteEvaluate,
      meta:{
        title: "填写评价",    
        show: false               
    } 
    },
    {
      path: '/orderSuccess',
      name: 'orderSuccess',
      component: orderSuccess,
      meta:{
        title: "就餐结果",    
        show: false               
    }
    },
    {
      path: '/orderFail',
      name: 'orderFail',
      component: orderFail,
      meta:{
        title: "就餐结果",    
        show: false               
    }
    },
    {
      path: '/responsibility',
      name: 'responsibility',
      component: responsibility,
      meta:{
        title: "违约责任",    
        show: false               
    }
    },
    {
      path: '/orderTime',
      name: 'orderTime',
      component: orderTime,
      meta:{
        title: "预约时间",    
        show: false               
    }
    },
    {
      path: '/orderResult',
      name: 'orderResult',
      component: orderResult,
      meta:{
        title: "预约结果",    
        show: false               
    }
    },
    {
      path: '/specialTime',
      name: 'specialTime',
      component: specialTime,
      meta:{
        title: "特殊预约",    
        show: false               
    }
    },
    {
      path: '/specialResult',
      name: 'specialResult',
      component: specialResult,
      meta:{
        title: "预约结果",    
        show: false               
    }
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail,
      meta:{
        title: "预约详情",    
        show: false               
    }
    },
    {
      path: '/adminApproval',
      name: 'adminApproval',
      component: adminApproval,
      meta:{
        title: "预约审核",    
        show: false               
    }
    },
    {
      path: '/adminIndex',
      name: 'adminIndex',
      component: adminIndex,
      meta:{
        title: "首页",    
        show: false               
    }
    },
    {
      path: '/adminFoodSearch',
      name: 'adminFoodSearch',
      component: adminFoodSearch,
      meta:{
        title: "供餐查询",    
        show: false               
    }
    },
    {
      path: '/adminEvaluate',
      name: 'adminEvaluate',
      component: adminEvaluate,
      meta:{
        title: "用户评价",    
        show: false               
    }
    },
    {
      path: '/adminCommonOrder',
      name: 'adminCommonOrder',
      component: adminCommonOrder,
      meta:{
        title: "普通预约",    
        show: false               
    }
    },
    {
      path: '/adminMine',
      name: 'adminMine',
      component: adminMine,
      meta:{
        title: "我的",    
        show: false               
    }
    }
  ]
})
