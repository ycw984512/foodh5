<template>
  <div class="wrap">
    <img :src="image" alt />
    <div class="title">成功提交预约信息待部门领导进行审核！</div>

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
  margin: 1rem auto;
  text-align: center;
  font-size: 0.16rem;
  color: red;
}

</style>
