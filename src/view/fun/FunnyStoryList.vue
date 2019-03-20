<template>
  <div style="width: 100%;height: 100%">
    <ul
      style="list-style: none;background-color:lightsteelblue;padding-bottom: 20px;margin-top: 20px"
    >
      <li v-for="(story,index) in stories" class="article-item">
        <span class="article-title">
          <strong>{{story.title}}</strong>
        </span>
        <div  :class='story.shouldToggle?"article-content-collapse":"article-content-expand"' ref="article-content">
          <div class="article-content_inner" v-html="story.content" @click="toPage(story,index)"></div>
          <div
           class="toggle"
            @click="toggle(index)"
            v-if="story.showToggle"
          >toggle</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        {
          title: "歌词改编",
          content:
            "太阳当空照\n" +
            "花儿对我笑\n" +
            "小鸟说，早早早\n" +
            "你为什么背上炸药包\n" +
            "我去炸学校\n" +
            "老师不知道\n" +
            "一拉线\n" +
            "我就跑\n" +
            "学校老师都要炸没了\n" +
            "老师炸没了\n" +
            "校长炸飞了\n" +
            "呵呵呵\n" +
            "太好了\n" +
            "终于不用再去上学校",
          showToggle: false,
          shouldToggle:false
        },
        {
          title: "测试",
          content:
            "花儿对我笑<p></p>\n" +
            "小鸟说，早早早<p></p>\n" +
            "你为什么背上炸药包<p></p>\n" +
            "我去炸学校<p></p>\n" +
            "老师不知道<p></p>\n" +
            "一拉线<p></p>\n" +
            "我就跑<p></p>\n" +
            "学校老师都要炸没了<p></p>\n" +
            "老师炸没了<p></p>\n" +
            "校长炸飞了<p></p>\n" +
            "呵呵呵<p></p>\n" +
            "太好了<p></p>\n" +
            "终于不用再去上学校",
          showToggle: false,
          shouldToggle:false
        },
        {
          title: "测试",
          content:
            "花儿对我笑<p></p>\n" +
            "小鸟说，早早早<p></p>\n" +
            "你为什么背上炸药包<p></p>\n" +
            "我去炸学校<p></p>\n" +
            "老师不知道<p></p>\n" +
            "一拉线<p></p>\n" +
            "我就跑<p></p>\n" +
            "学校老师都要炸没了<p></p>\n" +
            "老师炸没了<p></p>\n" +
            "校长炸飞了<p></p>\n" +
            "呵呵呵<p></p>\n" +
            "太好了<p></p>\n" +
            "终于不用再去上学校",
          showToggle: false,
          shouldToggle:false
        }
      ]
    };
  },
  mounted() {
    debugger;
    for (let index = 0; index < this.stories.length; index++) {
      var curHeight = this.$refs["article-content"][index].offsetHeight;
      if (curHeight > 100) {
        this.stories[index].showToggle = true;
        this.stories[index].shouldToggle = true;
      } else {
        this.stories[index].showToggle = false;
        this.stories[index].shouldToggle = false;
      }
    }
  },
  methods: {
    toPage(story, index) {
      debugger;
      //                this.$router.push({name:'funnyStoryDetail',params:{id:'123'}})
      var link = "http://www.chanpin100.com/article/107984";
      window.open(link, "_blank"); //新窗口打开
    },
    toggle(index) {
      debugger;
      var curHeight = this.$refs["article-content"][index].offsetHeight;
      if (curHeight > 100) {
        // this.$refs["article-content"][index].style.height = "100px";
         this.stories[index].shouldToggle = true
      } else {
         this.stories[index].shouldToggle = false
      }
    }
  }
};
</script>

<style>
.article-container {
  width: 100%;
  height: 100%;
}

.article-container > ul {
  list-style: none;
  background-color: lightsteelblue;
  padding-bottom: 20px;
  margin-top: 20px;
}
.article-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  margin-top: 20px;
  background-color: white;
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 20px;
  color: #010101;
  margin-top: 10px;
  margin-bottom: 10px;
}
.article-content-collapse {
  font-size: 16px;
  color: gray;
  position: relative;
  width: 100%;
  height: 100px;
}

.article-content-expand {
  font-size: 16px;
  color: gray;
  position: relative;
  width: 100%;
  height: auto;
}

.article-content_inner {
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
}

.article-content {
  font-size: 16px;
  color: gray;
}

.toggle{
  position: absolute;
  right: 10px;
  bottom: 10px
}
</style>