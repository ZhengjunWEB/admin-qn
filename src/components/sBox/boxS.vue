<template>
  <div class="boxs">
      <div class="top">
          <span>{{title}}</span>
         <p :class="{'err':err}">{{num}}</p>
      </div>
        <div>
          <span>{{titleB}}</span>
          <p :class="{'err':err}">{{numB}}%</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
    title: {
        type: String,
        default: '待揽收'
    },
    num: {
        type: Number,
        default: 0
    },
    titleB: {
        type: String,
        default: '占比'
    },
    numB: {
        type: Number,
        default: 0
    },
    err: {
        type: Boolean,
        default: false
    }
}
}
</script>

<style lang="scss" scoped>
.boxs {
    cursor: pointer;
    width: 100%;
    height: 180px;
    background-color: rgb(246, 247, 249);
    padding: 0 20%;
    border-radius: 5px;
    text-align: center;
    .top {
        border-bottom: 1px solid #e6e6e6;
    }
    span {
        display: inline-block;
        margin-top: 20px;
        color: rgb(97,98,102);
        font-size: 14px;
    }
    p {
        color: #007aff;
    }
    .err {
        color: #f2665e;
    }
}
</style>