// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'


require('../static/css/base.css'); //引入全局的base文件

Vue.config.productionTip = false;


Vue.prototype.$http=axios;



//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息

  return response;
}, function (error) {

  return Promise.reject(error);
});


router.beforeEach((to,from,next)=>{
  console.log(to)
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
