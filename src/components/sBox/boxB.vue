<template>
  <div class="box">
      <div><i class="el-icon-copy-document"></i>{{title}}</div>
      <h2>{{num}}</h2>
  </div>
</template>

<script>
export default {
props:{
    title: {
        type: String,
        default: '总件数'
    },
    num: {
        type: Number,
        default: 0
    }
}
}
</script>

<style lang="scss" scoped>
.box {
    text-align: center;
    cursor: pointer;
    width: 100%;
    height:180px;
    border-radius: 5px;
    background-color: rgba(231,243,255);
    overflow: hidden;
    >div {
        margin-top: 60px;
        color:  #007aff;
        font-weight: bold;
    }
    h2 {
        color: #007aff;
    }
}
</style>