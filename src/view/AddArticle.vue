<template>
    <el-container style="height: 100%" direction="vertical">
        <el-header style="width: 100%">
            <div style="position:absolute;right: 10px;top: 10px">
                <el-button @click="saveArticle">保存</el-button>
            </div>

            <div style="display:flex;justify-content:center;align-items:center;width: 100%;height: 100%">
                <el-input style="width: 30%" v-model="blog_title" placeholder="请输入内容"></el-input>
            </div>

        </el-header>

        <el-main>
            <mavon-editor style="width: 100%;height: 100%" @change="writeData"/>
        </el-main>
    </el-container>
</template>

<script>
    import MavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import ElRow from "element-ui/packages/row/src/row";
    import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

    //    var mavonEditor = require ('mavon-editor')

    export default {
        data() {
            return {
                value: "",
                render:"",
                blog_title:""
            }
        },
        methods: {
            writeData(value, render) {
                console.info("value: " + value + " render: " + render)
                this.value = value
                this.render=render
            },
            saveArticle(){
                const query = Bmob.Query('Article');
                query.set("title",this.blog_title)
                query.set("content",this.value)
                query.set("type","java")
                query.save().then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        components: {
            ElButton,
            ElFooter,
            ElRow,
            'mavon-editor': MavonEditor.mavonEditor
        }
    }
</script>

