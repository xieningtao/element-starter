<template>
    <el-container>
        <el-header>
            <h1>this is header</h1>
        </el-header>

        <el-main>
            <div>
                <mavon-editor v-model="content" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" :boxShadow="false"  />
            </div>
        </el-main>

        <el-footer>

        </el-footer>
    </el-container>
</template>


<script>
    //    import MavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    var mavonEditor = require ('mavon-editor')

    export default {
        data () {
            return {
                content: "",
                defaultData: "preview"
            }
        },
        created: function (){
            var param = this.$route.params;
            const query = Bmob.Query('Article');
            const objectId=param.id
            query.get(objectId).then(res => {
                console.log(JSON.stringify(res))
                this.content=res.content

            }).catch(err => {
                console.log(err)

            })
        },
        methods:{
            writeData(value,render){
                console.info("value: "+value+" render: "+render)
                this.content=render
            }
        },
        components: {
            'mavon-editor': mavonEditor.mavonEditor
        }
    }
</script>

<style>


</style>