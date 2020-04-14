<template>
    <div class="wrapper">
        <!-- filp纸牌的外框 -->
        <!-- down 向下翻牌动效 -->
        <!-- front 前面的动效 -->
        <!-- back 后面的纸牌 -->
        <!-- number 纸牌上的数字 -->
        <template  v-for="(item,i) in list">
            <div class="filp down" :class="item.go?'go':''" :key="i">
                <div class="digital front" :class="item.front"></div>
                <div class="digital back" :class="item.back"></div>
            </div>
            <em :key="i +'*'" v-if="(i+1)%2 == 0 && i !== 5" class="point">:</em>
        </template>
        <!-- <el-button @click="add">add</el-button> -->

    </div>
</template>

<script>
import getNowTime from '../../../../libs/dateFormatter.js'
export default {
  mounted () {
    let that = this
    this.getList().forEach((el, i) => {
      console.log(el)
      that.list[i].front = 'number' + el
      that.list[i].back = 'number' + (that.list[i].front - 1)
    })
    this.animate()()
  },
  data () {
    return {
      list: [
        {
          go: false,
          front: 'number0',
          back: 'number0'
        },
        {
          go: false,
          front: 'number0',
          back: 'number0'
        },
        {
          go: false,
          front: 'number0',
          back: 'number0'
        },
        {
          go: false,
          front: 'number0',
          back: 'number0'
        },
        {
          go: false,
          front: 'number0',
          back: 'number0'
        },
        {
          go: false,
          front: 'number0',
          back: 'number0'
        }
      ],
      timer: null,
      date: null
    }
  },
  methods: {
    animate () {
      let prev = this.getList()
      return () => {
        this.timer = setInterval(() => {
          let now = this.getList()
          for (let i = 0; i < 6; i++) {
            if (now[i] !== prev[i]) {
              this.list[i].go = true
              this.list[i].back = 'number' + now[i]
              setTimeout(() => {
                this.list[i].go = false
                this.list[i].front = this.list[i].back
                prev = now
              }, 600)
            }
          }
        }, 1000)
      }
    },
    getList () {
      let h, m, s
      this.date = getNowTime()
      h = (this.date.h + '').split('')
      m = (this.date.min + '').split('')
      s = (this.date.s + '').split('')
      if (h.length === 1) {
        h.unshift('0')
      }
      if (m.length === 1) {
        m.unshift('0')
      }
      if (s.length === 1) {
        s.unshift('0')
      }
      return h.concat(m, s)
    },
    add () {
      //   this.list[5].front = 'number' + (Number(this.list[5].front.split('')[6]) + 1)
      this.list[5].back = 'number' + (Number(this.list[5].front.split('')[6]) + 1)
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper{
    width:100%;
    // border:1px solid #000;
    text-align: center;
    padding-top:100px;
}
/**
    四个小纸片
    前上：.digital.font::before
    前下：.digital.font::after
    后上：.digital.back::before
    后下：.digital.back::after
 */
.filp{
    display: inline-block;
    position:relative;
    width:60px;
    height:100px;
    line-height: 100px;
    // border:1px solid #000;
    border-radius: 10px;
    background:#fff;
    font-size:66px;
    color:#fff;
    box-shadow: 0 0 6px rgba(0,0,0,.5);
    text-align: center;
    font-family: "Helvetica Neue";
    // margin-right:10px;
}
.point{
    color:#666;
    font-size:50px;
    font-style: normal;
    display: inline-block;
    vertical-align: bottom;
    height:100px;
    line-height: 100px;
    margin:0 5px;
    // border:1px solid #000;
}

.filp .digital:before,
.filp .digital:after{
    content:"";
    position:absolute;
    left:0;
    right:0;
    background:#227246;
    overflow: hidden;
    box-sizing: border-box;

}
.filp .digital:before{
    top:0;
    bottom:50%;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #eee;
}
.filp .digital:after{
    top: 50%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    line-height: 0;
}
.filp .number0:before,
.filp .number0:after{
    content:"0"
}
.filp .number1:before,
.filp .number1:after{
    content:"1"
}
.filp .number2:before,
.filp .number2:after{
    content:"2"
}
.filp .number3:before,
.filp .number3:after{
    content:"3"
}
.filp .number4:before,
.filp .number4:after{
    content:"4"
}
.filp .number5:before,
.filp .number5:after{
    content:"5"
}
.filp .number6:before,
.filp .number6:after{
    content:"6"
}
.filp .number7:before,
.filp .number7:after{
    content:"7"
}
.filp .number8:before,
.filp .number8:after{
    content:"8"
}
.filp .number9:before,
.filp .number9:after{
    content:"9"
}

.filp.down .front:before{
    z-index:3;
}
.filp.down .back:after{
    z-index:2;
    transform-origin: 50% 0%;
    transform: perspective(160px) rotateX(180deg)
}
.filp.down .front:after,
.filp.down .back:before{
    z-index:1;
}

.filp.down.go .front:before{
    transform-origin: 50% 100%;
    animation: frontFlipDown 0.6s ease-in-out both;
    box-shadow: 0 -2px 6px rgba(255,255,255,.3);
    backface-visibility: hidden; //元素的背面是否可见
}
.filp.down.go .back:after{
    animation:backFlipDown 0.6s ease-in-out both;
}
@keyframes frontFlipDown {
    0%{
        transform: perspective(160px) rotateX(0deg)
    }

    100%{
        transform: perspective(160px) rotateX(-180deg)
    }
}
@keyframes backFlipDown {
    0%{
        transform: perspective(160px) rotateX(180deg)
    }

    100%{
        transform: perspective(160px) rotateX(0deg)
    }
}
</style>
