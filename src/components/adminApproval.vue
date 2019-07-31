<template>
  <div class="wrap">
    <div class="mtable">
      <table class="table">
        <thead>
          <th>
            <div>
              <input type="checkbox" v-model="allSelected" />
            </div>
          </th>
          <th v-for="(field,index) in fields" :key="index">{{field}}</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in rows" :key="index">
            <td>
              <div>
                <input class="checkboxClass" type="checkbox" v-model="item.checked" />
              </div>
            </td>
            <td class="tdClass" v-for="(field,index) in fields" :key="index">{{item[field]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bot">
      <div class="bot_left">
        <input type="checkbox" v-model="allSelected" />
        <span>全选</span>
      </div>
      <div class="bot_right">
        <div>审核通过</div>
        <div>审核拒绝</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
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
      ]
    };
  },

  computed: {
    allSelected: {
      //1/当需要读取当前属性值时调用(初始化)/当依赖项变化时也调用该回调函数  2/根据相关数据计算并返回当前属性值
      get: function() {
        return this.rows.reduce(function(prev, curr) {
          return prev && curr.checked;
        }, true);
      },
      	//1/监视：当属性值变化时调用该回调函数        2/根据最新的属性值计算相关数据   newValue是最新的allSelected的值
      set: function(newValue) {
        this.rows.forEach(function(item) {
          item.checked = newValue;
        });
      }
    }
  }
};
</script>

<style>
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
.bot{
  position: fixed;
  height: 0.6rem;
  border-top: 0.01rem solid #ccc;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.bot .bot_left{
  margin-left: 0.2rem;
}
.bot .bot_left input[type="checkbox"]{
  position: relative;
  top: 0.03rem;
  width: 0.18rem;
  height: 0.18rem;
}
.bot .bot_left span{
  margin-left: 0.06rem;

}
.bot .bot_right{
   margin-right: 0.2rem;
   display: flex;
   
}
.bot .bot_right div:first-child{
    margin-right: 0.1rem;
    padding: 0.1rem;
    background: #1b82d1;
    color: #fff;
    border-radius: 0.1rem
}
.bot .bot_right div:nth-child(2){
      margin-right: 0.1rem;
    padding: 0.1rem;
    background: #e01b1b;
    color: #fff;
    border-radius: 0.1rem
}


</style>