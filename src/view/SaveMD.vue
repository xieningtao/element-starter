<template>
  <el-container style="height: 100%" direction="vertical">
    <el-header class="saveHeader">
      <div class="saveButtonContainer">
        <el-button @click="saveMD">保存</el-button>
      </div>

      <div class="saveInputContainer">
        <el-input class="saveInput" v-model="title" placeholder="请输入标题"></el-input>
      </div>
    </el-header>

    <el-main>
      <el-input
        class="saveInputDiggest"
        v-model="articleDiggest"
        placeholder="请输入摘要"
        type="textarea"
        :autosize="{minRows: 3}"
      ></el-input>
      <mavon-editor
        class="saveMavonEditor"
        @change="writeData"
        @save="saveMD"
        ref="md"
        @imgAdd="$imgAdd"
        @imgDel="$imgDel"
      />
    </el-main>

    <div class="savePhoto" @click="addPhoto">
      <img :src="thumbnailUrl" class="uploadPlushImg" >
    </div>

    <div class="uploadDialogContainer" v-show="showDialog">
      <div class="uploadDialog">
        <h5>请输入图片地址</h5>
        <input class="uploadDialogInput" type="text" v-model="imgUrl" placeholder="请输入图片地址">
        <!-- <div @click="showDialog=false">确定</div> -->
        <el-button class="uploadDialogConfirm" type="primary" round @click="sure">确定</el-button>
      </div>
    </div>
  </el-container>
</template>

<script>
import MavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import ElRow from "element-ui/packages/row/src/row";
import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";
const localUrl = "/src/assets/fun/plus.png";
export default {
  data() {
    return {
      value: "",
      render: "",
      title: "",
      articleDiggest: "",
      dialogVisible: false,
      dialogContent: "",
      thumbnailUrl: localUrl,
      showDialog:false,
      imgUrl:""
    };
  },
  methods: {
    writeData(value, render) {
      console.info("value: " + value + " render: " + render);
      this.value = value;
      this.render = render;
    },
    addPhoto(){
      debugger
      this.showDialog = true;
    },
    sure(){
      this.showDialog=false;
      this.thumbnailUrl = this.imgUrl
      this.imgUrl = ""
    },

    getDiggest(render) {},
    $imgDel(pos) {},
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var file = Bmob.File($file.name, $file);
      file
        .save()
        .then(res => {
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          this.$refs.md.$img2Url(pos, res[0].url);
          console.info("url: " + res[0].url);
        })
        .catch(error => {
          console.error("error: " + JSON.stringify(error));
        });
    },
    saveMD() {
      let type = this.$route.params.type;
      let tableName = "Heel";
      if (this.GLOBAL.FUNNY_STORY == type) {
        tableName = "FunnyStory";
      } else if (this.GLOBAL.HEEL == type) {
        tableName = "Heel";
      } else {
        tableName = "";
      }
      if (tableName == "") {
        alert("没有适配类型");
        return;
      }
      const query = Bmob.Query(tableName);
      if (this.title == "") {
        this.dialogVisible = true;
        alert("标题不能为空");
        return;
      }
      if (type != this.GLOBAL.FUNNY_STORY && this.articleDiggest == "") {
        this.dialogVisible = true;
        alert("摘要不能为空");
        return;
      }
      query.set("title", this.title);
      query.set("content", this.value);
      query.set("render", this.render);
      query.set("diggest", this.articleDiggest);
      query.set("thumbnailUrl",this.thumbnailUrl);
      //   query.set("type", type);
      query
        .save()
        .then(res => {
          console.log(res);
          this.$router.go(-1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    ElFooter,
    "mavon-editor": MavonEditor.mavonEditor
  }
};
</script>

<style lang="scss">
.saveInputContainer {
  width: 100%;
  height: 100%;
}
.saveHeader {
  width: 100%;
  padding-left: 0px;
  padding-top: 10px;
}
.saveInput {
  width: 60%;
  position: relative;
  left: 40px;
}
.saveButtonContainer {
  position: absolute;
  right: 10px;
  top: 10px;
}
.saveMavonEditor {
  width: 100%;
  height: 100%;
}
.saveInputDiggest {
  width: 60%;
  position: relative;
  display: block;
  left: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.uploadPlushImg {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.savePhoto {
  position: absolute;
  top: 10px;
  right: 100px;
  width: 100px;
  height: 130px;
  background-color: lightblue;
  z-index: 100;
}
.uploadDialogContainer {
  background-color: gray;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.uploadDialog {
  width: 500px;
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  //   border: 1px solid blue;
  background-color: white;
  //   box-sizing: border-box;
}
.uploadDialogInput {
  width: 80%;
  height: 30px;
  display: block;
  margin: 0 auto;
}
.uploadDialogConfirm {
  position: relative;
  margin-top: 20px;
  margin-left: 0px;
  margin-right: 0px;
  width: 120px;
}
</style>


