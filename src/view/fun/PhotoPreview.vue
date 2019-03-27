<template>
  <div class="img_preview_container">
    <img class="img_preview" :src="preview_url">
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      curPreviewIndex: -1,
      preview_url:""
    };
  },

  computed:{
      ...mapState('photoWall',['photos'])
  },
  created: function() {
    let _this = this;
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

      var param = this.$route.params;
      this.curPreviewIndex = param.index;
      this.preview_url = this.photos[this.curPreviewIndex].imgUrl
  },
  methods: {
    onLeft() {
      debugger;
      if (this.curPreviewIndex > 0) {
        this.curPreviewIndex--;
        this.preview_url = this.photos[this.curPreviewIndex].imgUrl;
      } else {
        alert("first one");
      }
    },
    onRight() {
      debugger;
      if (this.curPreviewIndex < this.photos.length) {
        this.curPreviewIndex++;
        this.preview_url = this.photos[this.curPreviewIndex].imgUrl;
      } else {
        alert("last one");
      }
    },
    dimissPreView() {
      this.show_preview = false;
    }
  }
};
</script>
<style lang="scss">
.img_preview_container {
  width: 100%;
  height: 100%;
  background-color: black;
  text-align: center;
  overflow: scroll;
//   transform: scale(1, 2);
}
.img_preview {
  height: auto;
  width: 70%;
  max-width: 100%;
}
</style>
