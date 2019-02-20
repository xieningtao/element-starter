<template>
    <el-container >
        <el-main v-loading.fullscreen.lock="removeLoading">
            <div v-show="seen" style="width: 100%;height: 300px" element-loading-text="拼命加载中"
                 v-loading="loading"></div>

            <div v-show="error" style="width: 100%;height: 300px;text-align: center">
                <el-button @click="retry">加载失败,点击重试</el-button>
            </div>
            <div class="box-card-container">
                <el-card v-for="(img,index) in imgWall" class="box-card" @click.native="jumpToDetail(img)">

                    <div style="display: flex;flex-direction: column">
                        <img class="img-box"
                             :src="img.imgUrl"/>
                        <div class="text-box">
                            <span class="img-text">{{img.imgLabel}}:{{img.imgDesc}}</span>
                        </div>
                    </div>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>

<script>

    export default {
        data () {
            return {
                pageSize: 10,
                pageNum: 0,
                imgWall: [],
                seen: true,
                loading: true,
                error: false,
                removeLoading: false,
                imgFactor: 0.3
            }
        },
        computed: {
            imgWidth: function () {
                return
            },
            imgHeight: function () {
                return this.imgFactor * 1280
            }
        },
        created: function () {
            debugger
            this.getPicList ()
        },

        methods: {
            getDiggest (diggest) {
                if (diggest == null || diggest == "") {
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
                this.removeLoading = true;
                const query = Bmob.Query ('Article');
                query.destroy (objectId).then (res => {
                    this.imgWall.splice (index, 1)
                    console.log (JSON.stringify (this.imgWall))
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
                const query = Bmob.Query ('CardPicGroup');
                query.order ("-updatedAt")
                query.limit (this.pageSize)
                query.skip (this.pageNum * this.pageSize)
                debugger
                query.find ().then (res => {
                    console.log (JSON.stringify (res))
                    this.imgWall = res
                    this.loading = false
                    this.seen = false
                    this.error = false
                    this.pageSize = this.pageSize + 1;
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
<!--1428-->
<style type="text/scss" lang="scss">
    $imgFactor: 0.3;
    $imgMargin: 10px;
    $wallWidth: (0.3*720*6 + 10 * 2* 6 + 6*2) px;

    .box-card-container {
        width: $imgFactor * 720px * 6 + $imgMargin * 2 * 6 + 6px * 2;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
    }

    .box-card {
        width: $imgFactor * 720px;
        height: auto;
        margin-top: $imgMargin;
        margin-left: $imgMargin;
        margin-right: $imgMargin;
        padding: 0px;
    }

    .img-box {
        width: $imgFactor * 720px;
        height: $imgFactor * 1080px;
    }

    .img-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: gray;
        align-self: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    .text-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: white;
        height: 38px;
    }

    .el-card__body {
        padding: 0px;
    }
</style>