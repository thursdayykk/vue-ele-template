export const checkPlatform = {
  isWechat: () => /micromessenger/i.test(navigator.userAgent),
  isWeibo: () => /weibo/i.test(navigator.userAgent),
  isQQ: () => /qq\//i.test(navigator.userAgent),
  isIOS: () => /(iphone|ipad|ipod|ios)/i.test(navigator.userAgent),
  isAndroid: () => /android/i.test(navigator.userAgent)
}
