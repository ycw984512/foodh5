<template>
  <div class="wrap">
    <img :src="image" alt />
    <div class="title">预约成功，请于次日就餐时间段点击就餐！</div>
    <div class="submit">取消预约</div>
    <div class="respon">
      如因各种原因未能就餐的，请于本日18:00前取消预约，
      否则按照《<span style="color:blue" @click="$router.push('/responsibility')">违约规则</span>》进行处理
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
  color: red;
}
.submit {
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #1b82d1;
  border-radius: 0.1rem;
  color: #fff;
  margin: 1.6rem auto 0;
  font-size: 0.16rem;
}
.respon{
  margin-top:0.5rem;
  padding: 0 0.2rem
}
</style>
