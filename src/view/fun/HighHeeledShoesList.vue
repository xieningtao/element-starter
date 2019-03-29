<template>
  <div class="shoesContainer">
    <ul class="shoesList">
      <li v-for="(item,index) in shoesItems">
        <div
          class="item"
          @mouseover="enter(index)"
          @mouseout="leave(index)"
          @click="toDetail(item,index)"
        >
          <div class="item-article">
            <div class="itemTitle" ref="itemTitle">{{item.title}}</div>
            <div class="item-diggest_inner">{{item.diggest}}</div>
          </div>
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
          diggest:
            "item one title ----------------fsfsdlfjlsdjfk---------fjslkfjskljfsdkjfs------------------------------------------------------------------------- jflsjf ksldj fklsj flj ksdjfls jfsd lkfjsdkl",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/25080/23/8276/140965/5c753a39E31016a18/a07114c257c0f4ff.jpg",
          readNum: "10",
          commentNum: "22",
          detailId: "adae1b1d8c"
        },
        {
          title: "item two title",
          diggest: "item two title",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/7130/28/15982/173289/5c753a38E50579fd2/78296d1f13e45b83.jpg",
          readNum: "10",
          commentNum: "22",
          detailId: "8393438a0d"
        },
        {
          title: "item two title",
          diggest: "item two title",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/7130/28/15982/173289/5c753a38E50579fd2/78296d1f13e45b83.jpg",
          readNum: "10",
          commentNum: "22",
          detailId: "bc60041687"
        },
        {
          title: "item two title",
          diggest: "item two title",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/7130/28/15982/173289/5c753a38E50579fd2/78296d1f13e45b83.jpg",
          readNum: "10",
          commentNum: "22",
          detailId: "b2e7933d6b"
        },
        {
          title: "item two title",
          diggest: "item two title",
          // imgUrl: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          imgUrl:
            "https://img30.360buyimg.com/popWaterMark/jfs/t1/7130/28/15982/173289/5c753a38E50579fd2/78296d1f13e45b83.jpg",
          readNum: "10",
          commentNum: "22"
        },
        {
          title: "item two title",
          diggest: "item two title",
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
    enter(index) {
      console.log("enter");
      window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform = "scale(1.1,1.1)";
      this.$refs["itemTitle"][index].style.textDecoration = "underline";
    },
    leave(index) {
      console.log("leave");
      window.event.currentTarget.getElementsByTagName(
        "img"
      )[0].style.transform = "scale(1.0,1.0)";
      this.$refs["itemTitle"][index].style.textDecoration = "none";
    },
    toDetail(item, index) {
      // this.$router.push ({name: 'shoesDetail', params: {id: "1725cbce5f"}})
      // this.$router.push({ name: "shoesDetailff", params: { id: item.detailId } });
      // debugger
      let routeData = this.$router.resolve({
        name: "shoesDetail",
        params: { id: item.detailId }
      });
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style>
.shoesContainer {
  background-color: lightpink;
  padding-bottom: 10px;
  padding-top: 10px;
}
.item {
  width: 80%;
  height: 150px;
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 3px #aaaaaa;
  overflow: hidden;
}
.item:hover {
  background-color: lightgray;
}
.item-article {
  margin-right: 20px;
  flex-grow: 2;
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
  transition: 0.2s;
}

.shoesList {
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 0px;
}

.itemTitle {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 30px;
  color: black;
}
.item-diggest_inner {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  color: gray;
}
</style>