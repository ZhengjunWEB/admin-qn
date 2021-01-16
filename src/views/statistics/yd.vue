<template>
  <div class="syd">
      <search-box noshow>
          <div slot="custom">
            <div class="searchBoxIn">
                <el-row >
                    <el-col :span="6"> <span class="title">订单号：</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"> <span class="title">托寄物：</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"> <span class="title">商品规格:</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"> <span class="title">运单时间:</span> <el-date-picker
            v-model="value"
            size="mini"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker></el-col>
                </el-row>
                <el-row>
                    <el-button icon="el-icon-search" size="mini" type="primary">搜索</el-button>
                    <el-button icon="el-icon-refresh-right" size="mini" >重置</el-button>
                </el-row>
            </div>
          </div>
      </search-box>
      <div class="ssbox bor">
          <el-row :gutter='6'>
               <el-col :span="2"><box-b /></el-col>
               <el-col :span="2"><box-s /></el-col>
               <el-col :span="2"><box-s title="已取消" /></el-col>
               <el-col :span="2"><box-s title="以揽收" /></el-col>
               <el-col :span="2"><box-s title="运输中" /></el-col>
               <el-col :span="2"><box-s title="派送中" /></el-col>
               <el-col :span="2"><box-s title="已签收" /></el-col>
               <el-col :span="2"><box-s err title="退回签收" /></el-col>
               <el-col :span="2"><box-s err title="退回件" /></el-col>
               <el-col :span="2"><box-s err title="异常件" /></el-col>
               <el-col :span="2"><box-s err title="转寄件" /></el-col>
               <el-col :span="2"><box-s err title="作废件" /></el-col>
          </el-row>
      </div>
      <div class="tTitle">
            <span>运单签收明细表</span>
            <el-button size="mini" icon="el-icon-folder-checked" type="primary">导出</el-button>
      </div>
      <table-box>
          <div slot="table">
            <el-table :data="tableData" stripe border size="mini" style="width: 100%" >
                <el-table-column type="index" label="序号" />
                <el-table-column label="订单号" />
                <el-table-column prop="yd" label="运单号" />
                <el-table-column prop="yd" label="获取运单时间" />
                <el-table-column prop="yd" label="运单状态" />
                <el-table-column prop="yd" label="平台" />
                <el-table-column prop="yd" label="店铺" />
                <el-table-column prop="yd" label="原始单号" />
                <el-table-column prop="yd" label="收件人" />
                <el-table-column prop="yd" label="收件人手机" />
                <el-table-column prop="yd" label="收件人电话" />
            </el-table>
          </div>
      </table-box>
  </div>
</template>

<script>
export default {
data() {
    return {
        value: ''
    }
}
}
</script>

<style lang="scss" scoped>
.ssbox {
    padding: 10px;
    height: 210px;
}
.tTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 14px;
}
</style>