<template>
  <div id="app">
    <Default />
  </div>
</template>

<script>
import Default from './layout/default.vue'
import MyStack from '../src/libs/myStack.js'
import MyQueue from '../src/libs/myQueue.js'
import LinkedList from '../src/libs/linkedList.js'
export default {
  name: 'App',
  components: {
    Default
  },
  created () {
    let test = new MyStack(1, 2, 3)
    test.push(4, 5)

    let demo = new MyQueue(8, 9, 10)
    console.log(demo.dequeue())

    let list = new LinkedList()
    console.log(list.add({name: 'hello'}))
    console.log(list.add({name: 'hi'}))
  }
}
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
</style>
