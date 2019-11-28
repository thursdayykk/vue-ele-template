<template>
    <div class="wrapper">
            <div class="header-top">
                <el-row>
                    <el-col :span="4" :offset="1">
                        <h1 class="title">
                            <i class="el-icon-moon-night"></i>
                            <span>HELLO</span>
                        </h1>
                    </el-col>
                    <el-col :span="10">
                          <ul class="menu-tab">
                              <li
                              :class="activeName === i?'active':''"
                              @click="activeName = i"
                              v-for="i in 4"
                              :key="i">首页</li>
                          </ul>
                    </el-col>
                </el-row>

            </div>
            <div class="header-menu">
                <ul>
                    <li class="menu-item" v-for="(item,i) in bottomMenu "
                    :key="i">
                        <i :class="item.icon"></i>
                        <span>{{item.title}}</span>
                        <el-dropdown class="dropdown" v-if="item.children">
                            <span class="el-dropdown-link">
                              <i class="el-icon-caret-bottom"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" >
                              <el-dropdown-item v-for="(el,i) in item.children"
                              :key="i">{{el}}</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>

                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 1,
      bottomMenu: [
        {
          title: '表单',
          icon: 'el-icon-document',
          children: ['hello', 'hello', 'hello']
        }, {
          title: '项目管理',
          icon: 'el-icon-s-grid'
        },
        {
          icon: 'el-icon-s-data',
          title: '统计'
        }, {
          icon: 'el-icon-setting',
          title: '配置'
        }, {
          icon: 'el-icon-coin',
          title: '数据库'
        }, {
          icon: 'el-icon-sort',
          title: '排序'
        }, {
          icon: 'el-icon-printer',
          title: '打印机'
        }
      ]
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
            color:#eee;
            font-size:26px;
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
    .header-menu ul{
        list-style:none;
        margin:0;
        // border:1px solid #000;
        padding:0;
        display: flex;
        position:absolute;
        // width:100%;
        height:60px;
        // padding-left:5px;
        .menu-item{
          margin-top:5px;
            width:80px;
            // border:1px solid #000;
            display: flex;
            flex-direction: column;
            // justify-content: center;

            align-items: center;
            color:#666;
            cursor: pointer;
            &:not(.active):hover{
                color:rgb(80, 150, 112)
            }
            &.acitve{
                color:rgb(80, 150, 112)
            }

            > i{
                font-size:24px;
                font-weight: 400;

            }
            span{
                font-size:13px;
            }
            .dropdown{
              height:0px;
              top:-6px;
            }
        }
    }

}

</style>
