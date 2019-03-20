<template>
  <div class="wallContainer">
    <ul>
      <li v-for="(item,index) in imgWall">
        <div class="wallImgContainer" @mouseleave="mouseLeave(index)" @mouseover="mouseOver(index)">
          <img class="wallImg" :src="item.imgUrl">
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
export default {
  data() {
    return {
      pageSize: 10,
      pageNum: 0,
      imgWall: [],
      seen: true,
      loading: true,
      error: false,
      removeLoading: false,
      imgFactor: 0.3,
      currentIndex:-1
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
  },

  methods: {
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
      )[0].style.transform="scale(1.0, 1.0)";
    },
    mouseOver: function(index) {
      this.currentIndex = index;
    window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform="scale(1.2, 1.2)";
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
$wallWidth: (0.3 * 720 * 6 + 10 * 2 * 6 + 6 * 2) px;
.wallContainer {
  position: relative;
}
.wallContainer > ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
}
.wallContainer > ul > li {
  list-style: none;
}
.wallImgContainer {
  width: 150px;
  height: 250px;
  overflow: hidden;
  position: relative;
}
.wallImg {
  width: 150px;
  height: 250px;
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
}

.show-enter-active,
.show-leave-active {
  transition: all 0.5s;
  transform-origin: bottom right;
}
.show-enter,
.show-leave-to {
  transform: scale(0.2,0.2);
  opacity: 0;
}
.show-enter-to,
.show-leave {
  transform: scale1(1.0,1.0);
  opacity: 0.5;
}
</style>