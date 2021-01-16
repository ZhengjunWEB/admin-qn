<template>
  <div class="tableBox">
      <slot name="title" />
      <slot name="table" />
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :small="true"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        handleSizeChange() {},
        handleCurrentChange() {}
    }
};
</script>

<style lang="scss" scoped>
.tableBox {
    padding: 10px;
}
.el-pagination {
    margin-top: 15px;
}
</style>