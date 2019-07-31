<template>
  <div class="wrap">
    <img :src="image" alt />
    <div class="title">很抱歉,暂未查到您的预约记录</div>
    <div class="submit">预约次日</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564394427133&di=7e2ee9c75a996b1444d72e8e22ce9728&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e05f556834760000012b2094de28.jpg%40900w_1l_2o_100sh.jpg"
    };
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.wrap img {
  display: block;
  width: 90%;
  height: 2rem;
  margin: 0.3rem auto;
}
.title {
  width: 90%;
  margin: 0.3rem auto;
  text-align: center;
  font-size: 0.16rem;
}
.submit{
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
