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
        url:''
      };
    },
    mounted(){
        const oIframe = document.getElementById('bdIframe');
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        // oIframe.style.width = (Number(deviceWidth)-220) + 'px'; //数字是页面布局宽度差值
        oIframe.style.height = (Number(deviceHeight)-120) + 'px'; //数字是页面布局高度差
    },
    created(){
      this.url = this.$route.query.url;
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