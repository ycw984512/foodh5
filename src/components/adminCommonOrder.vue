<template>
  <div class="wrap">
    <van-tabs v-model="active" swipeable color="#1b82d1">
      <van-tab title="午餐">
        <div class="mtable">
          <table class="table">
            <thead>
              <th v-for="(field,index) in fields" :key="index">{{field}}</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in rows" :key="index">
                <td class="tdClass" v-for="(field,index) in fields" :key="index">{{item[field]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </van-tab>

      <van-tab title="晚餐">
        <div class="mtable">
          <table class="table">
            <thead>
              <th v-for="(field,index) in fields" :key="index">{{field}}</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in rows1" :key="index">
                <td class="tdClass" v-for="(field,index) in fields" :key="index">{{item[field]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </van-tab>
    </van-tabs>
    <div class="bot">截止到目前共预约{{num}}人（午餐）</div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
export default {
  data() {
    return {
      num: 150,
      active: 0,
      fields: ["姓名", "手机号码", "就餐日期", "备注"],
      rows: [
        {
          姓名: "张三",
          手机号码: 18279716120,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "李四",
          手机号码: 17767216695,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "王五",
          手机号码: 17767216695,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "张三",
          手机号码: 17767216695,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "李四",
          手机号码: 18279716120,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "王五",
          手机号码: 18279716120,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        }
      ],
      rows1: [
        {
          姓名: "杨超文",
          手机号码: 18279716120,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "马化腾",
          手机号码: 17767216695,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "马云",
          手机号码: 17767216695,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "刘强东",
          手机号码: 17767216695,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "李四",
          手机号码: 18279716120,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        },
        {
          姓名: "王五",
          手机号码: 18279716120,
          就餐日期: "2019-10-10 18:00",
          备注: "出差晚到",
          checked: false
        }
      ]
    };
  },
  mounted() {},
  components: {
    vanTabs: Tabs,
    vanTab: Tab
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
.wrap {
  font-size: 0.18rem;
}

table.table {
  margin: 0 auto;
  empty-cells: show;
  border-collapse: collapse;
  width: 100%;
}

.mtable {
  width: 100%;
  max-height: 450px;
  overflow: auto;
  margin-top: 0.3rem;
}
.table td,
.table th {
  border: 1px #eee solid;
  height: 30px;
  line-height: 30px;
  min-width: 64px;
  overflow: hidden;
}

.table tr td:first-child,
.table thead th:first-child {
  width: 32px;
  padding: 0px;
}
.table input[type="checkbox"] {
  zoom: 180%;
  margin-top: 8px;
}
.checkboxClass {
  margin-left: 0.2rem;
}
.tdClass {
  text-align: center;
}
</style>
<style>
.van-tabs__wrap {
  border-bottom: 1px solid #ccc !important;
  padding-bottom: 0.1rem !important;
}
.bot {
  position: fixed;
  height: 0.6rem;
  border-top: 0.01rem solid #ccc;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 0.14rem;
  color: rgb(238, 13, 62);
}

</style>
