<template>
    <div>
        <el-container class="container" id="main">
            <el-container style="position: relative;">
                <el-container >
                    <el-header class="header" height="50px" style="-webkit-app-region: drag">
                        <header-view height="50px" />
                    </el-header>
                    <el-main class="main">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>

                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import HeaderView from '../components/Header/'

    export default {
        components: {
            HeaderView
        }
    }
</script>
<style lang="scss" scoped>
    .aside {
        display: flex;
        flex-direction: column;
        background: linear-gradient(to bottom, #efefef, #efefef);
    }

    .container {
        height: 100vh;
    }

    .header {
        background: #fafafa;
    }

    .main {
        padding: 0;
        margin: 0;
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-shrink: 0;
    }

    .footer {
        background: #f7f7f7;
        padding: 0;
    }
</style>
