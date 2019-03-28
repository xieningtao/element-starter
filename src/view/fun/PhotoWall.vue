<template>
  <div class="wallContainer">
    <ul>
      <li v-for="(item,index) in photos">
        <div class="wallImgContainer" @mouseleave="mouseLeave(index)" @mouseover="mouseOver(index)">
          <img class="wallImg" :src="item.photoUrl" @click="previewImg(item,index)">
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
  </div>
</template>

<script>
import bus from "../common/bus.js"
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      pageSize: 8,
      pageNum: 0,
      seen: true,
      loading: true,
      error: false,
      removeLoading: false,
      imgFactor: 0.3,
      currentIndex: -1,
      preview_url: ""
    };
  },
  computed: {
    ...mapState("photoWall", ["photos"]),
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
  },

  methods: {
    ...mapActions("photoWall", ["storeAllPhotos"]),
    previewImg(item, index) {
      debugger;
      // let routeData = this.$router.resolve({
      //   name: "photoPreview",
      //   params: { index: index }
      // });
      // window.open(routeData.href, "_blank");
      // var allPhotos = this.photos;
      bus.$emit("imgWallClick",item);
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
      const query = Bmob.Query("BeautyGroup");
      query.order("-updatedAt");
      query.limit(this.pageSize);
      query.skip(this.pageNum * this.pageSize);
      debugger;
      query
        .find()
        .then(res => {
          console.log(JSON.stringify(res));
          this.storeAllPhotos(res);
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