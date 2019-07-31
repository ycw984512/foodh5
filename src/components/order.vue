<template>
  <div class="wrap">
    <div class="wrap_title">选择就餐时间</div>
    <div  class="choose_time" @click="$router.push('/orderTime')">点击选择时间</div>
    <div class="sure_Time">选择就餐时间</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
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
.wrap {
  font-size: 0.18rem;   

}
.wrap .wrap_title{
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.2rem;
  color: #999
}
.wrap .choose_time{
width: 80%;
border: 1px solid #ccc;
height: 0.8rem;
line-height: 0.8rem;
text-align: center;
margin: 0.3rem auto;
font-size: 0.16rem;
}

.wrap .sure_Time{
 width: 36%;
background: #1b82d1;
height: 0.5rem;
line-height: 0.5rem;
text-align: center;
margin: 3rem auto;
font-size: 0.14rem;
color: #fff;
border-radius: 0.1rem
}

</style>
