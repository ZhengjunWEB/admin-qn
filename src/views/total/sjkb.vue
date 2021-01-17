<template>
  <div class="sjkb">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="item">
          <span>总营业额</span>
          <p>￥ 126.560</p>
          <div class="item-in">周同比 12% 日同比 11%</div>
          <div class="rx">日销售额 ￥12，124</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="item">
          <span>在线支付(总金额)</span>
          <p>￥ 126.560</p>
          <div class="chart">
            <ve-histogram
              :legend-visible="false"
              :extend="extend"
              height="100%"
              :data="chartData"
            ></ve-histogram>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="item">
          <span>货到付款(总金额)</span>
          <p>￥ 126.560</p>
          <div class="chart">
            <ve-histogram
              :legend-visible="false"
              :extend="extend"
              height="100%"
              :data="chartData"
            ></ve-histogram>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="item">
          <span>运费(总金额)</span>
          <p>￥ 126.560</p>
          <div class="chart">
            <ve-histogram
              :legend-visible="false"
              :extend="extend"
              height="100%"
              :data="chartData"
            ></ve-histogram>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="bg">
        <div class="bg-title">
          <ul>
            <li @click="change(1)" :class="{ active: active == 1 }">
              在线支付
            </li>
            <li @click="change(2)" :class="{ active: active == 2 }">
              货到付款
            </li>
            <li @click="change(3)" :class="{ active: active == 3 }">运费</li>
          </ul>
        </div>
        <ve-histogram
          :legend-visible="false"
          :extend="extendss"
          height="100%"
          :data="chartData"
        ></ve-histogram>
      </div>
    </el-row>
    <el-row :gutter="20">
      <div class="sbottom">
        <el-col :span="12">
          <div class="xs">
            <div class="title">
              <span>订单统计</span>
            </div>
            <span>订单总数 1256</span>
            <div class="charts">
              <ve-line :data="chartDataa" height="100%"></ve-line>
            </div>
            <div>
              <el-table :data="tableData" style="width: 100%" size="mini">
                <el-table-column type="index" />
                <el-table-column prop="name" label="订单数" />
                <el-table-column prop="address" label="订单金额" />
                <el-table-column prop="address" label="涨幅" />
              </el-table>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="xs">
            <div class="title">
              <span>地区占比</span>
              <el-row>
                  <el-col :span="14">
                       <div class="tj">
                           <ve-ring :data="chartDataaa" :extend='extendsss'></ve-ring>
                       </div>
                  </el-col>
                  <el-col :span="10">
                      <ul>
                          <li>北京<span>19.2%</span>￥56241</li>
                          <li>广州<span>17.69%</span>￥52314</li>
                          <li>上海<span>15.53%</span>￥45924</li>
                          <li>江苏<span>11%</span>￥32546</li>
                          <li>安徽<span>10.23%</span>￥30256</li>
                          <li>江西<span>10%</span>￥29576</li>
                          <li>广西<span>8.67%</span>￥25648</li>
                          <li>山东<span>7.86%</span>￥23254</li>
                      </ul>
                  </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
