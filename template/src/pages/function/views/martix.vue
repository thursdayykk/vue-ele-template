<template>
    <div>
        <el-row v-for="(commodity,i) in commoditySepcs" :key="i">
            <h3>{{commodity.title}}</h3>
            <el-radio :label="item" :disabled="!canChoose.includes(item)" v-model="choose[commodity.name]" v-for="(item,i) in commodity.list" :key="i">{{item}}</el-radio>
        </el-row>
    </div>
</template>

<script>
import martix from '../../../libs/martix.js'
export default {
  data () {
    return {
      commoditySepcs: [
        {title: '颜色', name: 'color', list: ['红色', '紫色', '白色', '黑色']},
        {title: '套餐', name: 'tc', list: ['套餐一', '套餐二', '套餐三', '套餐四']},
        {title: '内存', name: 'nc', list: ['64G', '128G', '256G']}
      ],
      choose: {
        color: '',
        tc: '',
        nc: ''
      },
      canChoose: [],
      specsS: []
    }
  },
  created () {
    // const demo = new martix.Adjoin(['v0', 'v1', 'v2', 'v3', 'v4'])
    // // 注册邻接点
    // demo.setAdjoinVertexs('v0', ['v2', 'v3'])
    // demo.setAdjoinVertexs('v1', ['v3', 'v4'])
    // demo.setAdjoinVertexs('v2', ['v0', 'v3', 'v4'])
    // demo.setAdjoinVertexs('v3', ['v0', 'v1', 'v2'])
    // demo.setAdjoinVertexs('v4', ['v1', 'v2'])

    // console.log(demo.getAdjoinVertexs('v0'))

    const data = [
      {id: '1', specs: ['紫色', '套餐一', '64G']},
      {id: '2', specs: ['紫色', '套餐一', '128G']},
      {id: '3', specs: ['紫色', '套餐二', '128G']},
      {id: '4', specs: ['黑色', '套餐三', '256G']}
    ]

    const shopAdjoin = new martix.ShopAdjoin(this.commoditySepcs, data)
    this.specsS = Array.from({length: this.commoditySepcs.length})

    const optionSepc = shopAdjoin.querySpecsOptions(Array.from({length: this.commoditySepcs.length}))
    this.canChoose = optionSepc
  },
  methods: {
    handleClick (bool, text, index) {
      console.log(this.commoditySepcs)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
