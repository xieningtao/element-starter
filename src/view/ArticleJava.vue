<template>
    <el-container>
        <el-main>
            <div v-show="seen" style="width: 100%;height: 300px" element-loading-text="拼命加载中"
                 v-loading="loading"></div>

            <div v-show="error" style="width: 100%;height: 300px;text-align: center">
                <el-button @click="retry">加载失败,点击重试</el-button>
            </div>

            <el-card v-for="article in javaArticles" class="box-card">
                <h1>{{article.title}}</h1>
                <p>{{article.diggest}}</p>
            </el-card>
        </el-main>
        <!--<router-link to="/edit">-->
            <!--<div style="display: block;position: fixed;right: 10px;bottom: 10px">-->
                <!--<el-button type="primary" icon="el-icon-edit" :round=true>-->
                    <!--添加-->
                <!--</el-button>-->
            <!--</div>-->
        <!--</router-link>-->
    </el-container>
</template>

<script>

    export default {
        data() {
            return {
                javaArticles: [],
                seen: true,
                loading: true,
                error: false,
            }
        },

        created: function () {
            this.getArticleList()
        },

        methods:{
            retry(){

            },
            getArticleList(){
                const query = Bmob.Query('Article');
                query.equalTo("type","==","java")
                query.find().then(res => {
                    console.log(JSON.stringify(res))
                    this.javaArticles=res
                    this.loading = false
                    this.seen = false
                    this.error = false
                }).catch(err => {
                    console.log(err)
                    this.error = true
                    this.loading = false
                    this.seen = false
                })
            }
        }
    }

</script>

<style>
    .box-card {
        width: auto;
        margin-top: 10px;
    }

</style>