var dayjs = require('dayjs')
export default {
  data() {
    return {
      active: 1,
      chartData: {
        columns: ["日期", "在线支付"],
        rows: [
          { 日期: dayjs().format('YYYY-MM-DD'), 在线支付: 1093, 货到付款:2941, 运费:251 },
          { 日期: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), 在线支付: 3230, 货到付款:2641, 运费:231 },
          { 日期: dayjs().subtract(2, 'day').format('YYYY-MM-DD'), 在线支付: 2623, 货到付款:2365, 运费:156 },
          { 日期: dayjs().subtract(3, 'day').format('YYYY-MM-DD'), 在线支付: 1423, 货到付款:1589, 运费:123 },
          { 日期: dayjs().subtract(4, 'day').format('YYYY-MM-DD'), 在线支付: 3492, 货到付款:1235, 运费:112 },
          { 日期: dayjs().subtract(5, 'day').format('YYYY-MM-DD'), 在线支付: 4293, 货到付款:2458, 运费:234 },
          { 日期: dayjs().subtract(6, 'day').format('YYYY-MM-DD'), 在线支付: 4293, 货到付款:2146, 运费:203 },
          { 日期: dayjs().subtract(7, 'day').format('YYYY-MM-DD'), 在线支付: 4293, 货到付款:1865, 运费:165 },
        ],
      },
      extend: {
        xAxis: {
          show: false,
        },
        yAxis: {
          type: "value",
          show: false,
          splitLine: { show: false },
        },
      },
      extendss: {
        series: {
          barWidth: "35%",
        },
      },
      chartDataa: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293 },
          { 日期: "1/7", 访问用户: 1393, 下单用户: 1093 },
          { 日期: "1/8", 访问用户: 3530, 下单用户: 3230 },
          { 日期: "1/9", 访问用户: 2923, 下单用户: 2623 },
          { 日期: "1/10", 访问用户: 1723, 下单用户: 1423 },
          { 日期: "1/11", 访问用户: 3792, 下单用户: 3492 },
          { 日期: "1/12", 访问用户: 4593, 下单用户: 4293 },
        ],
      },
      chartDataaa: {
          columns: ['地区', '金额'],
          rows: [
            { '地区': '北京', '金额': 56241 },
            { '地区': '广州', '金额': 52314 },
            { '地区': '上海', '金额': 45924 },
            { '地区': '江苏', '金额': 32546 },
            { '地区': '安徽', '金额':30256 },
            { '地区': '江西', '金额': 29576 },
            { '地区': '广西', '金额': 25648 },
            { '地区': '山东', '金额': 23254 },
          ]
        },
        extendsss: {
            series: {
                label: {
                    show: false
                }
            }
        }
    };
  },
  methods: {
    change(i) {
      this.active = i;
      i == 1 && (this.chartData.columns = ["日期", "在线支付"])
      i == 2 && (this.chartData.columns = ["日期", "货到付款"])
      i == 3 && (this.chartData.columns = ["日期", "运费"])
    },
  },
};
</script>
<style lang="scss" scoped>
.sjkb {
  padding: 10px;
  background-color: #f0f2f5;
  * {
    margin: 0;
    padding: 0;
  }
  .item {
    position: relative;
    padding: 15px 15px;
    height: 182px;
    background-color: #fff;
    span {
      display: inline-block;
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
    }
    .chart {
      position: relative;
      top: -45px;
      left: -10%;
      height: 200px;
    }
    .item-in {
      font-size: 14px;
      margin-top: 25px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e6e6e6;
    }
    .rx {
      margin-top: 10px;
      font-size: 14px;
    }
  }
  .sbottom {
    background-color: #fff;
    margin-top: 20px;
  }
  .bg {
    background-color: #fff;
    margin-top: 20px;
    height: 320px;
    ul {
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      li {
        cursor: pointer;
        height: 60px;
        line-height: 60px;
        list-style: none;
        margin: 0 15px;
        font-size: 14px;
      }
      .active {
        border-bottom: 2px solid #1890ff;
        color: #1890ff;
      }
    }
  }
  .xs {
    height: 500px;
    background-color: #fff;
    .title {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e6e6e6;
      padding-left: 25px;
      span {
        font-size: 14px;
      }
    }
    > span {
      display: inline-block;
      font-size: 14px;
      margin: 10px 0 0 25px;
      color: #666;
    }
    .charts {
      height: 300px;
    }
    .tj {
        margin-top: 20px;
    }
    ul {
        margin-left: 10px;
        padding-top: 30px;
        li {
            height: 35px;
            line-height: 35px;
            list-style: none;
            font-size: 14px;
        }
        span {
            display: inline-block;
            width: 80px;
            color: #666;
            margin-left: 8px;
        }
    }
  }
}
</style>