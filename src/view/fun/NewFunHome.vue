<template>
  <div class="new_home_container">
    <div class="head_container">
      <div
        v-for="(item,index) in items"
        v-bind:key="index"
        v-bind:class="{active:item.active,unactive:!item.active}"
        v-on:click="toPage(index,item)"
      >
        <p class="headSubItem">{{item.content}}</p>
      </div>
    </div>
    <div id="real_content">
      <router-view></router-view>
    </div>

    <div class="addContainer" @click="addInfo">添加</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curIndex: -1,
      items: [
        { content: "女神", active: true },
        { content: "高跟鞋", active: false },
        { content: "搞笑段子", active: false }
      ]
    };
  },
  mounted() {
    debugger;
    //            toPage("才当意")
    this.$router.replace({ name: "mainPage", params: { tag: "女神" } });
    this.curIndex = 0;
    //            this.$router.replace ({name: 'shoesList'})
  },
  methods: {
    addInfo() {
      if (this.curIndex == 0) {
        this.$router.push({ name: "uploadPhotos", params: { type: this.GLOBAL.BEAUTY } });
      } else if (this.curIndex == 1) {
        this.$router.push({ name: "saveMD", params: { type: this.GLOBAL.HEEL } });
      } else {
        this.$router.push({ name: "saveMD", params: { type: this.GLOBAL.FUNNY_STORY }});
      }
    },
    toPage(index, item) {
      debugger;
      this.curIndex = index;
      if (index == 1) {
        this.$router.replace({ name: "shoesList" });
      } else if (index == 2) {
        this.$router.replace({ name: "funnyStory" });
      } else {
        this.$router.replace({
          name: "mainPage",
          params: { tag: item.content }
        });
      }
      this.items.forEach(function(myItem) {
        myItem.active = false;
      });
      item.active = true;
    }
  }
};
</script>

<style type="text/scss" lang="scss" >
$head_width: 60rem;
.new_home_container {
  margin-left: calc(100vw - 100%);
}

.addContainer {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: gray;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center; //水平居中
  line-height: 60px; //跟高度一样
}

.addContainer:hover {
  background-color: lightgreen;
}
.head_container {
  height: 80px;
  width: $head_width;
  background-color: #333;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  margin: 0px auto;
  display: flex;
}

.head_container > .active {
  float: left;
  text-align: center;
  padding: 0px 16px;
  text-decoration: none;
  margin: auto 0px;
  height: 80px;
  display: flex;
  justify-content: center;
  color: white;
}

.head_container > .unactive {
  float: left;
  color: gray;
  text-align: center;
  padding: 0px 16px;
  text-decoration: none;
  margin: auto 0px;
  height: 80px;
  display: flex;
  justify-content: center;
}

.head_container > .unactive:hover {
  background-color: lightblue;
}

.headSubItem {
  margin: auto 0px;
}

#real_content {
  /* background: lightsteelblue; */
  width: 60rem;
  height: 100%;
  /*margin-top: 5rem;*/
  /* margin-left: 8rem; */
  margin: 5px auto;
  top: 80px;
  position: relative;
  box-shadow: 0 0 10px #000;
  border: solid 2px #fff;
  border-top-width: 2px;
}
</style>

