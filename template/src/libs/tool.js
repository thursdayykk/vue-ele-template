// 节流 -- 在一周期时间内，只能触发一次函数，如果触发多次，只有一次有效
export function throttle (fun, delay) {
  let last, deferTimer
  return function (args) {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}

// 防抖 -- 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
export function debounce (fun, delay) {
  return function (args) {
    let that = this
    clearTimeout(fun.id)
    fun.id = setTimeout(() => {
      fun.call(that, args)
    }, delay)
  }
}

// 冒泡排序
export function bubbleSort (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// 置换函数
export function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

// 数组去重
export function distinct (arr = testArr) {
  return arr.filter((v, i, array) => array.indexOf(v) === i)
}
