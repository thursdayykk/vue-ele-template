<template>
    <el-container class="default-wrapper">
        <el-header class="header" height="60px">
            <Header />
        </el-header>
        <el-container class="content">
            <el-aside class="aside" width="150px" >
                <my-menu />
            </el-aside>
            <el-main class="main">
                <transition name="slide-fade">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import myMenu from './components/menu.vue'
import Header from './components/header.vue'
export default {
  components: {
    myMenu,
    Header
  },
  data () {
    return {}
  }

}
</script>

<style lang='scss' scoped>
.el-container{
  height:100%;
}
.default-wrapper{
    // border:1px solid #000;
    width:100vw;
    height:100vh;

    .content{
        display: flex;

    }
    .header{
        padding:0;
        border-bottom: 1px solid #eee;
    }

    .main{
        flex:1;
        padding:0;
        height:100%;
        overflow-y: auto;
    }

}

.slide-fade-enter-active {
  transition: all .3s ease 0.2s;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
