<template>
  <div class="wrap">
    <van-uploader v-model="fileList" multiple :max-count="1">
      <van-button icon="photo" type="default">logo</van-button>
    </van-uploader>

    <van-cell-group>
      <van-field v-model="phone" required clearable label="手机号码 ：" placeholder="请输入手机号码" />

      <van-field v-model="password" type="password" label="密码 ：" placeholder="请输入密码" required />
    </van-cell-group>

    <div class="submit" @click="login">点击登录</div>
  </div>
</template>
<script> 
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import { Uploader } from "vant";
import { Button } from "vant";
import { login } from "./../api/index.js";
export default {
  data() {
    return {
      phone: "",
      password: "",
      fileList: []
    };
  },
  mounted() {
    console.log(this.$route.query.fullPath || "/mine")
  },
  components: {
    vanCellGroup: CellGroup,
    vanCell: Cell,
    vanField: Field,
    vanUploader: Uploader,
    vanButton: Button
  },
  computed: {},
  watch: {},
  methods: {
    async login() {
      console.log(1);
      const res = await login(this.phone, this.password);
      if (res.code == 0) {
        var token = res.data.token;
        this.$store.commit("setToken", token); //同步存储token到store中
        localStorage.setItem("token", token); //本地存储token
        var fullPath = this.$route.query.fullPath || "/mine";
        // this.$router.replace('/mine');
        this.$router.replace(fullPath);
      }
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
  margin: 0.8rem auto;
  font-size: 0.16rem;
}
.van-button {
  border-radius: 50%;
  border-color: #999;
}
</style>
<style>
.van-field__control {
  border-bottom: 1px solid #999 !important;
  width: 100%;
}
.van-cell-group {
  padding: 0 0.5rem !important;
}
.van-field__label {
  width: 0.75rem;
}
.van-uploader {
  margin: 0.5rem auto;
  margin-left: 1.5rem;
}
</style>
