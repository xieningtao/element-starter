<template>
  <el-container class="markdown-main" direction="vertical">
    <!--<el-header>-->
    <!--<h1 style="text-align: center"> gitlab 单号需求控制</h1>-->
    <!--</el-header>-->

    <el-main>
      <router-view></router-view>
    </el-main>

    <float-photo-preview @clickClose="closePreview" v-show="willShow"></float-photo-preview>
    <div class="bg"></div>
  </el-container>
</template>
<script>
import FloatPhotoPreview from "./view/fun/FloatPhotoPreview.vue";
import bus from "./view/common/bus.js";
export default {
  data() {
    return {
      willShow: false
    };
  },
  destroyed: function() {
    bus.$off("imgWallClick");
  },

  created: function() {
    let _this = this;
    bus.$on("imgWallClick", function(message) {
      debugger;
      _this.willShow = true;
    });
  },
  methods: {
    closePreview(){
      this.willShow = false;
    }
  },
  components: {
    "float-photo-preview": FloatPhotoPreview
  }
};
</script>

<style type="text/scss" lang="scss">
.markdown-main {
  height: 100%;
  .el-main {
    padding: 0px;
    height: 100%;
    z-index: 100;
  }
}

.floatPreview {
  width: 100%;
  height: 100%;
  position: fiexed;
  z-index: 1000;
}

.bg {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 20px;
  //   background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553535647085&di=cf4f57a49a44354da582334ef7d0ccd0&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fa8ec8a13632762d01fb5afdda6ec08fa503dc6cd.jpg");
  //   background: url("https://files-cdn.cnblogs.com/files/mrszhou/jijian2.bmp") no-repeat top center fixed;
  //   background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553536586429&di=473662e135452f2034594410eb752572&imgtype=jpg&src=http%3A%2F%2Fimg.szonline.net%2F2018%2F0928%2F20180928031933891.jpg") no-repeat top center fixed;
}

.bg-blur {
  width: 100%;
  height: 100%;
  position: absolute;
  //   top: 0px;
  //   left: 0px;
  //   bottom: 0px;
  //   right: 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
</style>

