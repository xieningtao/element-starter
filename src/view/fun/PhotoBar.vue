<template>
  <div class="topContainer">
    <div class="photo_title">街拍首发</div>
    <div class="photoContainer" ref="photoContainer">
      <ul class="photoBarOne" ref="photoBarOne">
        <li
          v-for="(item,index) in photos"
          @mouseleave="mouseLeave(index)"
          @mouseover="mouseOver(index)"
        >
          <div class="singlePhotoContainer" ref="singlePhotoContainer">
            <img class="singlePhoto" :src="item.url">
          </div>
          <transition name="fade">
            <div v-show="true" class="imgBottomShow" ref="imgBottom">{{item.content}}</div>
          </transition>
        </li>
      </ul>
      <ul class="photoBarTwo" ref="photoBarTwo">
        <li
          v-for="(item,index) in photos"
          @mouseleave="mouseLeave(index)"
          @mouseover="mouseOver(index)"
        >
          <div class="singlePhotoContainer" ref="singlePhotoContainer">
            <img class="singlePhoto" :src="item.url">
          </div>
          <transition name="fade">
            <div v-show="true" class="imgBottomShow" ref="imgBottom">{{item.content}}</div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],
  data() {
    return {
      active: false,
      currentIndex: -1
    };
  },
  mounted() {
    // this.$refs.photoBarTwo.innerHTML = this.$refs.photoBarOne.innerHTML;
    this.scrollLeft = () => {
      if (
        this.$refs.photoBarTwo.offsetWidth -
          this.$refs.photoContainer.scrollLeft <=
        0
      ) {
        this.$refs.photoContainer.scrollLeft -= this.$refs.photoBarTwo.offsetWidth;
      } else {
        this.$refs.photoContainer.scrollLeft++;
      }
    };
    this.scorllInterval = setInterval(this.scrollLeft, 20);
  },
  computed: {},
  beforeDestroy() {
    clearInterval(this.scorllInterval);
  },
  methods: {
    mouseLeave: function(index) {
      this.scorllInterval = setInterval(this.scrollLeft, 20);
      this.currentIndex = -1;
      window.event.currentTarget.getElementsByClassName(
        "singlePhotoContainer"
      )[0].style.backgroundColor = "white";

      // this.$refs["singlePhotoContainer"][index].style.backgroundColor="transparent"
    },
    mouseOver: function(index) {
      clearInterval(this.scorllInterval);
      this.currentIndex = index;
      window.event.currentTarget.getElementsByClassName(
        "singlePhotoContainer"
      )[0].style.backgroundColor = "yellow";
       this.$refs["singlePhotoContainer"][index].style.backgroundColor="yellow"
    },
   
    scrollHorizontal: function() {}
  }
};
</script>

<style type="text/scss" lang="scss">
$picHeight: 540px;
$picWidth: 300px;

.topContainer {
  width: 100%;
  height: auto;
  background: radial-gradient(
      farthest-side at center bottom,
      #ff6944 0,
      #191413 100%
    )
    center bottom;
}
.photo_title {
  margin: auto 0;
  size: 30px;
  text-align: center;
  color: white;
  padding-top: 10px;
  margin-bottom: 10px;
}
.photoContainer {
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
}

.photoBarOne > li > img {
  transition: 0.2s;
  /* transform-origin: 100% 100% */
}
.photoBarTwo > li > img {
  transition: 0.2s;
  /* transform-origin: 100% 100% */
}

.photoBarOne {
  list-style: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
}
.photoBarOne > li {
  list-style: none;
  position: relative;
}

.photoBarTwo {
  list-style: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
}

.photoBarTwo > li {
  list-style: none;
  position: relative;
}

.singlePhotoContainer {
  overflow: hidden;
  width: $picWidth;
  height: $picHeight;
  padding: 4px;
  margin-left: 1px;
  margin-right: 1px;
  background-color: white;
}
.singlePhoto {
 
  // background-color: white;
  //
  //
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

}

.imgBottomShow {
  position: absolute;
  width: $picWidth;
  height: auto;
  /* background-color: #c0c0c0; */
  opacity: 1;
  left: 4px;
  right: 4px;
  bottom: 10px;
  text-align: center;
  /* margin-left: 4px; */
  /* margin-right: 4px; */
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  transform: translateY(0px);
  opacity: 1;
}
</style>