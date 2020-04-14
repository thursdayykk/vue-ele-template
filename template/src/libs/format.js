// 补零
function prefixZero (num) {
  return num >= 10 ? num : '0' + num
}
// 日期格式化
export function formatDate (timeStamp) {
  let date = new Date(timeStamp)
  return date.getFullYear() + '年' +
        prefixZero(date.getMonth() + 1) + '月' +
        prefixZero(date.getDate()) + '日' +
        prefixZero(date.getHours()) + ':' +
        prefixZero(date.getMinutes())
}
// 倒计时格式化
export function formatTime (timeStamp) {
  let day = Math.floor(timeStamp / (24 * 3600 * 1000))
  let leave1 = timeStamp % (24 * 3600 * 1000)
  let hours = Math.floor(leave1 / (3600 * 1000))
  let leave2 = leave1 % (3600 * 1000)
  let minutes = Math.floor(leave2 / (60 * 1000))
  let leave3 = leave2 % (60 / 1000)
  let seconds = Math.floor(leave3 / 1000)
  if (day) return day + '天' + hours + '小时' + minutes + '分'
  if (hours) return hours + '小时' + minutes + '分' + seconds + '秒'
  if (minutes) return minutes + '分' + seconds + '秒'
  if (seconds) return seconds + '秒'
  return '时间到！'
}
