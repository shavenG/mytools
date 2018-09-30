<template>

  <div id="app">
    <el-card style="margin:20px;">
      <el-row>
        <el-col :span="8">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>javascript工具</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="12" style="-webkit-app-region: drag">
          可拖动区域
          <!-- <el-input placeholder="请输入内容" v-model="input5">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="工具" value="1"></el-option>
              <el-option label="百度" value="2"></el-option>
              <el-option label="谷歌" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input> -->
        </el-col>
        <el-col :span="4" style="text-align:right;">
          <el-button icon="el-icon-minus" circle size="mini"></el-button>
          <el-button type="danger" icon="el-icon-close" circle size="mini"></el-button>
        </el-col>
      </el-row>
    </el-card>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "my-tools"
};
</script>

<style>
/* CSS */
</style>
