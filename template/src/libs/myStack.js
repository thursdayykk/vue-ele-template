/** LIFO  */
export default class MyStack {
  constructor (...items) {
    this.stack = [...items]
  }
  push (...items) {
    return this.stack.push(...items)
  }
  pop () {
    this.stack.pop()
    return this.stack
  }
  getStack () {
    return this.stack
  }
}
