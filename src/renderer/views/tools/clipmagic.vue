<template>
    <el-card class="card">
        <el-row>
            <el-col :span="24">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="剪贴板内容" v-model="content">
                </el-input>
            </el-col>
        </el-row>
        <el-row style="margin:10px 0;">
            <el-col :span="24">
                <el-select v-model="policy" placeholder="请选择策略">
                    <el-option-group v-for="group in policys" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-option-group>
                </el-select>
                <el-button @click="handleTransform">变形(
                    <u>T</u>ransformers)</el-button>
                <el-button @click="handleTransform">变形 & 复制(
                    <u>C</u>opy)</el-button>
            </el-col>
        </el-row>
        <el-row style="margin:10px 0;">
            <el-col :span="24">
                <!-- <el-alert title="不可关闭的 alert" type="success" :closable="false">
                </el-alert>
                <el-alert title="自定义 close-text" type="info" close-text="知道了">
                </el-alert>
                <el-alert title="设置了回调的 alert" type="warning">
                </el-alert> -->
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
      configs: {
        "in": {
          prefix: "in ('",
          suffix: "')",
          searchValue: /\n/g,
          replaceValue: "','"
        }
      },
      content: "",
      policys: [
        {
          label: "SQL辅助",
          options: [
            {
              value: "in",
              label: "in变形(CTRL+0)"
            }
          ]
        },
        {
          label: "加解密",
          options: [
            {
              value: "urlencode",
              label: "URL编码(CTRL+1)"
            },
            {
              value: "urldecode",
              label: "URL解码"
            },
            {
              value: "base64encode",
              label: "base64编码"
            },
            {
              value: "base64decode",
              label: "base64解码"
            }
          ]
        }
      ],
      policy: ""
    };
  },
  computed: {},
  methods: {
    handleTransform() {
      let config = this.configs[this.policy];
      this.content = config.prefix + this.content.replace(config.searchValue,config.replaceValue) + config.suffix;
    }
  }
};
</script>

<style>
* {
  font-size: 14px;
  font-family: "Courier New", "Microsoft yahei";
}
.card {
  width: 100%;
  height: 100%;
}
</style>