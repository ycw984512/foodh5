<template>
  <div class="wrap">
    <img :src="image" alt />
    <div class="title">恭喜您,请尽快到食堂聚餐</div>
    <div class="title">
      您当前聚餐号码为
      <span style="color:red">123</span> 号
    </div>

    <div class="title" style="color:red;font-size:0.12rem">
     需在12:00至12:10分之间进入食堂进行就餐，过时不侯
    </div>

    <div class="title">
      累计两次未到食堂就餐者，需承担《
      <span style="color:blue" @click="$router.push('/responsibility')">违约责任</span> 》
    </div>
    <div class="title1">
      当前时段已预约 :
      <span style="color:red">123</span> 人
    </div>
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
.title1 {
  width: 90%;
  margin-top: 1.8rem;
  margin-left: 0.2rem;
  font-size: 0.16rem;
}
</style>
