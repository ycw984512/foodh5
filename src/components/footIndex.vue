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

import Toast from "e:/杨超文/我的一些东西/微信小程序/myLife/miniprogram_npm/vant-weapp/toast/toast";
export default {
  data() {
    return {
      imgs: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565407765845&di=f472a6442aba46959fb68a33baccc8b4&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F55%2F42%2F16pic_5542988_b.jpg",
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
    // console.log(this.homecasual);
  },
  components: {
    NavBar: NavBar,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,

  },
  computed: {
    ...mapState(["homecasual"]),
    // homecasual(){
    //   return this.$store.state.homecasual
    // },
    geTime() {
      var nowDate = new Date();
      var times = Number(nowDate.getTime()); //当前时间毫秒数
      var nowDate = new Date(times);
      var year = nowDate.getFullYear(); //当前年份
      var month = nowDate.getMonth() + 1; //当前月份
      var date = nowDate.getDate(); //当前几号
      var hours = nowDate.getHours(); //当前几小时
      var minutes = nowDate.getMinutes(); //当前几分钟
      var seconds = nowDate.getSeconds(); //当前几秒钟
      var milliseconds = nowDate.getMilliseconds(); //当前几毫秒

      month = month > 9 ? month : "0" + month; //小于9的话前面加个0
      date = date > 9 ? date : "0" + date; //小于9的话前面加个0
      hours = hours > 9 ? hours : "0" + hours; //小于9的话前面加个0
      minutes = minutes > 9 ? minutes : "0" + minutes; //小于9的话前面加个0
      seconds = seconds > 9 ? seconds : "0" + seconds; //小于9的话前面加个0
      //  return year+'-'+month+'-'+date+" "+hours+":"+minutes+":"+seconds+" "+milliseconds;
      return year + "/" + month + "/" + date;
    },

    getHours() {
      var nowDate = new Date();
      var hours = nowDate.getHours(); //当前几小时
      hours = hours > 9 ? hours : "0" + hours; //小于9的话前面加个0
      if (hours >= 12 && hours <= 14) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {},
  methods: {
    goPage(item) {
      if (item.page == "/order") {
        console.log("进预约就餐页面", this.getHours);
        if (this.getHours) {
          this.$router.push("/order");
        } else {
          this.$toast.fail({
            message: "12:00-14:00才进行开放",
            duration: 1000,
          forbidClick: true, // 禁用背景点击

          });
        }
      } else {
        this.$router.push("" + item.page + "");
      }
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
.van-swipe {
  height: 1.75rem;
}
.van-swipe img {
  height: 1.75rem;
}
</style>
