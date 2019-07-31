<template>
  <div class="wrap">
    <!-- <nav-bar title="供餐查询" /> -->

    <van-swipe @change="onChange" :loop="true">
      <van-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item" alt width="100%" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>
   
    <div class="border_wrap">
      <div class="border_left"></div>
      <div class="middle">{{current+1}}/{{imgs.length}}</div>
      <div class="border_right"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// import { NavBar } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Button } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      imgs: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564394427133&di=7e2ee9c75a996b1444d72e8e22ce9728&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e05f556834760000012b2094de28.jpg%40900w_1l_2o_100sh.jpg",
        "https://image.zbcdb.com/20190726/cff8bed01b7e154d33032f3cb7b43b14.png",
        "https://image.zbcdb.com/20190726/214eaed4254b01531df67652b1087bc2.png",
        "https://image.zbcdb.com/20190726/0066b84f64daa17c6a14960223765266.png",
        "https://image.zbcdb.com/20190726/cff8bed01b7e154d33032f3cb7b43b14.png",
        "https://image.zbcdb.com/20190726/214eaed4254b01531df67652b1087bc2.png",
        "https://image.zbcdb.com/20190726/0066b84f64daa17c6a14960223765266.png",
        "https://image.zbcdb.com/20190726/cff8bed01b7e154d33032f3cb7b43b14.png",
        "https://image.zbcdb.com/20190726/214eaed4254b01531df67652b1087bc2.png"
      ],
      current: 0
    };
  },
  mounted() {
    console.log(this.homecasual);
  },
  components: {
    // NavBar: NavBar
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanButton: Button
  },
  computed: {
    ...mapState(["homecasual"])
    // homecasual(){
    //   return this.$store.state.homecasual
    // }
  },
  watch: {},
  methods: {
    onChange(index) {
      console.log("当前 Swipe 索引：" + index);
      this.current = index;
    }
  }
};
</script>
<style scoped>
.wrap {
  position: relative;
}
.van-swipe {
  height: 5.2rem;
  width: 92%;
  margin: 0.2rem auto;
}

.van-swipe img {
  height: 100%;
}
.border_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.border_left {
  width: 0.8rem;
  height: 0.01rem;
  background: #333;
  margin-right: 0.1rem;
}
.middle {
  font-size: 0.18rem;
}
.border_right {
  width: 0.8rem;
  height: 0.01rem;
  background: #333;
  margin-left: 0.1rem;
}
</style>
<style>
.btn {
  position: absolute;
  top: 4.6rem !important;
  left: 1.5rem !important;
}
</style>
