<template>
    <el-card class="card">
        <el-row>
            <el-col :span="24">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 3}" placeholder="请输入内容" v-model="useragent">
                </el-input>
            </el-col>
        </el-row>
        <el-row style="margin:10px 0;">
            <el-col :span="24">
                <el-button size="small" @click="handleAnalyze">分析(
                    <u>A</u>nalyze)</el-button>
            </el-col>
        </el-row>
        <el-row style="margin:10px 0;">
            <el-col :span="24">
                <el-collapse :value="activeName">
                    <el-collapse-item name="1">
                        <template slot="title">
                            <i class="header-icon el-icon-info"></i> 系统
                        </template>
                        <div>{{ uainfo.os.family }} {{ uainfo.os.major }}</div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template slot="title">
                            <i class="header-icon el-icon-info"></i> 浏览器
                        </template>
                        <div>{{ uainfo.family }} {{ uainfo.major }}</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
var useragent = require("useragent");

export default {
  data() {
    return {
      activeName: ["1","2"],
      useragent: "",
      uainfo: {
        family: "",
        major: "",
        os: {
          family: "",
          major: ""
        }
      }
    };
  },
  mounted() {
    this.useragent = navigator.userAgent;
  },
  methods: {
    handleAnalyze() {
      this.uainfo = useragent.parse(this.useragent);
    }
  }
};
</script>

<style>
.card {
  width: 100%;
  height: 100% !important;
}
</style>