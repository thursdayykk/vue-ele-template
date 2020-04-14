<template>
    <div>
        <div class="content-panel" ref="messagesContainer">
            <div class="msg-panel" v-for="msg in msgList" :key="msg">
                <img :src="require(`@/assets/images/emoji/mj.jpg`)" alt="" width="20" height="20">
                <span class="msg">{{msg}}</span>
            </div>
        </div>
        <button @click="sendMsg">add</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msgList: ['hello', '?']
    }
  },
  methods: {
    sendMsg () {
      this.msgList.push('???')
      this.$nextTick(() => {
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.content-panel{
    width:400px;
    height:250px;
    border:1px solid #000;
    margin:20px auto;
    overflow-y: auto;
}
</style>
