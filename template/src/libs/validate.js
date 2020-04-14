export const validateTool = {
  // eslint-disable-next-line no-useless-escape
  email: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
  newTel: /^1[0-9]{10}$/,
  tel: /^1(3|4|5|7|8)[0-9]{9}$/,
  pwd: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, // 8-16位数字和字母的密码
  identity: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  phone: /\d{3}-\d{8}|\d{4}-\d{7}/,
  qq: /[1-9][0-9]{4,}/,
  ip: /\d+\.\d+\.\d+\.\d+/,
  chinese: /^[\u4e00-\u9fa5]*$/
}

export const validate = {
  isEmail (val) {
    if (validateTool.email.test(val)) {
      return true
    }
    return false
  },
  isNewTel (val) {
    if (validateTool.newTel.test(val)) {
      return true
    }
    return false
  },
  isTel (val) {
    if (validateTool.tel.test(val)) {
      return true
    }
    return false
  },
  isPwd (val) {
    if (validateTool.pwd.test(val)) {
      return true
    }
    return false
  },
  isIdentity (val) {
    if (validateTool.identity.test(val)) {
      return true
    }
    return false
  },
  isPhone (val) {
    if (validateTool.phone.test(val)) {
      return true
    }
    return false
  },
  isQQ (val) {
    if (validateTool.qq.test(val)) {
      return true
    }
    return false
  },
  isIp (val) {
    if (validateTool.ip.test(val)) {
      return true
    }
    return false
  },
  isChinese (val) {
    if (validateTool.chinese.test(val)) {
      return true
    }
    return false
  }
}
