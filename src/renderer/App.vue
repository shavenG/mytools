<template>

      <div id="app">
        <el-breadcrumb separator="/" style="margin:20px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>javascript工具</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </div>

</template>

<script>
  export default {
    name: 'my-tools'
  }
</script>

<style>
  /* CSS */
  
</style>
