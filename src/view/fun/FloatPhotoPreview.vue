<template>
  <div class="img_preview_root">
    <div class="img_preview_close" @click="dimissPreView">
      <img class="img_icon_error">
    </div>
    <div class="img_preview_container">
      <img class="img_preview" :src="preview_url">
    </div>
  </div>
</template>
<script>
import bus from "../common/bus.js";
export default {
  data() {
    return {
      curPreviewIndex: -1,
      allPhotos: [],
      preview_url: "",
      subPhotos: []
    };
  },

  destroyed: function() {
    bus.$off("imgWallClick");
  },

  created: function() {
    debugger;
    let _this = this;
    bus.$on("imgWallClick", function(message) {
      debugger;
      _this.preview_url = message.photoUrl;
      _this.subPhotos.push(message);
      _this.getSubImgs(message.objectId);
      _this.curPreviewIndex = 0;
      // _this.curPreviewIndex = message.index;
      // _this.allPhotos = message.allPhotos;
      // if (
      //   _this.curPreviewIndex >= 0 &&
      //   _this.curPreviewIndex < _this.allPhotos.length
      // ) {
      //   _this.preview_url = _this.allPhotos[_this.curPreviewIndex].photoUrl;
      // }
    });
    document.onkeydown = function(e) {
      let _key = window.event.keyCode;
      if (_key === 37) {
        //左
        _this.onLeft();
      } else if (_key == 39) {
        //右
        _this.onRight();
      }
    };
    // if (
    //   this.curPreviewIndex >= 0 &&
    //   this.curPreviewIndex < this.allPhotos.length
    // ) {
    //   this.preview_url = this.allPhotos[this.curPreviewIndex].imgUrl;
    // }
  },
  methods: {
    getSubImgs(objectId) {
      const query = Bmob.Query("SubBeauty");
      const pointer = Bmob.Pointer("BeautyGroup");
      const pointerId = pointer.set(objectId);
      query.equalTo("groupId", "==", pointerId);
      query
        .find()
        .then(res => {
          console.log(JSON.stringify(res));
          for (var i = 0; i < res.length; i++) {
            this.subPhotos.push(res[i]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onLeft() {
      debugger;
      if (this.curPreviewIndex > 0) {
        this.curPreviewIndex--;
        // this.preview_url = this.allPhotos[this.curPreviewIndex].imgUrl;
        this.preview_url = this.subPhotos[this.curPreviewIndex].photoUrl;
      } else {
        alert("first one");
      }
    },
    onRight() {
      debugger;
      if (this.curPreviewIndex < this.subPhotos.length) {
        this.curPreviewIndex++;
        // this.preview_url = this.allPhotos[this.curPreviewIndex].imgUrl;
        this.preview_url = this.subPhotos[this.curPreviewIndex].photoUrl;
      } else {
        alert("last one");
      }
    },
    dimissPreView() {
      this.$emit("clickClose");
    }
  }
};
</script>
<style lang="scss">
.img_preview_root {
  width: 100%;
  height: 100%;
  background-color: #333333dd;
  text-align: center;
  z-index: 10000;
  position: absolute;
  overflow: scroll;
  //   transform: scale(1, 2);
}

.img_preview_container {
  height: 100%;
  //   transform: scale(2, 2);
}
.img_preview {
  height: 100%;
  //   width: 70%;
  //   max-width: 100%;
}
.img_preview_close {
  position: absolute;
  right: 5px;
  top: 5px;
}
.img_icon_error {
  width: 48px;
  height: 48px;
  position: absolute;
  right: 15px;
  top: 8px;
  background: url("/src/assets/fun/btn_zoom_close.svg") 0 0 no-repeat;
}
</style>
