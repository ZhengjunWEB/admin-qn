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
                    <el-button icon="el-icon-plus" size="mini" type="primary" @click="changec" >新增</el-button>
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
      <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="70%"
  :before-close="handleClose">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
  <el-form-item label="店铺名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    <el-form-item label="真实店铺名称" prop="zs">
    <el-input v-model="ruleForm.zs"></el-input>
  </el-form-item>
    <el-form-item label="寄件地址" prop="dz">
    <el-input v-model="ruleForm.dz"></el-input>
  </el-form-item>
    <el-form-item label="退回地址" prop="fh">
    <el-input v-model="ruleForm.fh"></el-input>
  </el-form-item>
    <el-form-item label="店铺备注" prop="bz">
    <el-input v-model="ruleForm.bz"></el-input>
  </el-form-item>
      <el-form-item label="状态推送地址" prop="ts">
    <el-input v-model="ruleForm.ts"></el-input>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 1,
            value:'',
            dialogVisible: false,
                 ruleForm: {
          name: '',
        zs:'',
        dz:'',
        fh:'',
        bz:'',
        ts:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
        }
    },
methods: {
    change(i) {
        this.active = i
    },
    changec() {
        this.dialogVisible = true
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