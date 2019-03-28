<template>
  <div>
    <div class="uploadPhotoContainer">
        <div class="uploadPhotoGroup">
      <textarea class="uploadTitle" placeholder="请输入标题" v-model="title"/>
      <div class="uploadImgGroup">
      <img :src="groupPhotoUrl" :class='groupPhotoUrl==localPlusUrl? "groupPhoto":"uploadImg"' @click="addGroupPhoto">
      </div>
</div>
      <div>子图集</div>
      <div>
        <ul>
          <li v-for="item,index in subPhotoUrls">
            <img
              :src="item"
              :class='index!=(subPhotoUrls.length-1)? "uploadImg":"uploadPlushImg"'
              @click="addSubPhoto"
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="uploadDialogContainer" v-show="showDialog">
      <div class="uploadDialog">
        <h5>请输入图片地址</h5>
        <input class="uploadDialogInput" type="text" v-model="imgUrl" placeholder="请输入图片地址">
        <!-- <div @click="showDialog=false">确定</div> -->
        <el-button class="uploadDialogConfirm" type="primary" round @click="sure">确定</el-button>
      </div>
    </div>

    <el-button class="uploadSave" type="primary" round @click="savePhotos">保存</el-button>
  </div>
</template>
<script>
const localUrl = "/src/assets/fun/plus.png";
export default {
  data() {
    return {
      title: "",
      localPlusUrl: localUrl,
      groupPhotoUrl: localUrl,
      subPhotoUrls: [],
      imgUrl: "",
      showDialog: false,
      addType: ""
    };
  },
  created: function() {
    this.subPhotoUrls.push(localUrl);
  },
  methods: {
      resetAll(){
        this.groupPhotoUrl = localUrl;
        this.subPhotoUrls=[];
        this.subPhotoUrls.push(localUrl);
        this.title="";
      },
    savePhotos() {
      const query = Bmob.Query("BeautyGroup");
      query.set("title", this.title);
      query.set("photoUrl", this.groupPhotoUrl);
      query
        .save()
        .then(res => {
          console.log(res);
          const queryArray = new Array();
          // 构造含有50个对象的数组
          let length = this.isSubPhotoFull()
            ? this.subPhotoUrls.length
            : this.subPhotoUrls.length - 1;
          if (length <= 0) {
            return;
          }
          for (var i = 0; i < this.subPhotoUrls.length; i++) {
            const pointer = Bmob.Pointer("BeautyGroup");
            const pointerId = pointer.set(res.objectId);
            const subQuery = Bmob.Query("SubBeauty");
            subQuery.set("groupId", pointerId);
            subQuery.set("photoUrl", this.subPhotoUrls[i]);
            queryArray.push(subQuery);
          }
          Bmob.Query("SubBeauty")
            .saveAll(queryArray)
            .then(res => {
              alert("上传成功");
             this.resetAll()
            })
            .catch(err => {
              alert("上传失败");
            });
        })
        .catch(err => {
          console.log(err);
          alert("上传失败");
        });
    },
    addGroupPhoto() {
      this.showDialog = true;
      this.addType = "group";
    },
    addSubPhoto() {
      this.showDialog = true;
      this.addType = "sub";
    },
    isSubPhotoFull() {
      return this.subPhotoUrls.length >= 5;
    },
    sure() {
      this.showDialog = false;
      if (this.addType == "group") {
        this.groupPhotoUrl = this.imgUrl;
      } else if (this.addType == "sub") {
        let total = this.subPhotoUrls.unshift(this.imgUrl);
        if (total >= 5) {
          this.subPhotoUrls.pop();
        }
      } else {
        alert("类型错误");
      }
      this.imgUrl = "";
    }
  }
};
</script>
<style lang="scss">
.uploadPhotoContainer {
  position: relative;
}
.uploadPhotoGroup{
    position: relative;
}
.uploadImgGroup{
    background: lightblue;
    position: relative;
      width: 250px;
  height: 360px;
  margin: 10px;
}
.uploadTitle {
  display: block;
  height: 3rem;
  width: 60%;
  margin-left: 10px;
//   margin: 0 auto;
  margin-top: 20px;
}
.groupPhoto,
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
.uploadImg {
  width: 250px;
  height: 360px;
      position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
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
.uploadPhotoContainer ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
}

.uploadPhotoContainer li {
  list-style: none;
  margin: 10px;
   width: 250px;
  height: 360px;
      position: relative;
    background: lightblue;
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
.uploadSave {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 100px;
}
</style>
