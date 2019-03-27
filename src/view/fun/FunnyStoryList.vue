<template>
  <div class="article-container">
    <ul class="storyItemContainer">
      <li v-for="(story,index) in stories" class="article-item">
        <!-- <div class="bg"></div> -->
        <div class="article-item-subcontainer">
          <span class="article-title">
            <strong>{{story.title}}</strong>
          </span>
          <img class="imgFun" :src="story.funUrl">
          <div
            :class="story.shouldToggle? 'article-content-collapse':'article-content-expand'"
            ref="article-content"
          >
            <div class="article-content_inner" v-html="story.content" @click="toPage(story,index)"></div>
            <div class="toggle" @click="toggle(index)" v-if="story.showToggle">toggle</div>
          </div>
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
          shouldToggle: false,
          funUrl: "http://img.adoutu.com/picture/1552837878081.jpg",
          detailId: "bc60041687"
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
          shouldToggle: false,
          funUrl: "http://img.adoutu.com/picture/1552837878081.jpg"
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
          shouldToggle: false,
          funUrl: "http://img.adoutu.com/picture/1552837878081.jpg"
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
        let routeData = this.$router.resolve({
        name: "funnyStoryDetail",
        params: { id: item.detailId }
      });
      window.open(routeData.href, "_blank");
    },
    toggle(index) {
      debugger;
      var curHeight = this.$refs["article-content"][index].offsetHeight;
      if (curHeight > 100) {
        // this.$refs["article-content"][index].style.height = "100px";
        this.stories[index].shouldToggle = true;
      } else {
        this.stories[index].shouldToggle = false;
      }
    }
  }
};
</script>

<style>
.article-container {
  width: 80%;
  height: 80%;
  margin: 0px auto;
}

.storyItemContainer {
  list-style: none;
  padding-bottom: 20px;
  margin-top: 20px;
  padding-left: 0px;
}
.article-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  margin-top: 20px;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
}

.bg {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  /* background: url("https://wx1.sinaimg.cn/mw690/006MWlXYly1g08faf50gmj30u0190kjo.jpg");  */
}
/* 高斯模糊 */
.bg-blur {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
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
  height: 100px;
}

.article-content-expand {
  font-size: 16px;
  color: gray;
  position: relative;
  height: auto;
 
}
.article-item-subcontainer{
  background: white;
  padding: 10px;
}

.article-item-subcontainer:hover{
  background: lightsalmon;
} 

.article-content_inner {
  margin-right: 20px;
  margin-bottom: 20px;
  height: 100%;
  margin-right: 100px;
}

.article-content {
  font-size: 16px;
  color: gray;
}

.toggle {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.imgFun {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 80px;
  height: auto;
}
</style>