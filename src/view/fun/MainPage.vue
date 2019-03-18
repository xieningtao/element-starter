<template>
    <div>
        {{msg}}

        <!--<img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"-->
             <!--v-on:click="enargePic()" v-bind:class="{min:!clickPic,max:clickPic}"-->
        <!--/>-->
        <photo-bar :photos="photos"></photo-bar>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
</template>

<script>
    import PhotoBar from "./PhotoBar.vue"
    export default {
        data () {
            return {
                msg: this.$route.params.tag,
                clickPic: false,
                show:false,
                photos: [{
                    url: "https://wx1.sinaimg.cn/mw690/006MWlXYly1g0jnitgee4j31f724pb2b.jpg"
                }, {
                    url: "https://wx1.sinaimg.cn/mw690/006MWlXYly1g0eyy0ufmyj31741uo7wi.jpg"
                }, {
                    url: "https://wx3.sinaimg.cn/mw690/006MWlXYly1g0amiowxwuj31jk2bchdu.jpg"
                }, {
                    url: "https://wx3.sinaimg.cn/mw690/006MWlXYly1g0j027o2acj318g1oohdt.jpg"
                }, {
                    url: "https://wx2.sinaimg.cn/mw690/006MWlXYly1g0j026tw8xj318g1ow7wh.jpg"
                }, {
                    url: "https://wx1.sinaimg.cn/mw690/006MWlXYly1g08faf50gmj30u0190kjo.jpg"
                }, {
                    url: "https://wx4.sinaimg.cn/mw690/006MWlXYly1g0is49k64bj31av2517wk.jpg"
                }
                ],
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
        },
        components:{
            PhotoBar
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