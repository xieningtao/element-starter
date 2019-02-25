<template>
    <div>
        {{msg}}

        <!--<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"-->
             <!--v-on:click="enargePic()" v-bind:class="{min:!clickPic,max:clickPic}"-->
        <!--/>-->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: this.$route.params.tag,
                clickPic: false,
                show:false,
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                debugger
                this.msg = this.$route.params.tag
            }
        },
        methods: {
            enargePic () {
                this.clickPic = !this.clickPic;
                this.show = true;
            },
            handleClose(){
                this.show = false
            }
        }
    }
</script>

<style>
    img{
        transition: 2s;
    }
    .min {
        width: 200px;
        height: auto;
    }

    .max {
        width: 100%;
        height: auto;
    }
</style>