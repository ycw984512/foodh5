<template>
  <div class="wrap">
    <!-- <nav-bar title="首页" /> -->

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in imgs" :key="index">
        <img :src="item" alt width="100%" />
      </van-swipe-item>
    </van-swipe>

    <div class="operaWrap">
      <div class="opera-item" v-for="(item, index) in operaList" :key="index" @click="goPage(item)">
        <img :src="item.icon" alt width="100%" />
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>

import { NavBar } from "vant";
import { mapState } from "vuex";
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      imgs: [
        "https://image.zbcdb.com/20190726/0066b84f64daa17c6a14960223765266.png",
        "https://image.zbcdb.com/20190726/cff8bed01b7e154d33032f3cb7b43b14.png",
        "https://image.zbcdb.com/20190726/214eaed4254b01531df67652b1087bc2.png"
      ],
      operaList: [
        {
          icon: "/static/images/food.png",
          title: "供餐查询",
          page: "/foodSearch"
        },
        {
          icon: "/static/images/food2.png",
          title: "预约就餐",
          page: "/order"
        },
        {
          icon: "/static/images/food3.png",
          title: "特殊就餐",
          page: "/specialOrder"
        },
        {
          icon: "/static/images/food4.png",
          title: "我的预约",
          page: "/myOrder"
        }
      ]
    };
  },
  mounted() {

    console.log(this.homecasual);
  },
  components: {
    NavBar: NavBar,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem
  },
  computed: {
    ...mapState(["homecasual"])
    // homecasual(){
    //   return this.$store.state.homecasual
    // }
  },
  watch: {},
  methods: {
    goPage(item) {
      this.$router.push("" + item.page + "");
    }
  }
};
</script>
<style scoped>

.van-nav-bar__title {
  font-weight: 700;
  font-size: 0.2rem;
}

.operaWrap {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.8rem;
}
.opera-item {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  height: 1.3rem;
}
.opera-item:nth-child(2n-1) {
  border-right: 0.05rem solid #999;
}
.opera-item img {
  width: 1rem;
  height: 1rem;
}
.opera-item div {
  font-size: 0.16rem;
}
</style>
