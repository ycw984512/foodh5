<template>
  <div class="wrap">
    <!-- <nav-bar title="我的" /> -->
    <div class="login_wrap">
      <img src="/static/images/food2.png" alt />
      <div @click='$router.push("/login")'>未登录</div>
    </div>
    <div class="mine_list" v-for="(item, index) in mineList" :key="index" @click="goPages(item)">
      <img :src="item.icon" alt />
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  data() {
    return {
       mineList: [  
        {
          icon: "/static/images/3.png",
          title: "我的预约",
          page:"/myOrder"
        },
        {
          icon: "/static/images/2.png",
          title: "我的评价",
          page:"/evaluate"
        },
        {
          icon: "/static/images/1.png",
          title: "关于",
          page:"/about"
        },
      ]
    };
  },
  mounted() {},
  components: {
    NavBar: NavBar
  },
  computed: {},
  watch: {},
  methods: {
   goPages(item){
     this.$router.push(""+item.page+"")
   }
  }
};
</script>
<style scoped>
.van-nav-bar__title {
  font-weight: 700;
  font-size: 0.2rem;
}
.login_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 0.8rem;
  background: #ccc;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.login_wrap img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
}
.login_wrap div {
  font-size: 0.16rem;
  color: red;
}
.mine_list{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 94%;
    margin:0.2rem auto;
    border-bottom: 0.01rem solid #999;
    padding-bottom: 0.18rem
}
.mine_list img{
    width: 0.21rem;
    height: 0.21rem;
}
.mine_list div{
    margin-left: 0.08rem;
    font-size: 0.16rem;
}
</style>
