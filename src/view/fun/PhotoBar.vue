<template>
    <div class="photoContainer" ref="photoContainer">
        <ul class="photoBarOne" ref="photoBarOne">
            <li v-for="(item,index) in photos" >
                <img class="singlePhoto" :src="item.url">
                <!--<div style="width: 200px;height: 200px;background-color: red;margin-left: 10px"></div>-->
            </li>
        </ul>
        <ul  class="photoBarTwo" ref="photoBarTwo"></ul>
    </div>

    <!--<div style="display: flex;flex-direction: row">-->

        <!--<ul style="list-style-type: none;display: flex;flex-direction: row;overflow: hidden">-->
            <!--<li style="width: 200px;height: 200px;background-color: red;margin-left: 10px"></li>-->
            <!--<li style="width: 200px;height: 200px;background-color: red;margin-left: 10px"></li>-->
            <!--<li style="width: 200px;height: 200px;background-color: red;margin-left: 10px"></li>-->
            <!--<li style="width: 200px;height: 200px;background-color: red;margin-left: 10px"></li>-->
            <!--<li style="width: 200px;height: 200px;background-color: red;margin-left: 10px"></li>-->
        <!--</ul>-->
        <!--<ul style="list-style-type: none;display: flex;flex-direction: row;overflow: hidden">-->
            <!--<li style="width: 200px;height: 200px;margin-left:5px;background-color: blue"></li>-->
            <!--<li style="width: 200px;height: 200px;margin-left:5px;background-color: blue"></li>-->
            <!--<li style="width: 200px;height: 200px;margin-left:5px;background-color: blue"></li>-->
        <!--</ul>-->
    <!--</div>-->
</template>

<script>
    export default {
        props: ["photos"],
        mounted () {
            this.$refs.photoBarTwo.innerHTML = this.$refs.photoBarOne.innerHTML
            setInterval (() => {
                if (this.$refs.photoBarTwo.offsetWidth - this.$refs.photoContainer.scrollLeft <= 0) {
                    this.$refs.photoContainer.scrollLeft -= this.$refs.photoBarTwo.offsetWidth;
                }
                else {
                    this.$refs.photoContainer.scrollLeft++;
                }
            }, 20)
        },
        methods: {
            scrollHorizontal () {

            }
        }
    }
</script>

<style>
    .photoContainer {
        overflow: hidden;
        white-space: nowrap
    }

    .photoBarOne {
        list-style: none;
        display:inline;
        padding-left: 0px;
    }
    .photoBarOne > li {
        list-style: none;
        display:inline;
    }

    .photoBarTwo{
        list-style: none;
        display:inline;
        padding-left: 0px;
    }
    .photoBarTwo >li{
        list-style: none;
        display:inline;
    }

    .singlePhoto {
        padding-left: 2px;
        width: 150px;
        height: auto;
    }

</style>