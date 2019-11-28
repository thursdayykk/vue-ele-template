<template>
    <el-container class="default-wrapper">
        <el-header class="header" height="120px">
            <Header />
        </el-header>
        <el-container class="content">
            <el-aside class="aside" width="150px" >
                <my-menu />
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
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
    }

}
</style>
