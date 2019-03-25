<template>

    <div id="funContainer">

        <div id="header" v-show="false">
            <div id="logo">
                <img src="../../assets/logo.png" v-on:click="open()"/>
            </div>
            <div id="title"> this is a header jjjjjjjjjjjlllllkkkkkksssssss</div>

            <div id="right_logo"></div>
        </div>


        <div id="content">
            <div id="left" ref="left" v-show="true">
                <ul>
                    <li v-for="(item,index) in items" v-bind:key="index" v-bind:class="{active:item.active,unactive:!item.active}"
                        v-on:click="toPage(index,item)">
                        {{item.content}}
                    </li>
                </ul>
            </div>
            <div id="real_content">
                <router-view></router-view>
            </div>
            <div id="right" v-show="true">
                这里是推荐页
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                items: [
                    {content: "女神", active: true},
                    {content: "高跟鞋", active: false},
                    {content: "搞笑段子", active: false},
                ]
            }
        },
        mounted () {
            debugger
//            toPage("才当意")
            this.$router.replace ({name: 'mainPage', params: {tag: '菜单一'}})
//            this.$router.replace ({name: 'shoesList'})
        },
        methods: {
            open () {
//                this.$refs.left.style.transform="translateX(0rem)"
            },

            close () {
//                this.$refs.left.style.transform="translateX(-7rem)"
            },
            toPage (index, item) {
                debugger
                if (index == 1) {
                    this.$router.replace ({name: 'shoesList'})
                } else if (index == 2) {
                    this.$router.replace ({name: 'funnyStory'})
                } else {
                    this.$router.replace ({name: 'mainPage', params: {tag: item.content}})
                }
                this.items.forEach (function (myItem) {
                    myItem.active = false;
                });
                item.active = true;
            },

        }
    }
</script>

<style>
    #funContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* background-color: white; */
         
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #content > #left {
        width: 12rem;
        height: 100%;
        display: flex;
        background-color: #333333;
        color: white;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        left: 0px;
        box-shadow: 2px 2px 3px #aaaaaa;
        /*margin-top: 5rem;*/
        transition: all 0.5s;
    }

    #content > #real_content {
        background: lightsteelblue;
        width: 35rem;
        height: 100%;
        /*margin-top: 5rem;*/
        margin-left: 8rem;
    }

    #left > ul {
        text-align: center;
        list-style-type: none;
        text-align: center;
        padding-left: 0px;

    }

    #left > ul > li {
        padding: 1rem 0rem;
        /*border-bottom: solid 1px gray;*/
        /*box-shadow:inset 0px 15px 15px -15px #000001;*/
        /*inset 0px -15px 15px -15px #000;*/
    }

    #left > ul > li:hover {
        background-color: #19AA8D;
        border-left: 10px solid #19AA8D;
    }

    .active {
        background-color: #010101;
        border-left: 10px solid #19AA8D;
    }

    .unactive {
        background-color: transparent;
        border-left: 10px solid #333333;
    }

    #content > #right {
        width: 10rem;
        height: 100%;
        background-color: pink;
        top: 5rem;
        margin-left: 0.5rem;
    }
</style>

