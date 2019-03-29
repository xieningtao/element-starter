<template>
  <div class="commentContainer">
    <div class="commentPublishContainer">
      <img
        src="https://ww1.sinaimg.cn/thumb150/006nubJEgy1g1h4rbc0xwj31cf1sgb2a.jpg"
        class="commentPublishPhoto"
      >
      <div class="commentInputContainer">
        <textarea v-model="message" placeholder=" 有什么想说的" class="commentInput"/>
      </div>
      <div class="commentSend" @click="sendComment">
        <strong>发送</strong>
      </div>
    </div>

    <div class="commentListContainer">
      <div class="commentListTitle">
        <strong>精彩评论</strong>
      </div>
      <ul>
        <li v-for="item,index in allComments" class="commentItemContainer">
          <img :src="item.photoUrl" class="commentPhoto">

          <div class="commentNickName">{{item.nickName}}</div>
          <div class="commentTime">{{item.commentTime}}</div>

          <div class="commentContent">{{item.content}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
var moment = require("moment");
export default {
  props: {
    type: { type: String, required: true },
    articleId: { type: String, required: true }
  },
  data() {
    return {
      message: "",
      nickName: [
        "邮梦人 ",
        "红指甲油 ",
        "说过、要牵着手一辈子。 ",
        "天气好晴朗_ ",
        "ノ琉璃灯的光ぐ ",
        "夕阳西下，一抹红晕。 ",
        "聆聽＊幸福 ",
        "汐染季沫ぃ ",
        "布满玫瑰花的婚礼。 ",
        "唯丶美不蚀 ",
        "寄风给你ベ ",
        "╰聆听世界每个角度 ",
        "梦幻爱情妹 ",
        "末日的美╮ ",
        "花骨埋香 ",
        "哥足踏小花园◆◇姐脚扎红蜻蜓◆◇ ",
        "夜晚的星空美丽却不永恒* ",
        "幸福像花儿一样 ",
        "寄我阳光i ",
        "这朵美丽的格桑花 ",
        "沉醉花海 ",
        "美丽的泡沫i ",
        "Silence *缄默 ",
        "一花一世界つ一念一尘緣つ ",
        "水舞 ",
        "赏烟花じ飞满天 ",
        "￡紫梦★恋星彡 ",
        "演绎的花瓣雨。 ",
        "一花一世界 一念一尘缘 ",
        "樱花落幕 ",
        "然后，爱情随遇而安 ",
        "那抹天真の微笑 ",
        "→流星☆坠落↘ ",
        "笑靥如花。 ",
        "℡╮牵起手到天荒地老 ",
        "懜衶錵 ",
        "№落在指尖的羽毛＾ ",
        "沵细长的眼睛 ",
        "◆◇、左手边╮幸福 ",
        "燕尾蝶 ",
        "鲸鱼安慰了大海 ",
        "水的波光 ",
        "景忧丶 枫涩帘淞幕雨 ",
        "半朵雲、半顆訫 ",
        "纸星星i ",
        "幻听、 ",
        "静静地、聆听美好 ",
        "〃蓝色的蕾丝 ",
        "清宵尚温 ",
        "把美好留在明天 ",
        "┊风居住的梦幻卍 ",
        "月色相伴 ",
        "夏末ソ夜微涼べ ",
        "゛雾以泪聚 ° ",
        ".·☆蝶舞飛揚☆·. ",
        "疏影柏翠胭脂淡 ",
        "海映蓝了天 ",
        "爱好美！ ",
        "晴天下起了雨@ ",
        "む妖饰千年ょ乱一世浮华 ",
        "一缕曙光 ",
        "流星、划过sky ",
        "ㄣ雨愿 ",
        "我可以陪你去看星星 ",
        "纯爱绵绵。 ",
        "天空之城 "
      ],
      photosUrl: [
        "http://www.158pic.com/uploads/allimg/1903/2-1Z304164S00-L.jpg",
        "http://www.158pic.com/uploads/allimg/1903/2-1Z303191J10-L.jpg",
        "http://www.158pic.com/uploads/allimg/1902/2-1Z2221530510-L.jpg",
        "http://www.158pic.com/uploads/allimg/1902/2-1Z2202201260-L.jpg",
        "http://www.158pic.com/uploads/allimg/1902/2-1Z220214J70-L.jpg",
        "http://www.158pic.com/uploads/allimg/1902/2-1Z21QG1540-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z131163P40-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z1301F2230-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z12H25P10-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z11R05R10-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z1151I2010-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z10H032570-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z1041601150-L.jpg",
        "http://www.158pic.com/uploads/allimg/1901/2-1Z1011H1300-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q2302102270-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q22QPQ70-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q224213Z80-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q2242136110-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q2232303200-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q21QH1500-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q214230G40-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q213203F70-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q2132021420-L.jpg",
        "http://www.158pic.com/uploads/allimg/1812/2-1Q2031513180-L.jpg",
        "http://www.158pic.com/uploads/allimg/1811/2-1Q1241FK20-L.jpg",
        "http://www.158pic.com/uploads/allimg/1811/2-1Q1202051010-L.jpg",
        "http://www.158pic.com/uploads/allimg/1811/2-1Q1201T0150-L.jpg",
        "http://www.158pic.com/uploads/allimg/1811/2-1Q1161I4080-L.jpg"
      ],
      allComments: []
    };
  },
  created: function() {
    this.getComments();
  },

  methods: {
    getComments() {
      debugger;
      let tableName = this.getCommentTable();
      const query = Bmob.Query(tableName);
      query.order("-updatedAt");
      query.equalTo("articleId", "==", this.articleId);
      query
        .find()
        .then(res => {
          this.allComments = res;
        })
        .catch(err => {
          console.log(err);
          this.allComments = [];
        });
    },
    getRandomNickName() {
      let max = this.nickName.length;
      let index = Math.floor(Math.random() * max);
      return this.nickName[index];
    },
    getRandomPhotos() {
      let max = this.photosUrl.length;
      let index = Math.floor(Math.random() * max);
      return this.photosUrl[index];
    },
    getCommentTable() {
      let tableName = "";
      if (this.type == "heel") {
        tableName = "HeelComment";
      } else if (this.type == "story") {
        tableName = "StoryComment";
      }
      return tableName;
    },
    sendComment() {
      if (this.message == "") {
        return;
      }
      let curName = this.getRandomNickName();
      let curTime = moment(Date.now()).format("YYYY-MM-DD HH:mm");
      let url = this.getRandomPhotos();
      this.allComments.unshift({
        photoUrl: url,
        nickName: curName,
        commentTime: curTime,
        content: this.message
      });

      let tableName = this.getCommentTable();
      if (tableName == "") {
        alert("没有适配类型");
        return;
      }
      const query = Bmob.Query(tableName);
      query.set("nickName", curName);
      query.set("commentTime", curTime);
      query.set("photoUrl", url);
      query.set("content", this.message);
      query.set("articleId", this.articleId);
      query
        .save()
        .then(res => {
          console.log(res);
          this.$router.go(-1);
        })
        .catch(err => {
          console.log(err);
        });
      this.message = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.commentContainer {
  width: 100%;
  height: 100%;
  border: solid 1px lightgray;
  border-top-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  padding-top: 10px;
  position: relative;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif
}

.commentPublishContainer {
  position: relative;
  margin: 0px auto;
  width: 100%;
  height: 7rem;
  padding: 10px;
  z-index: 1000;
  box-sizing: border-box;
}
.commentInputContainer {
  position: absolute;
  left: 60px;
  right: 10px;
  bottom: 60px;
  top: 10px;
}
.commentInput {
  height: 100%;
  width: 100%;
  border-width: 1px;
  border-color: lightblue;
  border-style: solid;
  padding: 5px;
  box-sizing: border-box;
}
.commentSend {
  position: absolute;
  width: 80px;
  height: 40px;
  right: 10px;
  bottom: 10px;
  border-radius: 20px;
  background-color: #e50000;
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 16px;

  &:hover {
    background-color: #cdcc00;
  }
}
.commentListContainer {
  width: 100%;
  margin: 0px auto;
}

.commentListContainer > ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.commentListTitle {
  font-size: 22px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.commentListContainer > ul > li {
  list-style: none;
  margin-bottom: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  // background-color: lightgray;
  // border-width: 1px;
  border-bottom-width: 0px;
  border-top-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-color: lightgray;
  position: relative;
  padding: 10px;
}
.commentPhoto {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: relative;
}
.commentPublishPhoto {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.commentNickName {
  position: absolute;
  left: 60px;
  top: 10px;
  font-size: 16px;
}
.commentTime {
  position: relative;
  display: inline;
  font-size: 10px;
  color: #969696;
}
.commentContent {
  position: relative;
  font-size: 16px;
  top: 5px;
  color: #333333
}
</style>
