<template>

    <div>
        <h1>添加新的库控制</h1>
        <div class="input_container">
            <p>检测仓库</p>
            <el-input
                    class="input_edit"
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
            </el-input>
        </div>
        <div class="input_container">
            <p>
                单前分支
            </p>
            <el-input class="input_edit"
                      placeholder="请输入内容"
                      v-model="input10"
                      clearable>
            </el-input>
        </div>
        <div class="input_container">
            <p>
                单前单号
            </p>
            <el-input
                    class="input_edit"
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
            </el-input>
        </div>

        <div class="input_container" style="background: red">
            <el-button style="align-self:flex-start" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>

    export default {

        method:{
            submit(){
                console.info("click submit button")
            }
        }
    }
</script>

<style>

    .input_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .input_edit {
        width: 300px;
        margin-left: 20px;
    }
</style>