<template>
  <div class="gzt">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="lt">
          <div class="title">
            <span>运单状态</span>
            <el-date-picker
              v-model="value1"
              size="mini"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div class="body">
                <div>
                    <h2>38</h2>
                    <p>总量</p>
                    <span>发货单总量</span>
                </div>
                <ul>
                    <li> <h2>1</h2>
                    <p>待取件</p>
                    <span>下单 预约 接货</span></li>
                     <li> <h2>3</h2>
                    <p>运输中</p>
                    <span>快件运输中</span></li>
                     <li> <h2>33</h2>
                    <p>已签收</p>
                    <span>快件已被签收</span></li>
                     <li> <h2>0</h2>
                    <p>拒收</p>
                    <span>退货</span></li>
                     <li> <h2>0</h2>
                    <p>终止</p>
                    <span>取消 失败 终止</span></li>
                </ul>
          </div>
        </div>
        <div class="lb">
             <div class="title">
            <span>代办事项</span>
             </div>
             <el-row :gutter="10">
                 <el-col :span="6">
                     <div class="a" @click="change(1)" :class="{'active':active == 1}">
                         <p>0</p>
                         <span>快递异常订单</span>
                     </div>
                 </el-col>
                   <el-col :span="6">
                     <div class="b" @click="change(2)"  :class="{'active2':active == 2}">
                          <p>0</p>
                         <span>理赔单</span>
                     </div>
                 </el-col>
                   <el-col :span="6">
                     <div class="c" @click="change(3)"  :class="{'active3':active == 3}">
                          <p>0</p>
                         <span>
咨询单</span>
                     </div>
                 </el-col>
                   <el-col :span="6">
                     <div class="d" @click="change(4)"  :class="{'active4':active == 4}">
                          <p>0</p>
                         <span>结算单</span>
                     </div>
                 </el-col>
             </el-row>
             <div class="bg">
             <img src="~@/assets/img/bbg.png" alt="">
             </div>
        </div>
      </el-col>
      <el-col :span="8">
          <div class="rt">
               <div class="title">
            <span>公告信息</span>
               </div>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            active: 1
        }
    },
    methods: {
        change(i) {
            this.active = i
        }
    }
};
</script>

<style lang="scss" scoped>
.gzt {
  padding: 10px;
}
.lt {
  height: 160px;
      border-bottom: 6px solid #f3f4f8;

  .title {
      display: flex;
      justify-content: space-between;
      border-left: 5px solid #3c6ef0;
      align-items: center;
    span {
      padding-left: 15px;
      display: inline-block;
    }
  }
  .body {
      margin-top: 15px;
      display: flex;
      * {
          padding: 0;
          margin: 0;
      }
      >div {
          flex: 2;
          padding-left: 4%;
      }
      h2 {
          color: #3c6ef0;
          font-size: 36px;
          font-weight: normal;
      }
      p {
          font-size: 14px;
          margin-bottom: 5px;
      }
      span {
          color: #969696;
          font-size: 12px;

      }
      ul{
          flex: 5;
          display: flex;
          justify-content: space-between;
          li {
              list-style: none;
              h2 {
                  color:#333;
              }
          }
          
      }
  }
}
.lb {
    padding-top: 10px;
      .title {
      display: flex;
      justify-content: space-between;
      border-left: 5px solid #3c6ef0;
      align-items: center;
    span {
      padding-left: 15px;
      display: inline-block;
    }
  }
  .a,
  .b,
  .c,
  .d {
      margin-top: 10px;
      cursor: pointer;
      padding-top: 15px;
      padding-left: 10px;
      height: 80px;
      background: url('~@/assets/img/22.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      * {
          margin: 0;
          padding: 0;
      }
      p {
          font-size: 34px;
      }
      span {
          color: #666;
          font-size: 14px;
      }
  }
  .b {
      background: url('~@/assets/img/11.svg');
      background-size: 100% 100%;

  }
  .c {
      background: url('~@/assets/img/33.svg');
      background-size: 100% 100%;

  }
  .d {
      background: url('~@/assets/img/44.svg');
      background-size: 100% 100%;

  }
  .active {
      background: url('~@/assets/img/222.png');
       background-size: 100% 100%;
      p,span {
          color: #fff;
      }
  }
    .active2 {
      background: url('~@/assets/img/111.png');
       background-size: 100% 100%;
      p,span {
          color: #fff;
      }
  }
    .active3 {
      background: url('~@/assets/img/333.png');
       background-size: 100% 100%;
      p,span {
          color: #fff;
      }
  }
    .active4 {
      background: url('~@/assets/img/444.png');
       background-size: 100% 100%;
      p,span {
          color: #fff;
      }

      }
            .bg {
          text-align: center;
          padding-top: 40px;
        img {
          width: 60%;
        }

  }
}
.rt {
          .title {
              padding: 4px 0;
      display: flex;
      justify-content: space-between;
      border-left: 5px solid #3c6ef0;
      align-items: center;
    span {
      padding-left: 15px;
      display: inline-block;
    }
  }
}
</style>