<template>
  <div id="app">
    <router-view />
    <tabbar route fixed active-color='#1296db' v-if='this.$route.meta.show'>
      <tabbar-item replace to="/" icon="wap-home">首页</tabbar-item>
      <tabbar-item replace to="/mine" icon="user-o">我的</tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style scoped>
.van-tabbar{
  height: 0.6rem;
  border-top: 0.01rem solid #999
}

</style>
<style >
.van-tabbar-item__icon {
    position: relative;
    margin-bottom: 5px;
    font-size: 0.28rem;
}
.van-tabbar-item{
  font-size: 0.16rem;
}
*{
  font-size: 0.12rem;
}
</style>
