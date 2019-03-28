<template>
  <div class="markdown-edit-root">
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
      <div class="heeledCommentCotainer">
        <comment class="heeledComment" :type="type" :articleId="articleId"></comment>
      </div>
    </div>
  </div>
</template>


<script>
import "mavon-editor/dist/css/index.css";
var mavonEditor = require("mavon-editor");

import Comment from "./Comment.vue";

export default {
  data() {
    return {
      content: "",
      myRender: "",
      title: "",
      defaultData: "preview",
      articleId:"",
      type:"heel"
    };
  },
  created: function() {
    debugger;
    var param = this.$route.params;
    const query = Bmob.Query("Heel");
    const objectId = param.id;
    this.articleId = objectId;
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
.markdown-edit-root {
  background: url("https://files-cdn.cnblogs.com/files/mrszhou/jijian2.bmp")
    no-repeat top center fixed;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 20px;
  padding-top: 20px;
  overflow: scroll;
  // border: solid 1px transparent;
}
.markdown-edit-container {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 50%;
  margin: 0px auto;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px #000;
  // overflow: scroll;
  .v-note-wrapper {
    .v-note-panel.shadow {
      box-shadow: none;

      // .v-note-show.single-show {
      .v-show-content.scroll-style {
        background: white;
      }
    }
  }
  // }
}

.v-show-content .scroll-style {
  background-color: white;
}
.markdown-edit-content {
  width: 100%;
  height: 100%;
  align-self: center;
  flex-grow: 10;
  background-color: white;
  border-bottom: 0px;
}
.heeledCommentCotainer {
  background-color: white;
  width: 100%;
  // border: solid 1px lightseagreen;
  flex-grow: 1;
}
.heeledComment {
}
</style>