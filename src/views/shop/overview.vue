<template>
  <div class="shop">
      <div class="left">
          <ul>
              <li @click="change(1)" :class="{'active':active == 1}"><img src="~@/assets/img/dy.png" alt=""><span>抖音鲁班</span></li>
              <li @click="change(2)" :class="{'active':active == 2}"><img src="~@/assets/img/dy.png" alt=""><span>抖音小店</span></li>
              <li @click="change(3)" :class="{'active':active == 3}"><img src="~@/assets/img/ks.png" alt=""><span>快手小店</span></li>
              <li @click="change(4)" :class="{'active':active == 4}"><img src="~@/assets/img/ks.png" alt=""><span>快手电商</span></li>
          </ul>
      </div>
      <div class="right">
           <search-box noshow>
          <div slot="custom">
            <div class="searchBoxIn">
                <el-row >
                    <el-col :span="7"> <span class="title">店铺名称：</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="7"> <span class="title">授权状态</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="7"> <span class="title">创建人:</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row>
                    <el-col :span="9"> <span class="title" style="width: 120px">真实店铺名称：:</span> <el-input v-model="input" size="mini" placeholder="请输入内容"></el-input></el-col>
                    <el-button style="margin-left:20px" icon="el-icon-search" size="mini" type="primary">搜索</el-button>
                    <el-button icon="el-icon-refresh-right" size="mini" >重置</el-button>
                </el-row>
            </div>
          </div>
      </search-box>
        <table-box>
          <div slot="table">
            <el-table :data="tableData" stripe border size="mini" style="width: 100%" >
                <el-table-column type="index" label="序号" />
                <el-table-column label="店铺编码" />
                <el-table-column prop="yd" label="店铺名称" />
                <el-table-column prop="yd" label="父平台" />
                <el-table-column prop="yd" label="平台" />
                <el-table-column prop="yd" label="授权状态" />
                <el-table-column prop="yd" label="真实店铺名称" />
                <el-table-column prop="yd" label="授权有效期至" />
                <el-table-column prop="yd" label="申请授权账号" />
                <el-table-column prop="yd" label="状态" />
                 <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template >
        <el-button  type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
            </el-table>
          </div>
      </table-box>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 1,
            value:''
        }
    },
methods: {
    change(i) {
        this.active = i
    }
}
}
</script>

<style lang="scss" scoped>
.shop {
    display: flex;
    padding: 0 10px;
    >div {
        height: calc(100vh - 84px);
    }
    .left {
        width: 200px;
        border-right: 5px solid #dddfe7;
        ul {
            padding-left: 0;
            li {
                cursor: pointer;
                padding-left: 30px;
                list-style: none;
                height: 60px;
                line-height: 60px;
                img {
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                    margin-right: 6px;
                }
                span {
                    color: #6b6563;
                    font-size: 14px;
                }
            }
            .active {
                background-color: #f7fbff;
                border-left: 5px solid #4a9ad6;
            }
        }
    }
    .right {
        flex: 1;
        margin-left: 5px;
    }
}

</style>