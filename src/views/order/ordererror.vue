<template>
  <div class="orderlist">
    <search-box tTime="异常时间" :zt="false" :cf="false"></search-box>
    <table-box>
      <div slot="title">
        <div class="title">
          <el-row>
            <el-button size="mini" type="primary" icon="el-icon-edit"
              >改价</el-button
            >
            <el-button size="mini" icon="el-icon-refresh" type="primary"
              >修改收件人</el-button
            >
            <el-button size="mini" type="primary">再派</el-button>
            <el-button size="mini" type="primary" icon="el-icon-truck"
              >更改派送时间</el-button
            >
            <el-button size="mini" type="primary">转寄</el-button>
            <el-button size="mini" type="primary" icon="el-icon-refresh-right"
              >退回</el-button
            >
            <el-button size="mini" type="primary" icon="el-icon-folder-delete"
              >作废</el-button
            >
            <el-button size="mini" icon="el-icon-tickets">处理日志</el-button>
            <el-button size="mini" icon="el-icon-message"
              >更改短信通知</el-button
            >
            <el-button size="mini" icon="el-icon-document">提醒配置</el-button>
          </el-row>
        </div>
      </div>
      <div slot="table">
        <el-table
          :data="tableData"
          stripe
          border
          size="mini"
          style="width: 100%"
        >
          <el-table-column type="index" label="序号" />
          <el-table-column prop="yd" label="运单号" />
          <el-table-column prop="yd"  width="150" label="异常发生时间" />
          <el-table-column prop="yd" width="150" label="异常处理剩余时间" />
          <el-table-column prop="yd" label="异常件类型" />
          <el-table-column prop="yd" label="异常原因" />
          <el-table-column prop="bd" label="处理时间" />
          <el-table-column prop="jj" label="处理方式" show-overflow-tooltip />
          <el-table-column prop="sj" label="原始单号" show-overflow-tooltip />
          <el-table-column prop="sj" label="姓名" />
          <el-table-column prop="sj" label="手机号" />
          <el-table-column fixed="right" label="操作" width="100">
            <template >
              <el-button
                type="text"
                size="mini"
                >查看</el-button
              >
              <el-button type="text" size="mini">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </table-box>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{}],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 8px;
}
</style>