<template>
  <div>
    <ul class="shoesList">
      <li v-for="(item,index) in shoesItems">
        <div class="item" @mouseover="enter()" @mouseout="leave()" v-on:click="toDetail">
          <div class="itemTitle">{{item.title}}</div>
          <img v-bind:src="item.imgUrl" ref="shoesImg">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoesItems: [
        {
          title: "item one title",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/25080/23/8276/140965/5c753a39E31016a18/a07114c257c0f4ff.jpg",
          readNum: "10",
          commentNum: "22"
        },
        {
          title: "item two title",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/7130/28/15982/173289/5c753a38E50579fd2/78296d1f13e45b83.jpg",
          readNum: "10",
          commentNum: "22"
        }
      ]
    };
  },
  methods: {
    enter() {
      debugger;
      console.log("enter");
      window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform = "scale(1.05,1.05)";
    },
    leave() {
      console.log("leave");
      window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform = "scale(1.0,1.0)";
    }
  }
};
</script>

<style>
.item {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 2px 2px 3px #aaaaaa;
  overflow: hidden;
}

.item > img {
  /* width: 150px;
        height: 150px; */
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  /*border-top-right-radius: 10px;*/
  /*border-bottom-right-radius: 10px;*/
  transition: 0.5s;
}

.shoesList {
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
}

.itemTitle {
  margin-top: 10px;
  margin-left: 10px;
}
</style>