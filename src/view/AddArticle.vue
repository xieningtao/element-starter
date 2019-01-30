<template>
    <el-container style="height: 100%" direction="vertical">
        <el-header style="width: 100%">
            <div style="position:absolute;right: 10px;top: 10px">
                <el-button @click="saveArticle">保存</el-button>
            </div>

            <div style="display:flex;justify-content:center;align-items:center;width: 100%;height: 100%">
                <el-input style="width: 30%;text-align: center" v-model="blog_title" placeholder="请输入标题"></el-input>
            </div>

        </el-header>

        <el-main>
            <mavon-editor style="width: 100%;height: 100%" @change="writeData" @save="saveArticle"
                          ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"/>
        </el-main>
    </el-container>
</template>

<script>
    import MavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import ElRow from "element-ui/packages/row/src/row";
    import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";

    export default {
        data () {
            return {
                value: "",
                render: "",
                blog_title: ""
            }
        },
        methods: {
            writeData (value, render) {
                console.info ("value: " + value + " render: " + render)
                this.value = value
                this.render = render
            },

            saveMdByFile(){

            },
            $imgDel(pos){

            },
            // 绑定@imgAdd event
            $imgAdd (pos, $file) {
                // 第一步.将图片上传到服务器.
//                var formdata = new FormData ();
//                formdata.append ('image', );
                var file = Bmob.File($file.name, $file);
                file.save().then ((res) => {
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    /**
                     * $vm 指为mavonEditor实例，可以通过如下两种方式获取
                     * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
                     * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
                     */
                    this.$refs.md.$img2Url (pos, res[0].url);
                    console.info("url: "+res[0].url)
                }).catch(error=>{
                    console.error("error: "+JSON.stringify(error))
                })
            },
            saveArticle () {
                const query = Bmob.Query ('Article');
                query.set ("title", this.blog_title)
                query.set ("content", this.value)
                query.set ("render", this.render)
                query.set ("type", "java")
                query.save ().then (res => {
                    console.log (res)
                    this.$router.go (-1)
                }).catch (err => {
                    console.log (err)
                })
            }
        },
        components: {
            ElFooter,
            'mavon-editor': MavonEditor.mavonEditor
        }
    }
</script>

