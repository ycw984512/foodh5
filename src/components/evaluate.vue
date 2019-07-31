<template>
  <div class="wrap">
    <div class="order_success" v-for="(item,index) in list1" :key="index" @click="whiteEvaluate(item)">
      <div class="success_title">
        <div class="title_top">{{item.name}}</div>
        <div class="title_bot">2019年10月1日 午餐</div>
      </div>
      <div class="success_show1">
        <div class="title_top">就餐完成</div>
        <div class="title_bot" >评价</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
       list1:[
        {
          name:"食堂1",
          id:1
        },{
          name:"食堂2",
          id:2
        },{
          name:"食堂3",
          id:3
        },
      ],
    };
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {},
  methods: {
    whiteEvaluate(item){
        this.$router.push({
        path:'/whiteEvaluate',
        query:{
          id:item.id
        }
      })
    }
  }
};
</script>
<style scoped>
.order_success {
  display: flex;
  margin-top: 0.2rem;
  padding: 0 0.28rem;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
}

.order_success .success_title .title_top {
  font-size: 0.16rem;
}
.order_success .success_title .title_bot {
  margin-top: 0.1rem;
  color: #999;
}

.order_success .success_show1{
  position: absolute;
  top:0rem;
  right: 0.5rem;
}
.order_success .success_show1 .title_top{

  color: #999;
  font-size: 0.14rem;
}
.order_success .success_show1 .title_bot{
  margin-top: 0.1rem;
  color: blue;
  font-size: 0.14rem;
  text-align: center
}
</style>
