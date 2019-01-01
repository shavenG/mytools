<template>
    <el-row style="width:100%">
            <div v-for="obj in data" :key="obj.name">
                <el-col :span="6" v-for="o in obj.children" :key="o.name">
                    <el-card shadow="always" style="margin:10px;">
                        <div slot="header" class="clearfix">
                            <router-link :to="{ path: o.path, query:{url:o.url} }">
                            <el-button icon="el-icon-news" type="text">【{{ obj.name }}】{{ o.name }}</el-button>
                            </router-link>
                            <el-tag type="danger" size="mini" v-if="o.online == 'yes'">online</el-tag>
                        </div>
                        <div class="text item">
                            <span>{{ o.descript }}</span>
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
  props: ["data"]
};
</script>

<style>
* {
  font-size: 14px;
  font-family: "Courier New", "Microsoft yahei";
}
.item {
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 18px;
}
</style>



