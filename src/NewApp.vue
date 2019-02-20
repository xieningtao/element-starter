<template>

    <div id="body">

        <div id="header">
            <div id="logo">
                <img src="./assets/logo.png" v-on:click="open()"/>
            </div>
            <div id="title"> this is a header jjjjjjjjjjjlllllkkkkkksssssss</div>

            <div id="right_logo"></div>
        </div>

        <div id="content">
            <div id="left" ref="left">
                <ul>
                    <li v-on:click="close()">菜单一</li>
                    <li>菜单二</li>
                    <li>菜单三</li>
                    <li>菜单四</li>
                    <li>菜单五</li>
                    <li>菜单六</li>
                </ul>
            </div>
            <div id="real_content">
                <!--<router-view></router-view>-->
            </div>
            <div id="right"></div>

        </div>
    </div>
</template>
<script>
    export default {

        methods:{
            open(){
//                this.$refs.left.style.width = "7rem";
//                this.$refs.left.style.visibility="visible"
                this.$refs.left.style.transform="translateX(0rem)"
            },

            close(){
//                this.$refs.left.style.width="0rem"
                this.$refs.left.style.transform="translateX(-7rem)"
//                this.$refs.left.style.visibility="hidden"
            }
        }
    }
</script>

<style>
    #body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

    }

    #header {
        width: 100%;
        height: 5rem;
        background-color: orangered;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        position: fixed;
    }

    #header > #logo {
        margin-left: 0.5rem;
        height: 100%;
        position: relative;
    }

    #header > #right_logo {
        height: 100%;
        width: 5rem
    }

    #logo > img {
        height: 100%;
        width: 5rem
    }

    #header > #title {

    }

    #content {
        background-color: yellow;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }

    #content > #left {
        width: 7rem;
        height: 100%;
        background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        margin-top: 5rem;
        transition: all 0.5s;
    }

    #content > #real_content{
        overflow: scroll;
        background: gray;
        width: 100%;
        height: 3000px;
    }

    #left > ul{
        text-align: center;
        list-style-type: none;
        text-align: center;
        padding-left: 0px;

    }

    ul > li{
        padding: 1rem 0rem;

    }

    li:hover{
        background-color: yellow;
    }

    #content > #right{
        width: 7rem;
        height: 100%;
        background-color: pink;
    }
</style>

