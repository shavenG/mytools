<template>
  <el-card class="card">
    <el-row>
      <el-col :span="24">
        <iframe frameborder="0" id="bdIframe" width="100%" :src="url"></iframe>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>

  export default {
    data() {
      return {
        url:'https://www.baidu.com'
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
    },
    mounted(){
        const oIframe = document.getElementById('bdIframe');
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        // oIframe.style.width = (Number(deviceWidth)-220) + 'px'; //数字是页面布局宽度差值
        oIframe.style.height = (Number(deviceHeight)-120) + 'px'; //数字是页面布局高度差
    },
    watch: {
        $route(to, from) {
            this.url = to.query.url;
        }
    }
  };
</script>

<style>
.card{width:100%;height:98%;overflow: hidden;}
</style>