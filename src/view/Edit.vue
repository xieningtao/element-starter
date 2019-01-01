<template>

    <div class="container">
        <h1>添加新的库控制</h1>
        <div class="sub_container">
            <span class="leftLabel">检测仓库</span>
            <el-input
                    v-model="repository"
                    class="input_edit"
                    placeholder="请输入仓库"
                    clearable>
            </el-input>
        </div>
        <div class="sub_container">
             <span class="leftLabel">
                单前分支
             </span>
            <el-input
                    v-model="branch"
                    class="input_edit"
                    placeholder="请输入分支"
                    clearable>
            </el-input>
        </div>
        <!--<el-row class="input_container">-->

        <div class="sub_container">
                <span class="leftLabel">
                    单前单号
                </span>
            <el-input
                    v-model="num"
                    class="input_edit"
                    placeholder="请输入单号"
                    clearable>
            </el-input>
        </div>
        <!--</el-row>-->
        <el-row style="width: 400px">
            <el-button class="submit_bt" v-on:click="submit">提交</el-button>
        </el-row>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {

        data() {
            return {
                repository: "",
                branch: "",
                num: ""
            }

        },

        methods: {
            ...mapActions({
                add:"repos/addRepo"
            }),
            submit() {
                console.info("submit info repository: " + this.repository + " branch: " + this.branch + " num:" + this.num)
//                Alert("click submit button")
                if (this.repository == "" || this.branch == "" || this.num == "") {
                    this.$alert('请填写好内容', '标题', {
                        confirmButtonText: '确定'
                    })
                    return;
                }

                    let item={"repo":this.repository,"branch":this.branch,"no":this.num}
                    this.add(item)
                    this.$router.go(-1);

            }
        }
    }
</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .leftLabel {
        flex-grow: 0;
        text-align: center;
    }

    .sub_container {
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .input_edit {
        width: 300px;
        margin-left: 8px;
        flex-grow: 1;
    }

    .submit_bt {
        width: 400px;
        vertical-align: middle;
        text-align: center;
        margin-top: 10px
    }
</style>