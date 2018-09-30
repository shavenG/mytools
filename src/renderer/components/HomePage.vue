<template>
    <div style="margin:20px">
        <el-tabs type="border-card">
            <el-tab-pane label="开发类">
                <el-row>
                    <el-col :span="4" style="margin:10px;">
                        <el-card>
                            <div>
                                <span>json工具</span>
                                <div class="bottom clearfix">
                                    <router-link to="/json">json工具</router-link>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" style="margin:10px;">
                        <el-card>
                            <div>
                                <span>javascript工具</span>
                                <div class="bottom clearfix">
                                    <router-link to="/js">javascript工具</router-link>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="4" style="margin:10px;">
                        <el-card>
                            <div>
                                <span>sql工具</span>
                                <div class="bottom clearfix">
                                    <router-link to="/sql">sql工具</router-link>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="站长类">配置管理</el-tab-pane>
            <el-tab-pane label="极客类">角色管理</el-tab-pane>
            <el-tab-pane label="其它类">定时任务补偿</el-tab-pane>
            <el-tab-pane label="网址导航">定时任务补偿</el-tab-pane>
            <el-tab-pane label="设置">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {};
</script>