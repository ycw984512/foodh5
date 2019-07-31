<template>
  <div class="wrap">
    <van-tabs v-model="active" swipeable color="#1b82d1">
      <van-tab title="预约成功">
        <div class="order_success" v-for="(item,index) in list1" :key="index">
          <div class="success_title">
            <div class="title_top" @click="goOrderDetail1(item)">{{item.name}}</div>
            <div class="title_bot">2019年10月1日 午餐</div>
          </div>
          <div class="success_show">预约成功</div>
          <div class="success_btn">取消</div>
        </div>
      </van-tab>

      <van-tab title="待审核">
        <div class="order_success" v-for="(item,index) in list2" :key="index">
          <div class="success_title">
            <div class="title_top"  @click="goOrderDetail2(item)">{{item.name}}</div>
            <div class="title_bot">2019年10月1日 午餐</div>
          </div>
          <div class="success_show1">审核中</div>
        </div>
      </van-tab>

      <van-tab title="已取消">
        <div class="order_success" v-for="(item,index) in list3" :key="index">
          <div class="success_title">
            <div class="title_top"  @click="goOrderDetail3(item)">{{item.name}}</div>
            <div class="title_bot">2019年10月1日 午餐</div>
          </div>
          <div class="show_btn">重新预约</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
export default {
  data() {
    return {
      active: 0,
      list1:[
        {
          name:"食堂1",
          id:1
        },{
          name:"食堂2",
          id:2
        },{
          name:"食堂3",
          id:3
        },
      ],
       list2:[
        {
          name:"食堂1",
          id:1
        },{
          name:"食堂2",
          id:2
        },{
          name:"食堂3",
          id:3
        }
      ],
       list3:[
        {
          name:"食堂1",
          id:1
        },{
          name:"食堂2",
          id:2
        },{
          name:"食堂3",
          id:3
        },
      ]
    };
  },
  mounted() {},
  components: {
    vanTabs: Tabs,
    vanTab: Tab
  },
  computed: {},
  watch: {},
  methods: {
    goOrderDetail1(item){
      this.$router.push({
        path:'/orderDetail',
        query:{
          type:1,
          id:item.id
        }
      })
    },
    goOrderDetail2(item){
       this.$router.push({
        path:'/orderDetail',
        query:{
          type:2,
          id:item.id
        }
      })
    },
    goOrderDetail3(item){
       this.$router.push({
        path:'/orderDetail',
        query:{
          type:3,
          id:item.id
        }
      })
    },
  }
};
</script>
<style scoped>
.wrap {
  font-size: 0.18rem;
}
.order_success {
  display: flex;
  margin-top: 0.2rem;
  padding: 0 0.28rem;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
}

.order_success .success_title .title_top {
  font-size: 0.16rem;
}
.order_success .success_title .title_bot {
  margin-top: 0.1rem;
  color: #999;
}
.order_success .success_show {
  position: absolute;
  top: 0.1rem;
  right: 0.8rem;
  color: red;
  font-size: 0.14rem;
}
.order_success .success_btn {
  position: absolute;
  top: 0.1rem;
  right: 0.3rem;
  color: #999;
  font-size: 0.14rem;
}
.order_success .success_show1 {
  position: absolute;
  top: 0.1rem;
  right: 0.5rem;
  color: red;
  font-size: 0.14rem;
}
.show_btn {
  position: absolute;
  top: 0.06rem;
  right: 0.4rem;
  font-size: 0.13rem;
  background: #1b82d1;
  color: #fff;
  padding: 0.08rem 0.18rem;
  border-radius: 0.1rem
}
</style>
<style>
.van-tabs__wrap {
  border-bottom: 1px solid #999 !important;
  padding-bottom: 0.1rem !important;
}
</style>
