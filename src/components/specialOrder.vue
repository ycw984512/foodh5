<template>
  <div class="wrap">
    <div class="wrap_title">选择就餐时间</div>
    <div class="choose_time" @click="$router.push('/specialTime')">点击选择时间</div>
    <div class="beizhu">备注</div>
    <van-field v-model="message" type="textarea" placeholder="请输入留言" rows="5" autosize />
    <div class="sure_Time">选择就餐时间</div>
  </div>
</template>
<script>
import { Field } from "vant";
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {},
  components: {
    vanField: Field 
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.wrap {
  font-size: 0.18rem;
}
.wrap .wrap_title {
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.2rem;
  color: #999;
}
.wrap .choose_time {
  width: 80%;
  border: 1px solid #ccc; 
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  margin: 0.3rem auto;
  font-size: 0.16rem;
  color: red;
}

.wrap .sure_Time {
  width: 36%;
  background: #1b82d1;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  margin: 1.2rem auto;
  font-size: 0.14rem;
  color: #fff;
  border-radius: 0.1rem;
}

.wrap .beizhu {
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.2rem;
  color: #999;
}
</style>
<style>
textarea {
  height: 1.2rem !important;
  border: 1px solid #ccc !important;
  width: 100% !important;
  font-size: 0.14rem;
  overflow-y: hidden
}
.van-field__body {
  width: 88% !important;
  margin-right: 0 !important;
  margin-left: 0.2rem !important;
}

textarea::-webkit-input-placeholder{
   height: 1.2rem;line-height:  1.2rem;text-align: center;
}
textarea:-moz-placeholder{
    height: 1.2rem;line-height:  1.2rem;text-align: center;
}
textarea::-moz-placeholder{
    height: 1.2rem;line-height:  1.2rem;text-align: center;
}
textarea:-ms-input-placeholder{
     height: 1.2rem;line-height:  1.2rem;text-align: center;
}

</style>
