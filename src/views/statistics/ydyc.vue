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
      <div class="ycbox bor">
          <el-row :gutter="20" type="flex" justify="space-between">
                <el-col :span="12">
                    <div class="top top1">
                        <div class="icon">
                            <i class="el-icon-warning"></i>
                        </div>
                        <div class="text">
                            <span>异常运单数</span>
                            <h3>0</h3>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="top top2">
                        <div class="icon">
                            <i class="el-icon-s-data"></i>
                        </div>
                        <div class="text">
                               <span>运单异常占比</span>
                                <h3>0.00%</h3>
                        </div>
                    </div>
                </el-col>
          </el-row>
          <el-row>
              <div class="bottom">
                <el-col :span="6"><div class="item">
                        <div class="item-in">
                            <div class="l">
                                <i class="el-icon-folder-delete"></i>
                            </div>
                            <div class="r">
                                <span>客户拒收</span>
                                <p>0</p>
                            </div>
                        </div>
                    </div></el-col>
                         <el-col :span="6"><div class="item">
                        <div class="item-in">
                            <div class="l">
                                <i class="el-icon-warning"></i>
                            </div>
                            <div class="r">
                                <span>快件超范围</span>
                                <p>0</p>
                            </div>
                        </div>
                    </div></el-col>
                         <el-col :span="6"><div class="item">
                        <div class="item-in">
                            <div class="l">
                                <i class="el-icon-phone"></i>
                            </div>
                            <div class="r">
                                <span>无法联系对方</span>
                                <p>0</p>
                            </div>
                        </div>
                    </div></el-col>
                         <el-col :span="6"><div class="item">
                        <div class="item-in">
                            <div class="l">
                                <i class="el-icon-box"></i>
                            </div>
                            <div class="r">
                                <span>快件滞留</span>
                                <p>0</p>
                            </div>
                        </div>
                    </div></el-col>
                </div>
          </el-row>
      </div>
      <div class="tTitle">
            <span>运单异常明细表</span>
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
            background-color: #f9a325;
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
        background-color: #fff1d7;
    }
    .top2 {
        background-color: #ffedec;
        .icon {
            background-color: #f2665e;
        }
    }
    .bottom {
        margin-top: 15px;
        .item {
            height: 100px;
            padding: 20px 0;
            background-color: #f6f7f9;
            .item-in {
                height: 60px;
                // line-height: 60px;
                padding-left: 15%;
                border-right: 1px solid #e5e5e5;
                display: flex;
                .l {
                    width: 55px;
                    height: 55px;
                    text-align: center;
                    line-height: 55px;
                    border-radius: 50%;
                    background-color: #ffedec;
                    i {
                        font-size: 30px;
                        vertical-align: middle;
                        color: #f56c6d;
                    }
                }
                .r {
                    padding-left: 20px;
                    p {
                        margin: 10px 0 0;
                        font-size: 20px;
                        color: #f56c6d;
                    }
                }
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