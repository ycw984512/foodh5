<template>
  <div class="wrap">
    <div class="wrap_title">服务质量</div>
    <van-rate v-model="value" :count="5" :size="30" :gutter="30" />
    <van-field v-model="message" type="textarea" placeholder="请输入" rows="5" autosize />
    <div class="submit">确定提交</div>
  </div>
</template>
<script>
import { Rate } from "vant";
import { Field } from "vant";
export default {
  data() {
    return {
      value: 3,
      message: ""
    };
  },
  mounted() {},
  components: {
    vanRate: Rate,
    vanField: Field
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.wrap_title { 
  margin: 0.2rem 0 0.2rem 0.2rem;
  font-size: 0.14rem;
}
.van-rate {
  padding: 0 0.5rem;
}
.submit {
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #1b82d1;
  border-radius: 0.1rem;
  color: #fff;
  margin: 0.8rem auto;
  font-size: 0.16rem;
}
</style>
<style>
textarea {
  height: 1.2rem !important;
  border: 1px solid #ccc !important;
  width: 100% !important;
  font-size: 0.14rem;
  overflow-y: hidden;
}
.van-field__body {
  width: 88% !important;
  margin-right: 0 !important;
  margin-left: 0.2rem !important;
  margin-top: 0.2rem !important;
}

textarea::-webkit-input-placeholder {
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}
textarea:-moz-placeholder {
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}
textarea::-moz-placeholder {
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}
textarea:-ms-input-placeholder {
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}
</style>
