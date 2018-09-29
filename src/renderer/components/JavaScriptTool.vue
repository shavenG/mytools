<template>
  <el-card class="box-card" style="margin:20px;">
    <!-- <el-row>
      <el-col :span="4">
        <el-button-group>
          <el-button type="danger" icon="el-icon-close" circle size="mini"></el-button>
          <el-button type="success" icon="el-icon-plus" circle size="mini"></el-button>
          <el-button icon="el-icon-minus" circle size="mini"></el-button>
        </el-button-group>
      </el-col>
      <el-col :span="10">
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </el-col>
      <el-col :span="10" style="-webkit-app-region: drag">
      </el-col>
    </el-row> -->
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
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/lib/formatting.js'

  var UglifyJS = require("uglify-js");

  export default {
    data() {
      return {
        code: 
`/*   美化：格式化代码，使之容易阅读			*/
/*   净化：去掉代码中多余的注释、换行、空格等	*/
/*   压缩：将代码压缩为更小体积，便于传输		*/
/*   解压：将压缩后的代码转换为人可以阅读的格式	*/
/*   混淆：将代码的中变量名简短化以减小体积，但可读性差，经混淆后的代码无法还原	*/

/*   如果有用，请别忘了推荐给你的朋友：		*/
/*   javascript在线美化、净化、压缩、解压：https://tool.soxiazai.com/js   */

/*   以下是演示代码				*/
var Inote = {};
Inote.JSTool = function(options) {
this.options = options || {};
};
Inote.JSTool.prototype = {
	_name: 'Javascript工具',
_history: {
		'v1.0': ['2011-01-18', 'javascript工具上线'],
		'v1.1': ['2012-03-23', '增加混淆功能'],
		'v1.2':	['2012-07-21', '升级美化功能引擎'],
		'v1.3': ['2014-03-01', '升级解密功能，支持eval,window.eval,window["eval"]等的解密'],
		'v1.4':	['2014-08-05', '升级混淆功能引擎'],
		'v1.5':	['2014-08-09', '升级js压缩引擎'],
		'v1.6':	['2015-04-11', '升级js混淆引擎'],
		'v1.7':	['2017-02-12', '升级js混淆引擎']
	},
	options: {},
	getName: function() {return this._name;},
	getHistory: function() {
		return this._history;}
};
var jstool = new Inote.JSTool();
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
.CodeMirror{height:600px !important;;}
</style>