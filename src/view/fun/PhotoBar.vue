<template>
  <div class="photoContainer" ref="photoContainer">
    <ul class="photoBarOne" ref="photoBarOne">
      <li v-for="(item,index) in photos" @mouseleave="mouseLeave(index)" @mouseover="mouseOver(index)">
        <img class="singlePhoto" :src="item.url" >
        <div :class="currentIndex==index? 'imgBottomShow' : 'imgBottom' " ref="imgBottom">{{item.content}}</div>
      </li>
    </ul>
    <ul class="photoBarTwo" ref="photoBarTwo"></ul>
  </div>
</template>

<script>
export default {
  props: ["photos"],
  data() {
    return {
      active: false,
      currentIndex:-1
    };
  },
  mounted() {
    this.$refs.photoBarTwo.innerHTML = this.$refs.photoBarOne.innerHTML;
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
  computed: {
   
  },
  methods: {
    mouseLeave: function(index) {
        this.scorllInterval = setInterval(this.scrollLeft, 20);
      this.currentIndex = -1;
    },
    mouseOver: function(index) {
        clearInterval(this.scorllInterval);
      this.currentIndex = index;
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

.photoBarOne {
  list-style: none;
  display: inline;
  padding-left: 0px;
}
li {
  list-style: none;
  display: inline;
  position: relative;
}

.photoBarTwo {
  list-style: none;
  display: inline;
  padding-left: 0px;
}

.singlePhoto {
  padding-left: 2px;
  width: 150px;
  height: 250px;
  
}

.imgBottom {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 0px;
  background-color: #c0c0c0;
  opacity: 0.5;
  transition: height 0.5s;
}

.imgBottomShow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background-color: #c0c0c0;
  opacity: 0.5;
}
</style>