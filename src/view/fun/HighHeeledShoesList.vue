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
          <img v-bind:src="item.thumbnailUrl" ref="shoesImg">
        </div>
      </li>
    </ul>

    <div class="heelSlider"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 10,
      pageNum: 0,
      shoesItems: []
    };
  },
  created: function() {
    this.getHeelList();
  },
  methods: {
    getHeelList() {
      const query = Bmob.Query("Heel");
      query.order("-updatedAt");
      query.limit(this.pageSize);
      query.skip(this.pageNum * this.pageSize);
      query
        .find()
        .then(res => {
          console.log(JSON.stringify(res));
          this.shoesItems = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
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
        params: { id: item.objectId }
      });
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

 <style lang="scss" scoped>
 $marginWidht:10px;
 $leftPageWidth:750px;
.shoesContainer {
  /* background-color: lightpink; */
  // padding-bottom: 10px;
  padding-top: marginWidht;
  display: flex;
  flex-direction: row;
  padding-left: $marginWidht;
  padding-right: marginWidht;

  .shoesList {
    list-style-type: none;
    margin: 0px;
    width: $leftPageWidth;
    padding: 0px;
    li{
      padding: 0px;
    }
  }

  .heelSlider {
    margin-left: 10px;
    background-color: lightcoral;
    flex-grow: 2;
    margin-bottom: 10px;
  }
}

.item {
  width: 100%;
  height: 120px;
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  background-color: white;
  /* border-radius: 5px; */
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

.itemTitle {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  color: black;
}
.item-diggest_inner {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  color: gray;
}
</style>