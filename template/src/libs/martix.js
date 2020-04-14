/** 无向图 */
class Adjoin {
  constructor (vertex) {
    this.vertex = vertex
    this.quantity = vertex.length
    this.init()
    console.log(this.vertex)
  }

  init () {
    // 初始化
    this.adjoinArray = Array.from({length: this.quantity * this.quantity})
  }

  getVertxRow (id) {
    const index = this.vertex.indexOf(id)
    const col = []
    this.vertex.forEach((item, pIndex) => {
      col.push(this.adjoinArray[index + this.quantity * pIndex])
    })
    return col
  }

  getAdjoinVertexs (id) {
    return this.getVertxRow(id).map((item, index) => (item ? this.vertex[index] : '')).filter(Boolean)
  }

  setAdjoinVertexs (id, sides) {
    console.log('====== setAdjoinVertexs ======')
    console.log(id, sides)
    const pIndex = this.vertex.indexOf(id)
    console.log('pIndex: ' + pIndex)
    sides.forEach((item) => {
      const index = this.vertex.indexOf(item)
      this.adjoinArray[pIndex * this.quantity + index] = 1
    })
  }

  getRowToatl (params) {
    params = params.map(id => this.getVertxRow(id))
    const adjoinNames = []
    this.vertex.forEach((item, index) => {
      const rowtotal = params.map(value => value[index]).reduce((total, current) => {
        total += current || 0
        return total
      }, 0)

      adjoinNames.push(rowtotal)
    })
    console.log(adjoinNames)
    return adjoinNames
  }

  // 交集
  getUnions (params) {
    const row = this.getRowToatl(params)
    return row.map((item, index) => item => params.length && this.vertex[index]).filter(Boolean)
  }
  // 并集
  getCollection (params) {
    params = this.getRowToatl(params)
    return params.map((item, index) => item && this.vertex[index]).filter(Boolean)
  }
}

class ShopAdjoin extends Adjoin {
  constructor (commoditySpecs, data) {
    // console.log(commoditySpecs.reduce((total, current) => [
    //   ...total,
    //   ...current.list
    // ], [])) // 扁平化
    super(commoditySpecs.reduce((total, current) => [
      ...total,
      ...current.list
    ], []))
    this.commoditySpecs = commoditySpecs
    this.data = data
    // 单规格矩阵创建
    this.initCommodity()
    // 同类顶点创建
    this.initSimilar()
  }

  initCommodity () {
    this.data.forEach((item) => {
      this.applyCommodity(item.specs)
    })
  }

  initSimilar () {
    // 获得所有可选项
    const specsOption = this.getCollection(this.vertex)
    console.log(specsOption)
    this.commoditySpecs.forEach((item) => {
      const params = []
      item.list.forEach((value) => {
        if (specsOption.indexOf(value) > -1) params.push(value)
      })

      // 同级点位创建
      this.applyCommodity(params)
    })
  }

  querySpecsOptions (params) {
    // console.log(params.filter(Boolean))
    // 判断是否存在选项填一个
    // some() 不会对空数组进行检测 不会改变原始数组。
    if (params.some(Boolean)) { // 如果params里存在为真的
      // 过滤一下选项
      params = this.getUnions(params.filter(Boolean))
    } else {
      // 兜底选一个
      params = this.getCollection(this.vertex)
    }
    return params
  }
  applyCommodity (params) {
    params.forEach(param => {
      this.setAdjoinVertexs(param, params)
    })
  }
}
/**
     const demo = new Adjoin(['v0', 'v1', 'v2', 'v3', 'v4'])

    // 注册邻接点

    demo.setAdjoinVertexs('v0', ['v2', 'v3'])
    demo.setAdjoinVertexs('v1', ['v3', 'v4'])
    demo.setAdjoinVertexs('v2', ['v0', 'v3', 'v4'])
    demo.setAdjoinVertexs('v3', ['v0', 'v1', 'v2'])
    demo.setAdjoinVertexs('v4', ['v1', 'v2'])

    console.log(demo.getAdjoinVertexs('v0'))

 */

export default {
  Adjoin,
  ShopAdjoin
}
