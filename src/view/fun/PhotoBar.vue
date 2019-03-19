<template>
  <div class="photoContainer" ref="photoContainer">
    <ul class="photoBarOne" ref="photoBarOne">
      <li
        v-for="(item,index) in photos"
        @mouseleave="mouseLeave(index)"
        @mouseover="mouseOver(index)"
      >
        <img class="singlePhoto" :src="item.url">
        <transition name="fade">
          <div v-show="currentIndex == index" class="imgBottomShow" ref="imgBottom">{{item.content}}</div>
        </transition>
      </li>
    </ul>
    <ul class="photoBarTwo" ref="photoBarTwo">
      <li
        v-for="(item,index) in photos"
        @mouseleave="mouseLeave(index)"
        @mouseover="mouseOver(index)"
      >
        <img class="singlePhoto" :src="item.url">
        <transition name="fade">
          <div v-show="currentIndex == index" class="imgBottomShow" ref="imgBottom">{{item.content}}</div>
        </transition>
      </li>
    </ul>
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
    this.scorllInterval = setInterval(this.scrollLeft, 10);
  },
  computed: {},
  methods: {
    mouseLeave: function(index) {
      this.scorllInterval = setInterval(this.scrollLeft, 10);
      this.currentIndex = -1;
     window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.backgroundColor="transparent";
    },
    mouseOver: function(index) {
      clearInterval(this.scorllInterval);
      this.currentIndex = index;
       window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.backgroundColor="red";
    },
    scrollHorizontal: function() {}
  }
};
</script>

<style>
.photoContainer {
  overflow: hidden;
  white-space: nowrap;
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
  display: inline;
  padding-left: 0px;
}
.photoBarOne > li {
  list-style: none;
  display: inline;
  position: relative;
}

.photoBarTwo {
  list-style: none;
  display: inline;
  padding-left: 0px;
}

.photoBarTwo > li {
  list-style: none;
  display: inline;
  position: relative;
}

.singlePhoto {
  padding-left: 2px;
  padding-right: 2px;
  width: 150px;
  height: 250px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.imgBottomShow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background-color: #c0c0c0;
  opacity: 1;
  margin-bottom: 4px;
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