<template>
  <div class="syd">
    <search-box noshow>
      <div slot="custom">
        <div class="searchBoxIn">
          <el-row>
            <el-col :span="6">
              <span class="title">用户名：</span>
              <el-input
                v-model="input"
                size="mini"
                placeholder="请输入内容"
              /></el-col>
            <el-col :span="6">
              <span class="title">姓名：</span>
              <el-input
                v-model="input"
                size="mini"
                placeholder="请输入内容"
              /></el-col>
            <el-col :span="6">
              <span class="title">创建人:</span>
              <el-input
                v-model="input"
                size="mini"
                placeholder="请输入内容"
              /></el-col>
            <el-button
              icon="el-icon-search"
              size="mini"
              type="primary"
            >搜索</el-button>
            <el-button icon="el-icon-refresh-right" size="mini">重置</el-button>
            <el-button
              icon="el-icon-plus"
              size="mini"
              type="primary"
              @click="handleClick"
            >新增</el-button>
          </el-row>
        </div>
      </div>
    </search-box>
    <div class="bor middle">
      <el-row>
        <el-button
          icon="el-icon-upload"
          size="mini"
          type="primary"
        >批量导入</el-button>
        <el-button icon="el-icon-download" size="mini">下载模板</el-button>
      </el-row>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="id" />
          <el-table-column prop="a" label="用户名" />
          <el-table-column prop="b" label="姓名" />
          <el-table-column prop="c" label="角色" />
          <el-table-column prop="d" label="状态" />
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="handleClick(scope.row)"
              >查看</el-button>
              <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      title="用户信息"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
        <div class="dia">
          <p>基本信息</p>
          <el-form-item label="所属角色" prop="region">
            <el-select v-model="ruleForm.region" size="mini" placeholder="主账号默认角色">
              <el-option label="主账号默认角色" value="shanghai" />
            </el-select>
          </el-form-item>
          <el-form-item label="是否是负责人" prop="region">
            <el-select v-model="ruleForm.region" size="mini" placeholder="是">
              <el-option label="是" value="shanghai" />
            </el-select>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" size="mini" />
          </el-form-item>
          <p>账号信息</p>
          <el-form-item label="商户主体账号" prop="zh">
            <el-input v-model="ruleForm.zh" size="mini" />
          </el-form-item>
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name" size="mini" />
          </el-form-item>
          <el-form-item label="密保手机" prop="sj">
            <el-input v-model="ruleForm.sj" size="mini" />
          </el-form-item>
          <el-form-item label="密保邮箱" prop="yx">
            <el-input v-model="ruleForm.yx" size="mini" />
          </el-form-item>
          <p>普通月结</p>
          <el-form-item label="绑定月结" prop="bd">
            <el-input v-model="ruleForm.bd" size="mini" />
          </el-form-item>
          <el-form-item label="默认月结" prop="mr">
            <el-input v-model="ruleForm.mr" size="mini" />
          </el-form-item>
        </div>
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
      value: '',
      tableData: [{ a: 'wuxijuxiang', c: '主账号默认角色', d: '启用' }],
      dialogVisible: false,
      ruleForm: {
        zh: 'wuxijuxiang',
        name: 'wuxijuxiang',
        sj: '17834569551',
        bd: '',
        mr: '',
        yx: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
        ] }
    }
  },
  methods: {
    handleClick(a) {
      this.dialogVisible = true
      console.log(a)
    }
  }
}
</script>

<style lang="scss" scoped>
.middle {
  padding: 10px;
}
.table {
  margin-top: 15px;
}
.dia {
    p {
        font-size: 16px;
        font-weight: bold;
        padding-left: 15px;
        border-left: 5px solid #007aff;
    }
}
</style>
