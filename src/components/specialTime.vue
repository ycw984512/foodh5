<template>
  <div class="wrap">
    <van-radio-group v-model="radio" @change="radioChange">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item name="1">
          <div slot="title">
            <van-radio name="1">今天</van-radio>
          </div>
          <div class="row_flex">
            <div
              class="col_item"
              v-for="(item,index) in times"
              :key="index"
              @click="changeIndex1(index)"
              :class="currIndex1==index?'col_active':''"
            >{{item}}</div>
          </div>
        </van-collapse-item>
        <van-collapse-item name="2">
          <div slot="title">
            <van-radio name="2">明天</van-radio>
          </div>
          <div class="row_flex">
            <div
              class="col_item"
              v-for="(item,index) in times"
              :key="index"
              @click="changeIndex2(index)"
              :class="currIndex2==index?'col_active':''"
            >{{item}}</div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="后天" name="3">
          <div slot="title">
            <van-radio name="3">后天</van-radio>
          </div>
          <div class="row_flex">
            <div
              class="col_item"
              v-for="(item,index) in times"
              :key="index"
              @click="changeIndex3(index)"
              :class="currIndex3==index?'col_active':''"
            >{{item}}</div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </van-radio-group>

    <div class="submit" @click="goSpecialResult">确定</div>
  </div>
</template>
<script>
import { Collapse, CollapseItem } from "vant";
import { RadioGroup, Radio } from "vant";

export default {
  data() {
    return {
      activeNames: "1",
      radio: "1",
      times: [
        "09:00-10:00",
        "10:00-11:00",
        "11:00-12:00",
        "12:00-13:00",
        "13:00-14:00",
        "14:00-15:00",
        "15:00-16:00",
        "16:00-17:00",
        "18:00-19:00",
        "19:00-20:00"
      ],
      currIndex1: 999,
      currIndex2: 999,
      currIndex3: 999
    };
  },
  mounted() {},
  components: {
    vanCollapse: Collapse,
    vanCollapseItem: CollapseItem,
    vanRadioGroup: RadioGroup,
    vanRadio: Radio
  },
  computed: {},
  watch: {},
  methods: {
    radioChange(value) {
      console.log(value);
      this.activeNames = value;
      if (this.radio == "1") {
        this.currIndex2 = 999;
        this.currIndex3 = 999;
      } else if (this.radio == "2") {
        this.currIndex1 = 999;
        this.currIndex3 = 999;
      } else if (this.radio == "3") {
        this.currIndex1 = 999;
        this.currIndex2 = 999;
      }
    },
    changeIndex1(index) {
      console.log(index);
      this.currIndex1 = index;
      this.currIndex2 = 999;
      this.currIndex3 = 999;
    },
    changeIndex2(index) {
      this.currIndex2 = index;
      this.currIndex1 = 999;
      this.currIndex3 = 999;
    },
    changeIndex3(index) {
      this.currIndex3 = index;
      this.currIndex2 = 999;
      this.currIndex1 = 999;
    },
    goSpecialResult() {
      this.$router.push('/specialResult')
    }
  }
};
</script>
<style scoped>
.submit {
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #1b82d1;
  border-radius: 0.1rem;
  color: #fff;
  margin: 1.5rem auto;
  font-size: 0.16rem;
}

.wrap {
  margin-top: 0.1rem;
}
.col_active {
  color: red;
}
.row_flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 0.3rem;
}
.col_item {
  margin-top: 0.1rem;
  width: 30%;
}
</style>

