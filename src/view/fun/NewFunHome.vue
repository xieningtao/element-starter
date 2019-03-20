<template>
  <div>
    <ul class="head">
      <li
        v-for="(item,index) in items"
        v-bind:key="index"
        v-bind:class="{active:item.active,unactive:!item.active}"
        v-on:click="toPage(index,item)"
      >{{item.content}}</li>
    </ul>

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

<style>
.head {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 50rem;
  background-color: #333;
  margin: 20px auto;
}

.head > .active {
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.head > .unactive {
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#real_content {
  background: lightsteelblue;
  width: 50rem;
  height: 100%;
  /*margin-top: 5rem;*/
  /* margin-left: 8rem; */
  margin: 20px auto;
}
</style>

