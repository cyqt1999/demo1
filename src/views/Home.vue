<template>
  <div class="home">
    首页
    <button @click="getMockInfo">生成数据</button>
  </div>
</template>
<script>

export default {
  name:"home",
  data (){
    return {
    }
  },
  methods:{
    getMockInfo(){
      const _this = this;
      _this.axios.post('news/api').then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>
<style lang="less" scoped>
.home{
  font-size: 20px;
}

</style>