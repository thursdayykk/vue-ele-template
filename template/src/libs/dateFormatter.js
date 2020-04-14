function getNowTime () {
  let date = new Date()
  return {
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'h': date.getHours(),
    'min': date.getMinutes(),
    's': date.getSeconds()
  }
}

export default getNowTime
