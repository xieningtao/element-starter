<template>
    <el-tabs v-model="activeName" class="theme1" @tab-click="handleClick">
        <el-tab-pane name="one">
            <span slot="label"><i class="el-icon-date" style="padding-right: 5px"></i> 所有项目</span>

            <home-banner></home-banner>
            <el-container>
                <el-main>
                    <div v-show="seen" style="width: 100%;height: 300px" element-loading-text="拼命加载中"
                         v-loading="loading"></div>

                    <div v-show="error" style="width: 100%;height: 300px;text-align: center">
                        <el-button @click="retry">加载失败,点击重试</el-button>
                    </div>

                    <el-card v-for="card in projectData" class="box-card">
                        <p>检测仓库：{{card.repo}}</p>
                        <p>当前检测分支：{{card.branch}}</p>
                        <p>当前合理单号：{{card.no}}</p>
                    </el-card>
                </el-main>
                <router-link to="/edit">
                    <div style="display: block;position: fixed;right: 10px;bottom: 10px">
                        <el-button type="primary" icon="el-icon-edit" :round=true>
                            添加
                        </el-button>
                    </div>
                </router-link>
            </el-container>
        </el-tab-pane>
        <el-tab-pane name="second">
            <span slot="label"><i class="el-icon-picture" style="padding-right: 5px"/>Java</span>

            <!--<el-card v-for="card in 4" :key="card" class="box-card">-->
                <!--<div v-for="o in 4" :key="o" class="text item">-->
                    <!--{{'列表内容 ' + o }}-->
                <!--</div>-->
            <!--</el-card>-->
            <article-java></article-java>

        </el-tab-pane>

        <el-tab-pane label="美聊" name="third">

            <ul>
                <li>jlfsjkf</li>
                <li>jlfsjkf</li>
                <li>jlfsjkf</li>
                <li>jlfsjkf</li>
                <li>jlfsjkf</li>
            </ul>
        </el-tab-pane>

        <el-tab-pane label="同城" name="fourth">

        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import HomeBanner from "./HomeBanner"
    import ArticleJava from "./ArticleJava.vue"

    export default {

        data() {
            return {
                activeName: 'one',
                seen: true,
                loading: true,
                error: false,
//            projectData: [],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        created: function () {
//            setTimeout (() => {
//                this.loading = false
//                this.seen = false
//                this.projectData=[{"repo":"test","branch":"develop","no":"1"}]
//            }, 2000);
            console.log("create...")
            debugger
            if (this.projectData == null || this.projectData.length == 0) {
                this.loadProject("src/file/config.txt")
            } else {
                this.loading = false
                this.seen = false
                this.error = false
            }
            //request
        },
        computed: mapState({
            projectData(state) {
                console.log("projectData state");
                return state.repos.allRepos

            }

        }),

        components:{
            HomeBanner,
            ArticleJava
        },

        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
            ,
            retry() {
                this.loadProject("src/file/config.txt")
            },

            loadProject(path) {
                //发送get请求
                console.info("start request")
                this.$http.get(path, {_timeout: 1000}).then(function (res) {
                    console.log("res: " + JSON.stringify(res.body))
                    this.loading = false
                    this.seen = false
                    this.error = false
//                this.projectData = res.body;
                    //update store
                    this.$store.dispatch("repos/storeAllRepo", res.body)
                }, function () {
                    console.log('请求失败处理');
                    this.error = true
                    this.loading = false
                    this.seen = false
                });
            },
        }
    }
</script>

<style type="text/scss" lang="scss">
    .theme1 {
        .el-tabs__header {
            background: white;
            color: white;
            font-size: 18px;
            margin-right: 30px;
        }
        .el-tabs__item {
            color: black;
        }
        .el-tabs__nav {
            float: right;
            /*padding-right: 20px;*/
            /*padding-left: 20px;*/
            /*background: black;*/
        }

        .el-tabs__nav-wrap::after {
            background-color: gray;
            height: 1px;
        }
    }

    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: auto;
        margin-top: 10px;
    }


</style>