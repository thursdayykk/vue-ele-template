/**
 * FIFO
 */
export default class MyQueue {
  constructor (...items) {
    this.queue = [...items]
  }
  enqueue (...items) {
    this.queue.push(...items)
    return this.queue
  }
  dequeue () {
    this.queue.shift()
    return this.queue
  }
  getQueue () {
    return this.queue
  }
}
