<template>
    <el-row style="width:100%">
        <el-col :span="6" v-for="obj in data" :key="obj.name">
            <el-card shadow="always" style="margin:10px;">
                <div slot="header" class="clearfix">
                    <i class="el-icon-news"></i>
                    <span>{{ obj.name }}</span>
                    <a style="float: right; padding: 3px 0" type="text">[ 开发类 ]</a>
                </div>
                {{ obj.descript }}
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
  props: ["data"],
  mounted() {
    console.log("this.data");
    console.log(this.data);
  }
};
</script>

<style>

</style>



