<template>
    <div>login</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    console.log(this.$store.state.user.name)
  }
}
</script>

<style lang='scss' scoped>

</style>
