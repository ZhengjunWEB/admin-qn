<template>
  <div class="orderlist">
    <search-box :cf="false"></search-box>
    <table-box>
        <div slot="title">
            <div class="title">
                <el-row>
                    <el-button size="mini" type="primary" icon="el-icon-document-remove">上传文件</el-button>
                    <el-button size="mini" type="primary" plain>打印日志</el-button>
                    <el-button size="mini" icon="el-icon-upload" type="primary" plain>上传日志</el-button>
                    <el-button size="mini">发货短信提醒</el-button>
                    <el-button size="mini" icon="el-icon-refresh-right" >刷新数据</el-button>
                </el-row>
            </div>
        </div>
      <div slot="table">
        <el-table :data="tableData" stripe border size="mini" style="width: 100%" >
          <el-table-column type="index" label="序号" />
          <el-table-column prop="yd" label="运单号" />
          <el-table-column prop="yd" label="生成运单时间" />
          <el-table-column prop="yd" label="原始单号" />
          <el-table-column prop="yd" label="支付方式" />
          <el-table-column prop="yd" label="打印状态" />
          <el-table-column prop="yd" label="上传状态" />
          <el-table-column prop="yd" label="运单状态" />
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