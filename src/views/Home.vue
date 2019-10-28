<template>
  <div class="login">
    <div class="dialog-box">
      <div class="dialog-box-left">
        <div class="dialog-box-left-logo">
          <img src="@/assets/grefavicon.jpg" alt="logo" />
        </div>
        <h3>智学无忧后台管理系统</h3>
        <h5>做最有态度、责任、良心的IT教育</h5>
      </div>
      <div class="dialog-box-center"></div>
      <div class="dialog-box-right">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-input v-model="ruleForm.userName" prefix-icon="el-icon-s-custom" placeholder="请输入用户名"></el-input>
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="ruleForm.userPass"
            show-password
          ></el-input>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <el-button type="success" :loading="loding" @click="submitForm('ruleForm')">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("密码不能为空"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      //表单数据
      ruleForm: {
        userName: "",
        userPass: ""
      },

      rules: {
        //表单验证
        userName: [{ validator: checkUserName, trigger: "blur" }],
        userPass: [{ validator: validatePass, trigger: "blur" }]
      },
      checked: false,
      loding: false
    };
  },
  methods: {
    /**
     * 登录提交验证
     * @param {String} formName获取用户提交的数据
     * **/
    submitForm(formName) {
      console.log(formName);
      const _this = this;
      _this.loding = true;
    }
  }
};
</script>
<style lang="less" scoped>
@numMax: 100%;
@fifty: 50%;
@borderNumWidth:85%;
.login {
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  width: @numMax;
  height: @numMax;
  background-size: cover;
  display: flex;
  .dialog-box {
    flex: none;
    margin: auto;
    width: 500px;
    height: 330px;
    background: #d8ecf5;
    border-radius: 10px;
    box-shadow: 0 0 15px 10px #4479d7;
    &-left {
      float: left;
      height: @numMax;
      width: 49%;
      &-logo img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 40px auto;
        box-shadow: 0 0 10px 5px #ccc;
      }
      h3 {
        color: #178a84;
      }
      h5 {
        color: #909399;
        margin-top: 20%;
      }
    }
    &-center {
      float: left;
      width: 1px;
      height: @numMax;
      background: linear-gradient(#d8ecf5, #1aa73d, #178a81, #d8ecf5);
    }
    &-right {
      float: right;
      height: @numMax;
      width: @fifty;
      margin-top: 40px;
      // 输入框宽度 
      .el-input {
        width: @borderNumWidth;
        margin-bottom: 30px;
      }
      // 输入框 边框颜色，去掉圆角
      /deep/.el-input--prefix .el-input__inner {
        border-color: #1aa73d;
        border-radius: 0;
      }
      /deep/.el-button--success {
        width: @borderNumWidth;
        margin-top: 30px;
      }
        /deep/.el-input__icon {
          color: #24a33a;
          font-size: 20px;
        }
        /deep/.el-icon-view:before{
          font-size: 16px;
          color: #909399;
        }
    }
  }
}
</style>
