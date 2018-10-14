<template>
    <div class="index">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有" name="all"></el-tab-pane>
            <el-tab-pane label="开发类" name="json"></el-tab-pane>
            <el-tab-pane label="站长类" name="sql"></el-tab-pane>
            <el-tab-pane label="极客类" name="javascript"></el-tab-pane>
            <el-tab-pane label="其它" name="playlist"></el-tab-pane>
            <el-tab-pane label="奇淫巧技" name="ys"></el-tab-pane>
            <el-tab-pane label="网址导航" name="szzj"></el-tab-pane>
        </el-tabs>
        <div class="index-body">
            <transition name="el-fade-in-linear">
                <javascript v-if="activeName==='javascript'" />
                <json v-if="activeName==='json'" />
                <sql v-if="activeName==='sql'" />
                <list :data="tools" />
            </transition>
        </div>
    </div>
</template>
<script>
    import javascript from './javascript'
    import json from './json'
    import sql from './sql'
    
    import list from './list'
    import tools from './tools.json'

    export default {
        components: {
            javascript,
            json,
            sql,
            list
        },
        data() {
            return {
                tools: tools,
                activeName: 'all'
            }
        },
        mounted() {
            // Object.keys(tools).forEach(element => {
            //     console.error(tools[element]);
            //     if( tools[element]['children'].length > 0 ){
            //         this.tools = this.tools.concat(tools[element]['children']);
            //     }
            // });
        },
        methods: {
            handleClick() {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .card{width:100%;height:100%;}
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
            overflow: hidden;
            display: flex;
        }
    }
</style>
