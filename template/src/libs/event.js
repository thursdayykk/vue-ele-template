// 跨端事件处理
export const isSupportTouch = ('ontouchstart' in document.documentElement)

// 禁用enter键表单自动提交
export function keyEvent () {
  return (
    () => {
      document.onkeydown = function (event) {
        let target, code, tag
        if (!event) {
          event = window.event // ie
          target = event.srcElement
          code = event.keyCode
          if (code === 13) {
            tag = target.tagName
            if (tag === 'TEXTAREA') return true
            else return false
          }
        } else {
          target = event.target
          code = event.keyCode
          if (code === 13) {
            target = target.tagName
            if (tag === 'INPUT') return false
            else return true
          }
        }
      }
    }
  )()
}
