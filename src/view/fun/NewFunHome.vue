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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    //            this.$router.replace ({name: 'shoesList'})
  },
  methods: {
    toPage(index, item) {
      debugger;
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
$head_width: 60rem +1;
.new_home_container{
  margin-left:calc(100vw - 100%);
  
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
  color: white
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
  box-shadow:0 0 10px #000;
  border: solid 10px #fff;
  border-top-width: 5px;
}
</style>

