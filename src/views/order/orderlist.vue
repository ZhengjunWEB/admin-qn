<template>
  <div class="orderlist">
    <search-box></search-box>
    <table-box>
        <div slot="title">
            <div class="title">
                <el-row>
                    <el-button size="mini" type="primary" icon="el-icon-caret-bottom">新建订单</el-button>
                    <el-button size="mini" icon="el-icon-refresh" type="primary">同步订单</el-button>
                    <el-button size="mini">订单检测</el-button>
                    <el-button size="mini" icon="el-icon-truck">设置物流</el-button>
                    <el-button size="mini">取消/删除</el-button>
                    <el-button size="mini" icon="el-icon-refresh-right" >刷新数据</el-button>
                </el-row>
            </div>
        </div>
      <div slot="table">
        <el-table :data="tableData" stripe border size="mini" style="width: 100%" >
          <el-table-column type="index" label="ID" />
          <el-table-column prop="dd" label="订单号" />
          <el-table-column prop="yd" label="运单号" />
          <el-table-column prop="zl" label="重量"  width="80" />
          <el-table-column prop="je" label="金额"  width="80" />
          <el-table-column prop="bj" label="保价" width="100" />
          <el-table-column prop="bd" label="保单" />
          <el-table-column prop="jj" label="寄件信息"  show-overflow-tooltip />
          <el-table-column prop="sj" label="收件信息"  show-overflow-tooltip />
        </el-table>
      </div>
    </table-box>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
            
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 8px;
}
</style>