<template>
  <div class="wrap">
    <div class="food_name">食堂名称-食堂部门</div>
    <div class="food_detail">
      <p>日期：2019年10月1日 午餐</p>
      <p>申请人：XXX</p>
      <p>所属部门：XXX部</p>
    </div>
    <div class="submit" v-if="type==1">取消预约</div>
    <div class="submit1" v-if="type==2">待审核</div>
    <div class="submit" v-if="type==3">重新预约</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0
    };
  },
  mounted() {
    console.log(this.$route.query);
    this.type = this.$route.query.type;
    var id = this.$route.query.id;
  },
  components: {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.food_name {
  font-size: 0.14rem;
  padding: 0.2rem 0 0.2rem 0.2rem;
  border-bottom: 1px dashed #999;
}
.food_detail {
  border-bottom: 1px dashed #999;
  padding-bottom: 0.2rem;
}

.food_detail p {
  font-size: 0.14rem;
  margin: 0.2rem 0 0.2rem 0.2rem;
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
.submit1 {
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;

  color: red;
  margin: 1rem auto;
  font-size: 0.16rem;
}
</style>

