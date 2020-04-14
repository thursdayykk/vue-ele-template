<template>
    <div class="wrapper">
        <el-menu
                :default-active="this.$route.path"
                router
                class="el-menu-vertical-demo menu innerBox"
                @open="handleOpen"
                @close="handleClose">
            <template v-for="(menuItem,i) in menuList">
                <el-submenu v-if="menuItem.children" :key="i" :index="menuItem.index">
                    <template slot="title">
                        <i :class="menuItem.icon" v-if="menuItem.icon"></i>
                        <span>{{menuItem.title}}</span>
                    </template>
                    <el-menu-item
                        :index="item.path"
                        v-for="(item,index) in menuItem.children"
                        :key="index">{{item.title}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :key="i" :index="menuItem.path">{{menuItem.title}}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'myMenu',
  data () {
    return {
      menuList: [
        {
          index: '1',
          icon: 'el-icon-film',
          title: '动画相关',
          children: [
            {
              path: '/clock',
              title: '翻页时钟'
            },
            {
              path: '/fanpai',
              title: '动态滑牌'
            }
          ]
        },
        {
          index: '2',
          icon: 'el-icon-video-camera-solid',
          title: 'CSS相关',
          children: [
            {
              path: '/css3Index',
              title: '杂'
            }
          ]
        },
        {
          index: '3',
          icon: 'el-icon-paperclip',
          title: '功能相关',
          children: [
            {
              path: '/wordPic',
              title: '文图混输'
            },
            {
              path: '/scroll',
              title: '滚动控制'
            },
            {
              path: '/martix',
              title: '级联表单'
            },
            {
              path: '/clipImg',
              title: '图片切割'
            },
            {
              path: '/calendar',
              title: '日历'
            }
          ]
        }
        // {
        //   index: '4',
        //   icon: 'el-icon-date',
        //   title: 'demo',
        //   children: [
        //     {
        //       path: '/calendar',
        //       title: '日历'
        //     }
        //   ]
        // }
      ]
    }
  },
  mounted () {

  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper{
    height:100%;

}
 .menu{
        height:100%;
        overflow-x: hidden;
        overflow-y: auto;
         background:rgb(250, 255, 245);
    }
    .el-menu-item.is-active {
    color: rgb(34,114,70);
}
</style>
