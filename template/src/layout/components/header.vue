<template>
    <div class="wrapper">
            <div class="header-top">
                <el-row>
                    <el-col :span="8" :offset="1">
                        <h1 class="title">
                            <i class="el-icon-moon-night"></i>
                            <span>Expelliarmus</span>
                        </h1>
                    </el-col>
                    <!-- <el-col :span="10">
                          <ul class="menu-tab">
                              <li
                              :class="activeName === i?'active':''"
                              @click="activeName = i"
                              v-for="i in 4"
                              :key="i">首页</li>
                          </ul>
                    </el-col> -->
                </el-row>

            </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 1
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper{
    width:100%;
    height:100%;
    background:rgb(240, 238, 238);
     .header-top{
        width:100%;
        height:60px;
        background:rgb(34,114,70);
        position:relative;
        .title{
            height:60px;
            color:#eee;
            font-size:36px;
            line-height:60px;
            margin:0;
        }

        .menu-tab{
            position: absolute;
            bottom:17px;
            list-style: none;
            margin:0;
            // border:1px solid #000;

            li{
                display: inline-block;
                font-size:16px;
                font-weight: 500;
                padding:3px 20px;
                // width:80px;
                // border:1px solid #000;
                color:#eee;
                // text-align: center;
                 cursor: pointer;
                &.active{
                    color:rgb(34,114,70);
                    background:#eee;
                }
                &:not(.active):hover{

                  background: rgb(80, 150, 112);
                }
            }
        }

    }

}

</style>
