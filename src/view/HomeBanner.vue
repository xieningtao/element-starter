<template>
    <el-carousel :interval="1000" type="card" height="300px">
        <el-carousel-item v-for="item in banners">
            <a :href="item.link" target="view_window">
                <img :src="item.url"/>
            </a>
        </el-carousel-item>
    </el-carousel>
</template>

<script>

    export default {
        data() {
            return {
                banners: [{
                    "url": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1642848148,3972201000&fm=26&gp=0.jpg"
                    , "link": "https://blog.csdn.net/qq_43508196/article/details/85533502"
                },
                    {"url": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2545358823,389573943&fm=26&gp=0.jpg"},
                    {"url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1824144637,1290603070&fm=26&gp=0.jpg"},
                    {"url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1749659710,933919584&fm=26&gp=0.jpg"}]
            }
        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>