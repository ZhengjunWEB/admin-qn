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
                    <el-col :span="6"> <span class="title">托寄物：</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"> <span class="title">商品规格:</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row>
                     <el-col :span="8"> <span class="title">签收时间:</span> <el-date-picker
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
          <el-row :gutter="20" type="flex" justify="space-between">
                <el-col :span="12">
                    <div class="top top1">
                        <div class="icon">
                            <i class="el-icon-s-finance"></i>
                        </div>
                        <div class="text">
                            <span>原始代收金额/元</span>
                            <h3>0</h3>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="top top2">
                        <div class="icon">
                            <i class="el-icon-s-claim"></i>
                        </div>
                        <div class="text">
                               <span>以签收运单/单</span>
                                <h3>0</h3>
                        </div>
                    </div>
                </el-col>
          </el-row>
      </div>
      <div class="tTitle">
            <span>待收货款明细表</span>
            <el-button size="mini" icon="el-icon-folder-checked" type="primary">导出</el-button>
      </div>
      <table-box>
          <div slot="table">
            <el-table :data="tableData" stripe border size="mini" style="width: 100%" >
                <el-table-column type="index" label="序号" />
                <el-table-column label="签收日期" />
                <el-table-column prop="yd" label="运单号" />
                <el-table-column prop="yd" label="订单编号" />
                <el-table-column prop="yd" label="平台" />
                <el-table-column prop="yd" label="店铺" />
                <el-table-column prop="yd" label="原始单号" />
                <el-table-column prop="yd" label="收件人" />
                <el-table-column prop="yd" label="收件人手机" />
                <el-table-column prop="yd" label="收件人电话" />
                <el-table-column prop="yd" label="托寄物" />
                <el-table-column prop="yd" label="托寄物数量" />
            </el-table>
          </div>
      </table-box>
  </div>
</template>

<script>
export default {
data() {
    return {
        value: '',
        value1: '',
        options: [
            {
                value: '1',
                label: '顶级组织'
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.ycbox {
    padding: 10px;
    .top {
        height: 100px;
        border-radius: 5px;
        overflow: hidden;
        >div {
            display: inline-block;
        }
        .icon {
            width: 100px;
            text-align: center;
            height: 100px;
            line-height: 100px;
            background-color: rgb(14,136,250);
            i {
                font-size: 50px;
                vertical-align: middle;
                color: #fff;
            }
        }
        .text {
            padding-left: 20px;
            vertical-align: middle;
            height: 100%;
            span {
                display: inline-block;
                margin-top: 30px;
            }
            h3 {
                margin-top: 6px;
            }
        }
    }
    .top1 {
        background-color: rgb(231,243,255);
    }
    .top2 {
        background-color: rgb(237,239,255);
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