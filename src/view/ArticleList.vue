<template>
    <el-container>
        <el-main  v-loading.fullscreen.lock="removeLoading" >
            <div v-show="seen" style="width: 100%;height: 300px" element-loading-text="拼命加载中"
                 v-loading="loading"></div>

            <div v-show="error" style="width: 100%;height: 300px;text-align: center">
                <el-button @click="retry">加载失败,点击重试</el-button>
            </div>

            <el-card v-for="(article,index) in javaArticles" class="box-card" @click.native="jumpToDetail(article)">
                <div style="display: flex;flex-direction: row">
                    <img style="margin-left:-5px;width: 160px;height:120px;"
                         src="https://www.oracle.com/a/ocom/img/cw58-java-logo.jpg"/>
                    <div style="margin-left:10px;display: flex;flex-grow:2;flex-direction: column">
                        <h1 style="margin-top: 10px">{{article.title}}</h1>
                        <div style="flex-grow: 2"></div>
                        <div style="margin-bottom: 10px" >{{getDiggest(article.diggest)}}</div>
                    </div>
                    <el-button style="height: 40px;align-self: center;margin-right: 10px" v-on:click.stop="remove(article.objectId,index)">
                        删除
                    </el-button>
                </div>
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
        data () {
            return {
                javaArticles: [],
                seen: true,
                loading: true,
                error: false,
                removeLoading:false
            }
        },
        computed:{

        },
        created: function () {
            this.getPicList ()
        },

        methods: {
            getDiggest(diggest){
                if(diggest == null || diggest == ""){
                    return "this is default diggest"
                }
                return diggest
            },
            jumpToDetail ({title, objectId}) {
                console.info ("method->jumpToDetail title " + title)
                const id = objectId;
                this.$router.push ({name: 'articleDetail', params: {id: id}})
            },
            remove (objectId, index) {
                this.removeLoading=true;
                const query = Bmob.Query ('Article');
                query.destroy (objectId).then (res => {
                    this.javaArticles.splice (index, 1)
                    console.log (JSON.stringify (this.javaArticles))
                    this.removeLoading = false;
                }).catch (err => {
                    console.log (err)
                    this.removeLoading = false;
                })
            },
            testClick (event) {
                console.info ("testClick event")
            },
            retry () {

            },
            getPicList () {
                const query = Bmob.Query ('Article');
                query.equalTo ("type", "==", "java")
                query.find ().then (res => {
                    console.log (JSON.stringify (res))
                    this.javaArticles = res
                    this.loading = false
                    this.seen = false
                    this.error = false
                }).catch (err => {
                    console.log (err)
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
        height: 120px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding: 0px;
    }

    .el-card__body{
        padding: 0px;
    }
</style>