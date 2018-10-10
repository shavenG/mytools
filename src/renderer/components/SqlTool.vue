<template>
  <el-card class="box-card" style="margin:20px;">
    <el-row>
      <el-col :span="24">
        <codemirror ref="myEditor" v-model="code" :options="cmOption"></codemirror>
      </el-col>
    </el-row>
    <el-row style="margin:10px 0;">
      <el-col :span="24">
        <el-button size="small" @click="handleBeautify">美化(
          <u>B</u>eautify)</el-button>
        <el-button size="small" @click="handleMangle">混淆(
          <u>M</u>angle)</el-button>
        <el-button size="small" @click="handleMinify">最小化(
          <u>M</u>inify)</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/lib/formatting.js'

  var UglifyJS = require("uglify-js");

  export default {
    data() {
      return {
        code: 
`-- 2018-07-01 修复复杂where条件括号丢失的问题
-- 2018-07-17 增加语法错误的提示
DELETE FROM table1 WHERE NOT EXISTS (SELECT * FROM table2 WHERE table1.field1=table2.field1);
`,
        cmOption: {
          tabSize: 4,
          styleActiveLine: false,
          lineNumbers: true,
          line: true,
          mode: "text/x-sql",
          theme: "default"
        }
      };
    },
    computed: { 
      editor() { 
        return this.$refs.myEditor 
      }
    },
    methods: {
      handleBeautify() {
        var totalLines = this.editor.codemirror.lineCount();
        this.editor.codemirror.autoFormatRange({line:0, ch:0}, {line:totalLines});
      },
      handleMinify(){
        this.code = UglifyJS.minify(this.code,{
          mangle: false
        }).code;
      },
      handleMangle(){
        this.code = UglifyJS.minify(this.code).code;
      },
    }
  };
</script>

<style>
.CodeMirror{width:100%;height:100% !important;}
</style>