<template>
  <div class="wrap">
    <div class="wrap_title">选择就餐时间( {{getNowTime}} )</div>

    <van-radio-group v-model="radio">
      <van-radio name="1">预约午餐 <span v-if="type==1" style="color:red">(已满)</span></van-radio>
      <van-radio name="2">预约晚餐 <span v-if="type==2" style="color:red">(已满)</span> </van-radio>
    </van-radio-group>

    <div class="submit">确定</div>
  </div>
</template>
<script>
import { RadioGroup, Radio } from "vant";

export default {
  data() {
    return {
      time: "",
      radio: "1",
      type:1
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
  methods: {}
};
</script>
<style scoped>
.wrap_title {
  font-size: 0.16rem;
  margin-top: 0.3rem;
  margin-left: 0.1rem;
}
.van-radio-group{
display: flex;
justify-content:space-around;
margin-top: 0.5rem;
}


.submit{
    width: 1.3rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    background: #1b82d1;
    border-radius: 0.1rem;
    color: #fff;  
    margin:1rem auto;  
    font-size: 0.16rem;
}	

</style>
