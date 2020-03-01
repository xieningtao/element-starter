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
            <div class="article-content_inner" v-html="story.content"  @click="toPage($event,story,index)"></div>
            <div class="toggle" @click="toggle(index)" v-if="story.showToggle">展开</div>
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
      pageSize: 10,
      pageNum: 0,
      storyFlags: [],
      stories: []
    };
  },
  mounted() {
    debugger;
  },
  methods: {
    
    getStories() {
      const query = Bmob.Query("FunnyStory");
      query
        .order("-updatedAt")
        .limit(this.pageSize)
        .skip(this.pageNum * this.pageSize)
        .find()
        .then(res => {
          console.log(JSON.stringify(res));
          this.stories = res;
          this.initStoryFlags();
        })
        .catch(err => {
          console.log(err);
        });
    },
    initStoryFlags() {
      for (let index = 0; index < this.stories.length; index++) {
        var curHeight = this.$refs["article-content"][index].offsetHeight;
        if (curHeight > 100) {
          this.storyFlags.push({ showToggle: true, shouldToggle: true });
        } else {
          this.storyFlags.push({ showToggle: false, shouldToggle: false });
        }
      }
    },
    toPage(event,story, index) {
      debugger;
      let routeData = this.$router.resolve({
        name: "funnyStoryDetail",
        params: { id: story.detailId }
      });
      window.open(routeData.href, "_blank");
    },
    toggle(index) {
      debugger;
      var curHeight = this.$refs["article-content"][index].offsetHeight;
      if (curHeight > 100) {
        // this.$refs["article-content"][index].style.height = "100px";
        this.storyFlags[index].shouldToggle = true;
      } else {
        this.storyFlags[index].shouldToggle = false;
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
.article-item-subcontainer {
  background: white;
  padding: 10px;
}

.article-item-subcontainer:hover {
  background: lightsalmon;
}

.article-content_inner {
  margin-right: 20px;
  margin-bottom: 20px;
  height: 100%;
  margin-right: 100px;
  user-select: none;
 
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