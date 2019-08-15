<template>
  <div class="wrap">
    <div class="wrap_title">
      选择就餐时段 
      <!-- {{getNowTime}} -->
      </div>

    <van-radio-group v-model="radio">
      <van-radio name="1">
        预约午餐
        <div v-show="type==1" style="color:red;position:relative;right:0.1rem;top:0.05rem">(已提前预约)</div>
      </van-radio>
      <van-radio name="2">
        预约晚餐
        <div v-show="type==2" style="color:red;right:0.1rem;top:0.05rem">(已提前预约)</div>
      </van-radio>
    </van-radio-group>

    <div class="submit" @click="goOrderType">确定</div>
  </div>
</template>
<script>
import { RadioGroup, Radio } from "vant";

export default {
  data() {
    return {
      time: "",
      radio: "1",
      type: 1
    };
  },
  mounted() {},
  components: {
    vanRadioGroup: RadioGroup,
    vanRadio: Radio
  },
  computed: {
    getNowTime() {
      var nowDate = new Date();
      var times = Number(nowDate.getTime()) + 86400000; //当前时间毫秒数
      var nowDate = new Date(times);
      var year = nowDate.getFullYear(); //当前年份
      var month = nowDate.getMonth() + 1; //当前月份
      var date = nowDate.getDate(); //当前几号
      var milliseconds = nowDate.getMilliseconds(); //当前几毫秒
      month = month > 9 ? month : "0" + month; //小于9的话前面加个0
      date = date > 9 ? date : "0" + date; //小于9的话前面加个0
      return year + "/" + month + "/" + date;
    }
  },
  watch: {},
  methods: {
    goOrderType() {
      if (this.radio == 1) {     //预约的午餐

        //写ajax请求发送给后台判断是否预约成功，根据返回的结果跳转到对应的预约成功或者预约失败的页面


        //假设预约成功的话

        this.$router.push('/orderSuccess')
        

      } else if (this.radio == 2) {   //预约的晚餐
        
        //写ajax请求发送给后台判断是否预约成功，根据返回的结果跳转到对应的预约成功或者预约失败的页面

        //假设预约失败

         this.$router.push('/orderFail')

      }
    }
  }
};
</script>
<style scoped>
.wrap_title {
  font-size: 0.16rem;
  margin-top: 0.3rem;
  margin-left: 0.1rem;
}
.van-radio-group {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  height: 0.6rem;
}

.submit {
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #1b82d1;
  border-radius: 0.1rem;
  color: #fff;
  margin: 1rem auto;
  font-size: 0.16rem;
}
</style>
<style>
.van-radio__label {
  position: relative;
  top: 0.08rem !important;
  display: block;
  height: 0.4rem;
}
</style>
