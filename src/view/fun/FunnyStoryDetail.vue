<template>
   <div class="markdown-edit-container">
    <mavon-editor
      class="markdown-edit-content"
      v-model="content"
      :subfield="false"
      :defaultOpen="defaultData"
      :toolbarsFlag="false"
      :boxShadow="true"
    />
    <!-- <div style="width:50%;display: flex;justify-content: center;align-items: center" v-html="myRender"></div> -->
    <!-- <div class="markdown-edit-content" v-html="myRender"></div> -->
    <div class="storyCommentCotainer">
      <comment class="storyComment" :type="type" :articleId="articleId"></comment>
    </div>
  </div>
</template>


<script>
import Comment from "./Comment.vue";
import "mavon-editor/dist/css/index.css";
var mavonEditor = require("mavon-editor");

export default {
  data() {
    return {
      content: "",
      myRender: "",
      title: "",
      defaultData: "preview",
      type:"story",
      articleId:""
    };
  },
  created: function() {
    debugger;
    var param = this.$route.params;
     const objectId = param.id;
    this.articleId = objectId;
    const query = Bmob.Query("FunnyStory");
    query
      .get(objectId)
      .then(res => {
        console.log(JSON.stringify(res));
        this.content = res.content;
        this.myRender = res.render;
        this.title = res.title;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    writeData(value, render) {
      console.info("value: " + value + " render: " + render);
      this.content = render;
    }
  },
  components: {
    "mavon-editor": mavonEditor.mavonEditor,
    Comment
  }
};
</script>

<style type="text/scss" lang="scss">
.markdown-edit-container {
  background: url("https://files-cdn.cnblogs.com/files/mrszhou/jijian2.bmp")
    no-repeat top center fixed;
  //   background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  padding-bottom: 20px;
  // overflow: scroll;
}
.markdown-edit-content {
  width: 50%;
  height: 100%;
  align-self: center;
  margin: 0px auto;
  box-shadow: 0 0 10px #000;
  border: solid 1px lightseagreen;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-grow: 10;
}
.storyCommentCotainer {
//   margin-top: 10px;
  background-color: white;
  width: 50%;
  margin: 0px auto;
  box-shadow: 0 0 10px #000;
  border: solid 1px lightseagreen;
  flex-grow: 1;
}
.storyComment {
}
</style>