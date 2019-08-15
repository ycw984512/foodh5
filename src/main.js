// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import filters from './filters/index'
import  FastClick  from  'fastclick'

FastClick.attach(document.body);

import { Toast } from 'vant';

Vue.use(Toast);

require('../static/css/base.css'); //引入全局的base文件

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))   //注册全局过滤器



Vue.prototype.$http=axios;



//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
// 每次发送请求之前header携带token
if (store.state.token) {
  config.headers.Authorization = store.state.token;
}
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (res) { //配置请求回来的信息

  if (res.data.error_code === 'Invalid Token' || (res.data.msg == '10001')) { // token过期，应跳转至登录
    Toast({      
      message: '登录已失效',      
      duration: 1000,      
      forbidClick: true    
     });  

     store.commit('loginOut')    //清空vuex和localstoal里面的token
     router.push('/login')            //跳转到登录页面
    return Promise.reject(res)
} else {
  return res;
}

}, function (err) {
  return Promise.reject(err);
});


router.beforeEach((to,from,next)=>{
  console.log(to)

  if (store.state.token) {    //已登录
    next()    // 程序正常继续运行
  }else{
    if(to.path == "/login"){   //去登录页
      next()   // 程序正常继续运行
     }else if(to.matched.some(record => record.meta.allow)){  //可以不需要登录 
      next()   //程序正常继续运行
    }else{
        //没有登录，而且不被允许不需要登录，而且不是登录页的情况下
        next({
          path:"/login",       // 跳转到login页面
          query:{fullPath: to.fullPath}   // 记录要进入的目标地址
        })
    }
  }


  if (to.meta.title) {
    document.title = to.meta.title
}
next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
