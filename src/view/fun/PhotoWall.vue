<template>
  <div class="wallContainer">
    <ul>
      <li v-for="(item,index) in imgWall">
        <div class="wallImgContainer" @mouseleave="mouseLeave(index)" @mouseover="mouseOver(index)">
          <img class="wallImg" :src="item.imgUrl" @click="previewImg(item,index)">
          <transition name="show">
            <div class="wallFront" v-show="currentIndex == index">
              <p>test one</p>
              <p>test two</p>
              <p>test three</p>
            </div>
          </transition>
        </div>
      </li>
    </ul>

    <input @keyup.left="onLeft">
    <input @keyup.right="onRight">
    <div class="img_preview_container" v-show="show_preview">
      <img class="img_preview" :src="preview_url">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 8,
      pageNum: 0,
      imgWall: [],
      seen: true,
      loading: true,
      error: false,
      removeLoading: false,
      imgFactor: 0.3,
      currentIndex: -1,
      preview_url: "",
      curPreviewIndex: -1,
      show_preview: false
    };
  },
  computed: {
    imgWidth: function() {
      return;
    },
    imgHeight: function() {
      return this.imgFactor * 1280;
    }
  },
  created: function() {
    debugger;
    this.getPicList();
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
  },

  methods: {
    onLeft() {
      debugger;
      if (!this.show_preview) {
        return;
      }
      if (this.curPreviewIndex > 0) {
        this.curPreviewIndex--;
        this.preview_url = this.imgWall[this.curPreviewIndex].imgUrl;
      } else {
        alert("first one");
      }
    },
    onRight() {
      debugger;
      if (!this.show_preview) {
        return;
      }
      if (this.curPreviewIndex < this.imgWall.length) {
        this.curPreviewIndex++;
        this.preview_url = this.imgWall[this.curPreviewIndex].imgUrl;
      } else {
        alert("last one");
      }
    },
    dimissPreView() {
      this.show_preview = false;
    },
    previewImg(item, index) {
      debugger;
      this.curPreviewIndex = index;
      this.preview_url = item.imgUrl;
      this.show_preview = true;
      console.log(
        "url: " + this.preview_url + " preview: " + this.show_preview
      );
    },

    getDiggest(diggest) {
      if (diggest == null || diggest == "") {
        return "this is default diggest";
      }
      return diggest;
    },
    jumpToDetail({ title, objectId }) {
      console.info("method->jumpToDetail title " + title);
      const id = objectId;
      this.$router.push({ name: "articleDetail", params: { id: id } });
    },
    remove(objectId, index) {
      this.removeLoading = true;
      const query = Bmob.Query("Article");
      query
        .destroy(objectId)
        .then(res => {
          this.imgWall.splice(index, 1);
          console.log(JSON.stringify(this.imgWall));
          this.removeLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.removeLoading = false;
        });
    },
    testClick(event) {
      console.info("testClick event");
    },
    retry() {},

    mouseLeave: function(index) {
      this.currentIndex = -1;
      window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform = "scale(1.0, 1.0)";
    },
    mouseOver: function(index) {
      this.currentIndex = index;
      window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform = "scale(1.5, 1.5)";
    },
    getPicList() {
      const query = Bmob.Query("CardPicGroup");
      query.order("-updatedAt");
      query.limit(this.pageSize);
      query.skip(this.pageNum * this.pageSize);
      debugger;
      query
        .find()
        .then(res => {
          console.log(JSON.stringify(res));
          this.imgWall = res;
          this.loading = false;
          this.seen = false;
          this.error = false;
          this.pageSize = this.pageSize + 1;
        })
        .catch(err => {
          console.log(err);
          this.error = true;
          this.loading = false;
          this.seen = false;
        });
    }
  }
};
</script>
<!--1428-->
<style type="text/scss" lang="scss">
$imgFactor: 0.3;
$imgMargin: 10px;
$wallWidth: 60rem;
$photoWidth: floor($wallWidth/4);

.img_preview_container {
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  float: left;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  text-align: center;
  z-index: 100;
}
.img_preview {
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  transform: scale(2,2)
}
.wallContainer {
  position: relative;
  width: $wallWidth;
}
.wallContainer > ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 0 auto;
  justify-content: center;
  padding-left: 0px;
}
.wallContainer > ul > li {
  list-style: none;
}
.wallImgContainer {
  width: $photoWidth;
  height: $photoWidth * 1.8;
  overflow: hidden;
  position: relative;
}
.wallImg {
  width: $photoWidth;
  height: $photoWidth * 1.8;
  transform-origin: bottom right;
  transition: all 0.5s;
}

.wallFront {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background-color: gray;
  color: white;
  text-align: center;
  opacity: 0.5;
  display: none;
}

.show-enter-active,
.show-leave-active {
  transition: all 0.5s;
  transform-origin: bottom right;
}
.show-enter,
.show-leave-to {
  transform: scale(0.2, 0.2);
  opacity: 0;
}
.show-enter-to,
.show-leave {
  transform: scale1(1, 1);
  opacity: 0.5;
}
</style>