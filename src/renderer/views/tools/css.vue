<template>
  <el-card class="card">
    <el-row>
      <el-col :span="24">
        <codemirror ref="myEditor" v-model="code" :options="cmOption" class="card"></codemirror>
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
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/lib/formatting.js'

  export default {
    data() {
      return {
        code: 
`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
</head>
<body>
<div id="wrap">
	<div id="header">
		<h1>html在线工具</h1>
		<!--   如果有用，请别忘了推荐给你的朋友：		-->
		<!--   Html在线美化、格式化：https://tool.lu/html   -->
	</div>
	<div id="main">
		<!-- [history] -->
		<dl>
			<dt>v1.0</dt>
			<dd>2011-06-05 Html工具上线</dd>
			<dt>v1.1</dt>
			<dd>2012-01-14 修复美化功能，增加压缩</dd>
			<dt>v1.2</dt>
			<dd>2012-07-20 增加清除链接功能</dd>
			<dt>v1.3</dt>
			<dd>2014-08-05 修改 html 压缩引擎</dd>
			<dt>v1.4</dt>
			<dd>2014-08-09 增加转换为js变量的功能</dd>
		</dl>
	</div>
	<div id="footer">
		This is just an example.
	</div>
</div>
</body>
</html>
`,
        cmOption: {
          tabSize: 4,
          styleActiveLine: false,
          lineNumbers: true,
          line: true,
          mode: "text/javascript",
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
.card{width:100%;height:100%;}
.CodeMirror{width:100%;height:100% !important;}
</style>