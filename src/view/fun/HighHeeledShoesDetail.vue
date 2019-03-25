<template>
    <el-container style="height: 100%">
        <el-header style="display: flex;justify-content: center;align-items: center">
            <h1>{{title}}</h1>
        </el-header>

        <el-main class="markdown-edit-container">
            <mavon-editor class="markdown-edit-content" v-model="content" :subfield="false"
                          :defaultOpen="defaultData" :toolbarsFlag="false" :boxShadow="false"/>
            <!--<div style="width:100%;display: flex;justify-content: center;align-items: center" v-html="myRender"></div>-->
        </el-main>
    </el-container>
</template>


<script>
    import 'mavon-editor/dist/css/index.css'
    var mavonEditor = require ('mavon-editor')

    export default {
        data () {
            return {
                content: "",
                myRender: "",
                title: "",
                defaultData: "preview"
            }
        },
        created: function () {
            debugger
            var param = this.$route.params;
            const query = Bmob.Query ('Article');
            const objectId = param.id
            query.get (objectId).then (res => {
                console.log (JSON.stringify (res))
                this.content = res.content
                this.myRender = res.render
                this.title = res.title

            }).catch (err => {
                console.log (err)

            })
        },
        methods: {
            writeData (value, render) {
                console.info ("value: " + value + " render: " + render)
                this.content = render
            }
        },
        components: {
            'mavon-editor': mavonEditor.mavonEditor
        }
    }
</script>

<style type="text/scss" lang="scss">
    .markdown-edit-container {
        background: yellow;
        .v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
            background: white;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
.markdown-edit-content{
    width:70%;
    height: 100%;
    align-self: center;
    margin: 0px auto;
}
</style>