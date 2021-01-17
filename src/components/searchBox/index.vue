<template>
  <div class="searchBox bor">
    <div v-if="!noshow" class="searchBoxIn">
      <el-row>
        <el-col :span="6"> <span class="title">订单号：</span> <el-input v-model="v1" size="mini" placeholder="请输入内容" /></el-col>
        <el-col :span="6"> <span class="title">托寄物：</span> <el-input v-model="v2" size="mini" placeholder="请输入内容" /></el-col>
        <el-col :span="6"> <span class="title">商品规格:</span> <el-input v-model="v3" size="mini" placeholder="请输入内容" /></el-col>
        <el-col :span="6"> <span class="title">代收金额:</span> <el-input v-model="v4" size="mini" placeholder="请输入内容" /></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"> <span class="title">支付方式：</span><el-select v-model="v5" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select></el-col>
        <el-col v-if="zt" :span="6"> <span class="title">订单状态：</span> <el-input v-model="v6" size="mini" placeholder="请输入内容" /></el-col>
        <el-col v-if="cf" :span="6"> <span class="title">是否重复:</span> <el-select v-model="v7" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select></el-col>
        <el-col :span="6"> <span class="title">{{ tTime }}:</span> <el-date-picker
          v-model="v8"
          size="mini"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        /></el-col>
      </el-row>
      <el-row>
        <el-button size="mini" type="primary">搜索</el-button>
        <el-button size="mini" type="primary">重置</el-button>
        <el-button icon="el-icon-folder-checked" size="mini">导出</el-button>
      </el-row>
    </div>
    <slot name="custom" />
  </div>
</template>

<script>
export default {
  props: {
    tTime: {
      type: String,
      default: '创建时间'
    },
    zt: {
      type: Boolean,
      default: true
    },
    cf: {
      type: Boolean,
      default: true
    },
    noshow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: '',
      value1: '',
      value2: '',
      options: [
        {
          value: '1',
          label: '在线支付'
        }, {
          value: '2',
          label: '货到付款'
        }
      ],
      options2: [
        {
          value: '1',
          label: '是'
        }, {
          value: '2',
          label: '否'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>>
