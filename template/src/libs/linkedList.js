
/**
 * 双链表
 */
class MyNode {
  constructor (value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}
export default class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }
  add (value) {
    this.length++
    const node = new MyNode(value, null, null)
    if (this.head) { // 有head 一定有tail
      node.prev = this.tail.prev
      this.tail = node
    } else { // 无head  无tail 初始化 head = tail
      this.head = Object.assign({}, node)
      this.tail = Object.assign({}, node)
      this.head.next = this.tail
      this.head.prev = null
      this.tail.prev = this.head
      this.tail.next = null
    }
    return this
  }
  search (value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return value
      }
      current = current.prev
    }
    return null
  }
  indexOf (value) {
    const indexes = []
    let current = this.tail
    let index = 0
    while (current) {
      if (current.value === value) {
        indexes.push(index)
      }
      current = current.next
      index++
    }
    return indexes
  }
}
