<template>
  <div class="syd">
      <search-box noshow>
          <div slot="custom">
            <div class="searchBoxIn">
                <el-row >
                    <el-col :span="6"> <span class="title">组织：</span> <el-select size="mini" v-model="value1" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
                    <el-col :span="6"> <span class="title">制单人:</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"> <span class="title">托寄物：</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"> <span class="title">金额:</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row>
                     <el-col :span="8"> <span class="title">创建时间:</span> <el-date-picker
            v-model="value"
            size="mini"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker></el-col>
             <el-button icon="el-icon-search" size="mini" type="primary">搜索</el-button>
                    <el-button icon="el-icon-refresh-right" size="mini" >重置</el-button>
                </el-row>
            </div>
          </div>
      </search-box>
      <div class="ycbox bor">
          <el-row>
              <el-col :span="4"><div class="item">
                  <div class="item-in">
                      <span>订单总数(件)</span>
                      <p>0</p>
                  </div>
                  </div></el-col>
              <el-col :span="4"><div class="item">
                  <div class="item-in other">
                      <span>订单总数(件)</span>
                      <p>0</p>
                  </div>
                  </div></el-col>
                     <el-col :span="4"><div class="item">
                  <div class="item-in">
                      <span>订单总数(件)</span>
                      <p>0</p>
                  </div>
                  </div></el-col>
                     <el-col :span="4"><div class="item">
                  <div class="item-in other">
                      <span>订单总数(件)</span>
                      <p>0</p>
                  </div>
                  </div></el-col>
                     <el-col :span="4"><div class="item">
                  <div class="item-in">
                      <span>订单总数(件)</span>
                      <p>0</p>
                  </div>
                  </div></el-col>
                     <el-col :span="4"><div class="item">
                  <div class="item-in other">
                      <span>订单总数(件)</span>
                      <p>0</p>
                  </div>
                  </div></el-col>
          </el-row>
      </div>
      <div class="chart bor">
           <ve-line :data="chartData"></ve-line>
      </div>
      <div class="tTitle bor">
            <span>待收货款明细表</span>
            <el-button size="mini" icon="el-icon-folder-checked" type="primary">导出</el-button>
      </div>
  </div>
</template>

<script>
var dayjs = require('dayjs')
export default {
data() {
    return {
        value: '',
        value1: '',
        date: dayjs().format('YYYY-MM-DD'),
        options: [
            {
                value: '1',
                label: '顶级组织'
            },
        ],
              chartData: {
          columns: ['日期', '订单总数', '获取运单总数', '签收总数'],
          rows: [
            { '日期': dayjs().format('YYYY-MM-DD'), '订单总数': 1393, '获取运单总数': 1093, '签收总数': 865 },
            { '日期': dayjs().subtract(1, 'day').format('YYYY-MM-DD'), '订单总数': 3530, '获取运单总数': 3230, '签收总数': 2056 },
            { '日期': dayjs().subtract(2, 'day').format('YYYY-MM-DD'), '订单总数': 2923, '获取运单总数': 2623, '签收总数': 1877 },
            { '日期': dayjs().subtract(3, 'day').format('YYYY-MM-DD'), '订单总数': 1723, '获取运单总数': 1423, '签收总数': 1205 },
            { '日期': dayjs().subtract(4, 'day').format('YYYY-MM-DD'), '订单总数': 3792, '获取运单总数': 3492, '签收总数': 2695},
            { '日期': dayjs().subtract(5, 'day').format('YYYY-MM-DD'), '订单总数': 4593, '获取运单总数': 4293, '签收总数': 3720 }
          ]
        }
    }
}
}
</script>

<style lang="scss" scoped>
.ycbox {
    padding: 10px;
    .item {
        height: 60px;
        .item-in {
            text-align: center;
            height: 40px;
            border-right: 1px solid #e6e6e6;
            span {
                display: inline-block;
                margin-top: 10px;
            }
            p {
                font-size: 22px;
                margin: 10px 0 0;
                color: #0e88fa;
            }
        }
                   .other {
               p {
                    color: #f9a325;
               }
            }
    }

}
.tTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 14px;
}
</style>