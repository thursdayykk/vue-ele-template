<template>
    <div class="wrapper">
      <el-row>
         <el-divider content-position="left">内部虚线边框 &lt; outline &gt;</el-divider>
         <el-col :span="10">
           <div class="dash-border"></div>
         </el-col>
         <el-col :span="10">
           <p>  <b>outline</b>: 1px dashed #fff;</p>
           <p>  <b>outline-offset</b>:-10px;</p>
         </el-col>
      </el-row>
      <el-row>
         <el-divider content-position="left">边框内圆角 &lt; box-shadow &gt;</el-divider>
         <el-col :span="10">
           <div class="radius-border"></div>
         </el-col>
         <el-col :span="10">
           <p>  box-shadow: 0 0 0 10px saddlebrown;</p>
         </el-col>
      </el-row>
      <el-row>
         <el-divider content-position="left">条纹背景 &lt; linear-gradient,repeating-linear-gradient &gt;</el-divider>
         <el-col :span="10">
           <div class="tw-bg tw-fir"></div>
           <div class="tw-bg tw-sec"></div>
           <div class="tw-bg tw-third"></div>
         </el-col>
      </el-row>
       <el-row>
         <el-divider content-position="left">折角效果 &lt; linear-gradient &gt;</el-divider>
         <el-col :span="10">
           <div class="fold"></div>
           <div class="fold linear"></div>
           <div class="fold-1"></div>
         </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
.wrapper{
  height:100%;
  // border:1px solid #000;
  color:#666;
  padding:10px 20px;
  font-size:14px;
}
.el-row{
  margin-top:10px;
}

.dash-border{
  width:200px;
  height:100px;
  background:olivedrab;
  outline: 1px dashed #fff;
  outline-offset:-10px;
}
.radius-border{
  margin-top:10px;
  width:200px;
  height:100px;
  background:olivedrab;
  border-radius: 10px;
  box-shadow: 0 0 0 5px saddlebrown;
}
.tw-bg{
  margin-bottom: 10px;
  width:200px;
  height:20px;
  border-radius: 8px;
  background-size: 40px 100%;
  box-shadow: inset 0 0 3px #555;
  &.tw-fir{
    background: linear-gradient(to right,#fb3 50%,#58a 0);
    background-size: 40px 40px;
  }
  &.tw-sec{
    background: linear-gradient(45deg,#fb3 25%,#58a 0,#58a 50%,#fb3 0,#fb3 75%,#58a 0);
    background-size: 40px 40px;
  }
  &.tw-third{
    /*  (可以实现任意角度的渐变，45°时显示效果最好) */
  background: repeating-linear-gradient(60deg,#fb3,#fb3 15px,#58a 0,#58a 30px);
  }
}

.fold{
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 200px;
  height: 80px;
  color: #fff;
  line-height: 80px;
  text-align: center;
  background: linear-gradient(to left bottom,transparent 50%,rgba(0,0,0,.5) 0) no-repeat 100% 0 / 2em 2em,
              linear-gradient(-135deg,transparent 1.4em,#06c 0);
}
.linear{
  background: linear-gradient(to left bottom,transparent 50%,rgba(0,0,0,.5)) no-repeat 100% 0 / 2em 2em,
              linear-gradient(-135deg,transparent 1.4em,#06c);
}
.fold-1{
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  width: 200px;
  height: 80px;
  border-radius: .5em;
  color: #fff;
  line-height: 80px;
  text-align: center;
  background: linear-gradient(-150deg,transparent 1.5em, #58a 0);
}
.fold-1::before{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to left bottom,transparent 50%,rgba(0,0,0,.2) 0,rgba(0,0,0,.4)) 100% 0 no-repeat;
  width: 1.73em;
  height: 3em;
  transform: translateY(-1.3em) rotate(-30deg);
  transform-origin: bottom right;
  border-bottom-left-radius: inherit;
  box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);
}

</style>
