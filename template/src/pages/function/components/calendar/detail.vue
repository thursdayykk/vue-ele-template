<template>
    <div>
        <p><span>{{day}}</span></p>
        <div class="detail-wrap">
            <p v-for="item in detailList" :key="item.chargeTypeId">
                <span>{{item.chargeTypeName}}</span>
                <span>{{item.amout}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String
    },
    detailList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>

</style>
