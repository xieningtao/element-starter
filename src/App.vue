<template>
    <el-container class="markdown-main" direction="vertical">
        <!--<el-header>-->
            <!--<h1 style="text-align: center"> gitlab 单号需求控制</h1>-->
        <!--</el-header>-->
        <el-main>
            <router-view></router-view>

        </el-main>
    </el-container>
</template>
<script>
    export default {

    }
</script>

<style type="text/scss" lang="scss">
    .markdown-main {
        height: 100%;
        .el-main {
            padding: 0px;
            height: 100%;
        }

    }
</style>

