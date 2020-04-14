<template>
  <div class="wrapper">
      <div class="canvas-box" @touchstart="startFunc" @touchmove="moveFunc">
          <canvas :width="CW" :height="CH" ref="canvas"></canvas>
          <div class="mask" v-show="isMask" ></div>
      </div>
      <div class="button-box">
          <input type="file" accept="image/*" class="file" ref="file" @change="changeFunc">
          <button @click="clickFunc">选择</button>
          <button @click="scaleFunc(1)">放大</button>
          <button @click="scaleFunc(0)">缩小</button>
          <button @click="save">保存</button>
      </div>
  </div>
</template>

<script>
/**
 * 1. 画布大小、遮罩层大小和位置、上传的图片的大小和位置、是否显示遮罩
 * 2. 选中图片，绘制到画布中
 * 3. 图片拖拽：重新绘制图片所在位置
 * 4. 图片的方法与缩小：重新绘制图片大小
 * 5. 保存图片：把遮罩层选中的部分（像素），最后生成一张新的图片
 */
export default {
  data () {
    // eslint-disable-next-line
    let winW = document.documentElement.clientWidth, // html视口宽度
      font = parseFloat(document.documentElement.style.fontSize), // 字体大小
      canvasW = winW - 0.4 * font,
      maskW = canvasW * 0.7
    return {
      // 画布大小
      CW: 500,
      CH: 500,
      // mask大小
      MW: maskW,
      MH: maskW,
      // mask位置
      maskLeft: (canvasW - maskW) / 2,
      maskTop: (canvasW - maskW) / 2,
      // 上传图片大小 位置
      IW: 0,
      IH: 0,
      IL: 0,
      IT: 0,
      // 是否显示mask
      isMask: false,
      image: null
    }
  },
  methods: {
    clickFunc () {
      // 触发File选择文件的操作
      this.$refs.file.click()
    },
    changeFunc (e) {
      // 选择了新的图片
      this.isMask = true
      let file = this.$refs.file.files[0]
      if (file) {
        let fr = new FileReader()
        fr.readAsDataURL(file)
        fr.onload = ev => {
          // 创建新图片
          this.image = new Image()
          this.image.src = ev.target.result
          this.image.onload = _ => {
            this.IW = this.image.width
            this.IH = this.image.height
            let n = 1 // 图片宽比
            if (this.IW > this.IH) { // 如果宽大于高
              n = this.IW / 500
              this.IW = 500
              this.IH = this.IH / n
            } else {
              n = this.IH / 500
              this.IH = 500
              this.IW = this.IW / n
            }
            this.IL = (500 - this.IW) / 2
            this.IT = (500 - this.IH) / 2
            this.drawImage()
          }
        }
      }
      // eslint-disable-next-line no-useless-return
      return
    },
    // 绘制图片
    drawImage () {
      this.ctx = this.$refs.canvas.getContext('2d')
      // 清空画布
      this.ctx.clearRect(0, 0, 500, 500)
      // 绘制图片
      this.ctx.drawImage(this.image, this.IL, this.IT, this.IW, this.IH)
    },
    scaleFunc (flag) {
      if (!this.image) {
        // eslint-disable-next-line no-useless-return
        return
      }
      // eslint-disable-next-line one-var
      let n = this.IW / this.IH,
        n1 = 20,
        n2 = n1 * n
      if (flag) {
        this.IW += n1
        this.IH += n2
      } else {
        this.IW -= n1
        this.IH -= n2
      }
      this.drawImage()
    },
    // 拖拽
    startFunc (ev) {
      // 按下时获取手指坐标
      let point = ev.changedTouches[0]
      this.startX = point.clientX
      this.startY = point.clientY
    },
    moveFunc (ev) {
      let point = ev.changedTouches[0]
      this.changeX = point.clientX - this.startX
      this.changeY = point.clientY - this.startY
      if (Math.abs(this.changeX) > 10 || Math.abs(this.changeY) > 10) {
        this.IL += this.changeX
        this.IT += this.changeY
        this.drawImage()
        // 重置
        this.startX = point.clientX
        this.startY = point.clientY
      }
    },
    save () {
      if (!this.image) {
        // eslint-disable-next-line no-useless-return
        return
      }
      // 获取指定区域的像素信息
      // console.log(this.ctx.getImageData)
      let imageData = this.ctx.getImageData(100, 100, 300, 300)

      // 新建一个canvas 把图片插进去
      let canvas2 = document.createElement('canvas')
      let canvas2CTX = canvas2.getContext('2d')
      canvas2.width = this.MW
      canvas2.height = this.MH
      canvas2CTX.putImageData(imageData, 0, 0, 0, 0, this.MW, this.MH)
      this.$emit('saveImage', canvas2.toDataURL('image/png')) // 转图片 base64
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper{
    padding:0.2rem;
    .canvas-box{
        height:500px;
        width:500px;
        // border:1px dashed #eee;
        margin-bottom:20px;
        position: relative;
        overflow: hidden;

        canvas{
            display: block;
            box-sizing: border-box;
            // margin:0 auto;
            height:500px;
            width:500px;
            border:1px solid #ddd;
        }

        .mask{
            box-sizing: border-box;
            position: absolute;
            z-index:1;
            width:60%;
            height:60%;
            border:1px dashed lightcoral;
            background-color: rgba(0,0,0,0.2);
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
        }
    }
    .button-box{
        .file{
            display: none;
        }
    }
}
</style>
