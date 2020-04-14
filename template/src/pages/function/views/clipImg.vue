<template>
  <div class="wrapper">
      <ClipImg @saveImage="saveImage" v-if="!isSave"/>
      <div class="resultBox" v-else @click="change">
        <img :src="data">
      </div>
  </div>
</template>

<script>
import ClipImg from '../components/clipImg/ClipImg'
export default {
  components: {
    ClipImg
  },
  data () {
    return {
      isSave: false,
      data: ''
    }
  },
  methods: {
    saveImage (imgdata) {
      this.isSave = true
      this.data = imgdata
    },
    change () {
      this.isSave = false
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper{
    padding:0.2rem;
    .resultBox img{
      display:block;
      box-sizing: border-box;
      width:300px;
      height:300px;
    }
}
</style>
