<template>
    <div>
        <div class="link-panel">
            <el-link @click="sendMessage"><i class="el-icon-picture-outline-round"></i> </el-link>
            <el-link><i class="el-icon-scissors"></i> </el-link>
            <el-link><i class="el-icon-microphone"></i> </el-link>
            <el-link><i class="el-icon-phone-outline"></i> </el-link>
        </div>
        <div class="emoji-panel" v-show="show">
            <div class="item-panel" v-for="(item,i) in emojiList" :key="i">
                <img
                    :src="require(`@/assets/images/emoji/${item}`)"
                    alt=""
                    @click="chooseEmoji(item)">
            </div>
        </div>
        <div class="input-panel"
            ref="msgInputContainer"
            @keydown.enter.exact="sendMessage($event)"
            contenteditable="true" spellcheck="false"
        ></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      emojiList: ['mj.jpg', 'gt.jpg', 'kx.jpg'],
      show: false
    }
  },
  methods: {
    sendMessage (e) {
      this.show = !this.show
      this.$refs['msgInputContainer'].focus()
    },
    chooseEmoji (src) {
      const imgSrc = require(`@/assets/images/emoji/${src}`)
      const img = `<img src="${imgSrc}" width="20" height="20" alt="">`
      document.execCommand('insertHTML', false, img)
    }
  }
}
</script>

<style lang='scss' scoped>
.link-panel{
    width:100px;
    margin:100px auto 0;
    position:relative;
    left:-150px;
}
.input-panel{
    margin:0 auto;
    width:400px;
    height:80px;
    overflow-y: auto;
    border:1px solid #000;
}
.emoji-panel{
    padding:5px;
    position:absolute;
    border:1px solid #eee;
    box-shadow: 0px 0px 5px #666;
    width:300px;
    height:80px;
    left:40%;
    top:15%;
    background:#fff;
    transform: translateX(-32%);
}
.item-panel{

    display: inline-block;
    cursor: pointer;

    img{
        width:20px;
        height:20px;
    }
}
</style>
