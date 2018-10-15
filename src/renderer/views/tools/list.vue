<template>
    <el-row style="width:100%">
        <div v-for="obj in data" :key="obj.name">
            <el-col :span="6" v-for="o in obj.children" :key="o.name">
                <el-card shadow="always" style="margin:10px;">
                    <div slot="header" class="clearfix">
                        <router-link :to="{ path: o.path }">
                            <el-button icon="el-icon-news" type="text">【{{ obj.name }} 】{{ o.name }}</el-button>                              
                        </router-link>
                    </div>
                    <div class="text item">
                        {{ o.descript }}
                    </div>  
                    <div class="text item">
                        <span>{{ o.url }}</span>
                    </div>  
                </el-card>
            </el-col>
        </div>
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
    * {font-size: 14px;}
    .item {
        margin-bottom: 18px;
    }
</style>



