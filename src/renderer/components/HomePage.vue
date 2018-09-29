<template>
    <div style="margin:20px">
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
        </el-row>
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
export default {
};
</script>