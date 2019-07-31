<template>
  <div class="wrap">
    <div class="wrap_title">用户评价</div>
    <div class="wrap_show" v-for="(item,index) in list1" :key="index">
      <div>
        <div>{{item.name}}</div>
        <div>{{item.time}}</div>
      </div>
      <div>
        <ul class="star">
          <span
            v-for="(itemClass,index) in itemClasses(item.rate)"
            :class="itemClass"
            class="star-item"
            track-by="index"
            :key="index"
          ></span>
          <!--性能优化 track-by 数据不改变时不会重新渲染-->
        </ul>
        <!-- <van-rate v-model="item.rate" /> -->
      </div>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
import { Rate } from "vant";
export default {
  data() {
    return {
      list1: [
        {
          name: "张三",
          time: "2019-07-05",
          title: "很丰盛，食材很新鲜，环境很好！",
          rate: 1
        },
        {
          name: "李四",
          time: "2019-07-22",
          title: "很新鲜！",
          rate: 2
        },
        {
          name: "王五",
          time: "2019-07-30",
          title: "很给劲，很好吃，下次还来",
          rate: 3
        }
      ]
    };
  },
  mounted() {},
  components: {
    // vanRate: Rate
  },
  computed: {},
  watch: {},
  methods: {
    itemClasses(rate) {
      var result = [];
      var score = Math.floor(rate * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push("on");
      }
      if (hasDecimal) {
        result.push("half");
      }
      while (result.length < 5) {
        result.push("off");
      }
      return result;
    }
  }
};
</script>
<style scoped>
.wrap_title {
  font-size: 0.14rem;
  padding: 0.2rem 0 0.2rem 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
.wrap_show {
  padding: 0 0.2rem 0.2rem 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
.wrap_show > div:nth-child(1) {
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
.wrap_show > div:nth-child(2) {
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
.wrap_show > div:nth-child(3) {
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
.star {
  font-size: 0;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 100%;
}
.star-item.on {
  background-image: url(/static/images/on.png);
}
.star-item.half {
  background-image: url(/static/images/half.png);
}
.star-item.off {
  background-image: url(/static/images/off.png);
}
</style>
