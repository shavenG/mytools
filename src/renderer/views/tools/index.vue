<template>
  <list :data="tools"></list>
</template>
<script>
import list from "./list";
import tools from "./tools.json";

export default {
  components: {
    list
  },
  data() {
    return {
      tools: tools
    };
  },
  watch: {
    $route(to, from) {
      console.log("#### search");
      let kw = to.query.kw || "";
      if ("" != kw) {
        let result = [];
        Object.keys(tools).forEach(function(key) {
          let childrens = tools[key].children;
          console.log(childrens);
          childrens.forEach(function(obj) {
            if (obj.name.indexOf(kw) > -1 || obj.descript.indexOf(kw) > -1) {
              result.push(obj);
            }
          });
        });

        this.tools = {
          search: {
            name: "搜索",
            children: result
          }
        };
      } else {
        let activeName = to.query.activeName || "all";
        this.tools = (activeName == "all") ? tools : { activeName: tools[activeName] };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
}
.index {
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
  /deep/ .el-tabs {
    height: 40px;
    background: #fafafa;
    .el-tabs__header {
      padding: 0;
      margin: 0;
    }
    .el-tabs__nav-scroll {
      display: flex;
      justify-content: center;
      padding: 0;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
    .el-tabs__item {
      font-size: 14px;
    }
  }
  .index-body {
    background: #f0f0f0;
    flex: 1;
    overflow: auto;
    display: flex;
  }
}
</style>
