<template>
<el-card class="box-card">
  <el-row style="height:50px; line-height:45px;border:1px solid red;">
    <el-col :span="4">
      <el-button-group>
        <el-button icon="el-icon-minus" circle size="mini"></el-button>
        <el-button type="success" icon="el-icon-plus" circle size="mini"></el-button>
        <el-button type="danger" icon="el-icon-close" circle size="mini"></el-button>
      </el-button-group>
    </el-col>
    <el-col :span="10">
      <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
    </el-col>
    <el-col :span="10">
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div id="app">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-button size="small" @click="handleBeautify">美化(<u>B</u>eautify)</el-button>
      <el-button size="small">净化(<u>P</u>urify)</el-button>
    </el-col>
  </el-row>
</el-card>

</template>

<script>
  export default {
    name: 'my-tools'
  }
</script>

<style>
  /* CSS */
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
