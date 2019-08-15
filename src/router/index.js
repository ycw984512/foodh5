import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '*', 
      redirect:'/'
    },
    {
      path: '/',
      name: 'footIndex',
      component: resolve => require(['@/components/footIndex'], resolve),
      meta: {
        title: "首页",    
        show: true ,
        allow: true,              
    }
  
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['@/components/mine'], resolve),
      meta:{
        title: "我的",    
        show: true  ,
        allow: true,                     
    }
    },
    {
      path: '/foodSearch',
      name: 'foodSearch',
      component: resolve => require(['@/components/foodSearch'], resolve),
      meta:{
        title: "供餐查询",    
        show: false  ,
        allow: true,                     
    }
    },
    {
      path: '/goFood',
      name: 'goFood',
      component: resolve => require(['@/components/goFood'], resolve),
      meta:{
        title: "立即就餐",    
        show: false   ,
         
    }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/components/order'], resolve),
      meta:{
        title: "预约",    
        show: false               
    }
    },
    {
      path: '/specialOrder',
      name: 'specialOrder',
      component: resolve => require(['@/components/specialOrder'], resolve),
      meta:{
        title: "特殊预约",    
        show: false               
    }
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: resolve => require(['@/components/myOrder'], resolve),
      meta:{
        title: "我的预约",    
        show: false               
    }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve),
      meta:{
        title: "登录",    
        show: false               
    }
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/components/about'], resolve),
      meta:{
        title: "关于",    
        show: false ,
        allow: true,                       
    }
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: resolve => require(['@/components/evaluate'], resolve),
      meta:{
        title: "我的评价",    
        show: false               
    }
    },
    {
      path: '/whiteEvaluate',
      name: 'whiteEvaluate',
      component: resolve => require(['@/components/whiteEvaluate'], resolve),
      meta:{
        title: "填写评价",    
        show: false               
    } 
    },
    {
      path: '/orderSuccess',
      name: 'orderSuccess',
      component: resolve => require(['@/components/orderSuccess'], resolve),
      meta:{
        title: "就餐结果",    
        show: false               
    }
    },
    {
      path: '/orderFail',
      name: 'orderFail',
      component: resolve => require(['@/components/orderFail'], resolve),
      meta:{
        title: "就餐结果",    
        show: false               
    }
    },
    {
      path: '/responsibility',
      name: 'responsibility',
      component: resolve => require(['@/components/responsibility'], resolve),
      meta:{
        title: "违约责任",    
        show: false               
    }
    },
    {
      path: '/orderTime',
      name: 'orderTime',
      component: resolve => require(['@/components/orderTime'], resolve),
      meta:{
        title: "预约时间",    
        show: false               
    }
    },
    {
      path: '/orderResult',
      name: 'orderResult',
      component: resolve => require(['@/components/orderResult'], resolve),
      meta:{
        title: "预约结果",    
        show: false               
    }
    },
    {
      path: '/specialTime',
      name: 'specialTime',
      component: resolve => require(['@/components/specialTime'], resolve),
      meta:{
        title: "特殊预约",    
        show: false               
    }
    },
    {
      path: '/specialResult',
      name: 'specialResult',
      component: resolve => require(['@/components/specialResult'], resolve),
      meta:{
        title: "预约结果",    
        show: false               
    }
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: resolve => require(['@/components/orderDetail'], resolve),
      meta:{
        title: "预约详情",    
        show: false               
    }
    },
    {
      path: '/adminApproval',
      name: 'adminApproval',
      component: resolve => require(['@/components/adminApproval'], resolve),
      meta:{
        title: "预约审核",    
        show: false               
    }
    },
    {
      path: '/adminIndex',
      name: 'adminIndex',
      component: resolve => require(['@/components/adminIndex'], resolve),
      meta:{
        title: "首页",    
        show: false               
    }
    },
    {
      path: '/adminFoodSearch',
      name: 'adminFoodSearch',
      component: resolve => require(['@/components/adminFoodSearch'], resolve),
      meta:{
        title: "供餐查询",    
        show: false               
    }
    },
    {
      path: '/adminEvaluate',
      name: 'adminEvaluate',
      component: resolve => require(['@/components/adminEvaluate'], resolve),
      meta:{
        title: "用户评价",    
        show: false               
    }
    },
    {
      path: '/adminCommonOrder',
      name: 'adminCommonOrder',
      component: resolve => require(['@/components/adminCommonOrder'], resolve),
      meta:{
        title: "普通预约",    
        show: false               
    }
    },
    {
      path: '/adminMine',
      name: 'adminMine',
      component: resolve => require(['@/components/adminMine'], resolve),
      meta:{
        title: "我的",    
        show: false               
    }
    }
  ]
})
