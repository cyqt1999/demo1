<template>
  <div class="home">
    首页
    <button>生成数据</button>
  </div>
</template>
<script>
// import Mock from 'mockjs' //node方式引入（CommonJS）
import request from '@/http/request'


export default {
  name:"home",
  data (){
    return {
      mockData:[]//生成数据
    }
  },
  methods:{
    getData(){//假装要使用http_mock发送请求（#手动滑稽#）（mock自动拦截请求并生成数据）
      request.http_mock('http://route.showapi.com/60-27','api_id = 63114&api_sign = 3847b0').then(response => {
        console.log(response._data)
      })
    },
    getRandom (){
      this.mockData = Mock.mock({//生成数据规则
        'list | 1-10': [{
          "id | + 1" : 1
        }]
      })
      document.body.innerHTML += '<pre>' + JSON.stringify(this.mockData,null,4) + '</pre>'//展示到页面中
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  font-size: 20px;
}

</style>