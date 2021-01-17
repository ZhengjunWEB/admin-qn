<template>
  <div class="zd">
    <el-row>
      <div class="but">
        <el-button size="mini" @click="change(1)" :class="{'active': active== 1}" type="primary" plain>待处理</el-button>
      <el-button size="mini" @click="change(2)" :class="{'active': active== 2}" type="primary" plain>全部</el-button>
      </div>
    </el-row>
          <div class="searchBoxIn">
          <el-row>
      <el-col :span="8">商家名称： <el-select  size="mini" v-model="value" placeholder="无锡肯乐德企业管理有限公司 021K761912">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
      <el-col :span="8">费用科目： <el-select size="mini"  v-model="value1" placeholder="请选择">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
      <el-col :span="8">
        结算单号：
        <el-input size="mini" v-model="input2" placeholder="请输入单号"></el-input>
      </el-col>
    </el-row>
    </div>
    <el-row v-if="active == 2">
      <div class="searchBoxIn">
        <el-col :span="8">状态：  <el-select size="mini" v-model="value6" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
      </div>
    </el-row>
        <el-row v-if="active == 3">
      <div class="searchBoxIn">
        <el-col :span="8">状态：  <el-select size="mini" v-model="value6" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
        <el-col :span="9">
          抵扣结算单号：<el-input size="mini" v-model="input7" placeholder="请输入内容"></el-input>
        </el-col>
          <el-col :span="7">
          结算单号：<el-input size="mini" v-model="input8" placeholder="请输入内容"></el-input>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'',
      value1:'',
      input:'',
      input2:'',
      value6: '',
      input7:'',
      input8:'',
      options: [
        { label:'无锡肯乐德企业管理有限公司 021K761912' , value:1}
      ],
          options1: [
        { label:'快递代收货款' , value:1},
        { label:'收派服务费' , value:2},
      ],
      options3:[
        { label:'待商家确认' , value:1},
        { label:'商家以确认' , value:2},
        { label:'商家驳回' , value:3},
        { label:'商家审核中' , value:4},
      ],
      active: 1
    }
  },
  methods: {
    change(i) {
      this.active  = i
    }
  }

}
</script>
<style lang="scss" scoped>
.zd {
  padding: 10px;
  text-align: center;
}
.but {
  display: inline-block;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 5px  ;
  button {
    margin: 0;
    border: none;
  }
  .active {
    background-color: #409eff;
    color: #fff;
  }
}
.el-button {
  margin: 5px;
}
.searchBoxIn {
  padding: 0 70px;
  margin-top: 30px;
}
.ddz {
  display: flex;
 margin: 40px 0 10px 30px;
 padding: 20px 0;
 border-top: 1px solid #e6e6e6;
 border-bottom: 1px solid #e6e6e6;
  p {
    margin: 0;
    font-weight: bold;
    margin-right: 15px;
  }
  span {
    color: #666;
  }
}
</style>
