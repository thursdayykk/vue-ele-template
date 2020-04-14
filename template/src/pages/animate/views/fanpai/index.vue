<template>
    <div>
      <div class="chartNum">
        <div class="box-item">
          <li :class="{'number-item':!isNaN(item),'mark-item':isNaN(item)}"
            v-for="(item,index) in orderNum"
            :key="index">
                <span v-if="!isNaN(item)">
                  <i ref="numberItem">0123456789</i>
                </span>
                <span class="comma" v-else>{{item}}</span>
            </li>
        </div>
      </div>
    </div>
</template>

<script>
/**
 * 实现数字翻牌动态效果，css 属性 writing-mode: vertical-lr，使数字竖直排版，
    2d移动 transform: translate(-50%, -40%); y值控制移动至哪个数字，transition
    控制transform属性有动画效果
 */
import getNowTime from '../../../../libs/dateFormatter.js'

export default {
  data () {
    return {
      orderNum: ['0', '0', '0', '0', '0', '0', '0', '0'] // 默认订单总数
    }
  },
  mounted () {
    setTimeout(() => {
      this.toOrderNum(this.getTime())
      setInterval(() => {
        this.toOrderNum(this.getTime())
      }, 1000)
    }, 500)
  },

  methods: {
    getTime () {
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
      return h.concat(m, s).join('')
    },
    setNumberTransform () {
      const numberItems = this.$refs.numberItem // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter(item => !isNaN(item))
      // 结合css 对数字字符进行滚动
      for (let index = 0; index < numberItems.length; index++) {
        const ele = numberItems[index]
        ele.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    },
    toOrderNum (num) {
      num = num.toString() // 转字符串
      if (num.length < 8) {
        num = '0' + num // 不满8位，补0
        this.toOrderNum(num) // 递归补0
      } else if (num.length === 8) {
        this.orderNum = num.split('') // 将其变成数据，渲染到滚动数组
      } else {
        console.log('总量数字过大')
      }
      this.setNumberTransform()
    }
  }
}
</script>

<style lang='scss' scoped>
.chartNum{
  width:400px;
  height:150px;
  margin:50px auto;

}
/**订单总量滚动数字设置 */
.box-item{
  position: relative;
  height:100px;

  font-size:54px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  color:#fff;
  writing-mode:vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑 */
  -moz-user-select:none;/* 火狐 */
  -webkit-user-select:none; /**webkit浏览器 */
  -ms-user-select:none; /**IE10 */
  -khtml-user-select:none; /**远古浏览器 */
  user-select:none;
}

/**默认逗号设置 */
.mark-item{
  width:10px;
  height:100px;
  margin-right:5px;
  line-height:10px;
  font-size:48px;
  position: relative;
  & > span{
    position: absolute;
    width:100%;
    bottom:0;
    writing-mode:vertical-lr;
    text-orientation: upright;
  }
}
/**滚动数字设置 */
.number-item {
  width:41px;
  height:75px;
  background:darkolivegreen;
  list-style:none;
  margin-right:5px;
  border-radius: 4px;
  border:1px solid rgba(211,211,211,1);
  & > span{
    position:relative;
    left:-75%;
    display: inline-block;
    margin-right:10px;
    width:100%;
    height:100%;
    writing-mode:vertical-lr;
    text-orientation: upright;
    overflow: hidden;

    & > i {
      font-style: normal;
      position: absolute;
      top:11px;
      left:50%;
      transform: translate(-50%,0);
      transition:transform 1s ease-in-out;
      letter-spacing: 10px
    }
  }
}
.number-item:last-child{
  margin-right:0;
}
</style>
