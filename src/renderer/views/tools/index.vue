<template>
    <div class="index">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有" name="all"></el-tab-pane>
            <el-tab-pane label="开发类" name="developer"></el-tab-pane>
            <el-tab-pane label="站长类" name="webmaster"></el-tab-pane>
            <el-tab-pane label="极客类" name="geek"></el-tab-pane>
            <el-tab-pane label="维护类" name="devops"></el-tab-pane>
            <el-tab-pane label="其它" name="other"></el-tab-pane>
            <el-tab-pane label="奇淫巧技" name="interesting"></el-tab-pane>
            <el-tab-pane label="网址导航" name="webnavigate"></el-tab-pane>
        </el-tabs>
        <div class="index-body">
            <transition name="el-fade-in-linear">
                <list :data="tools" />
            </transition>
        </div>
    </div>
</template>
<script>    
    import list from './list'
    import tools from './tools.json'

    export default {
        components: {
            list
        },
        data() {
            return {
                tools: tools,
                activeName: 'all'
            }
        },
        mounted() {

        },
        methods: {
            handleClick() {
                let activeName = this.activeName;
                this.tools = activeName == 'all' ? tools : {activeName : tools[activeName] };
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
            overflow: auto;
            display: flex;
        }
    }
</style>
