<template>
  <div class="home">
    首页
    <button>生成数据</button>
  </div>
</template>
<script>
import Mock from 'mockjs' //node方式引入（CommonJS）
import request from '@/http/request'


export default {
  name:"home",
  data (){
    return {
      data:[]//生成数据
    }
  },
  methods:{
  },
  mounted(){
    const _this = this;
    _this.axios.get('/api/data').then(res => {//get()中参数要要mock.js文件中的Mock.mock()配置的路由保持一致
      _this.data = res.data.data;
      console.log(res.data);//在console中看到数据
    }).catch(res => {
      alert('wrong');
    })
  }
}
</script>
<style lang="less" scoped>
.home{
  font-size: 20px;
}

</style>