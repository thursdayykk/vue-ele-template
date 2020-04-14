export function entities (s) {
  let e = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  }
  return s.replace(/["<>&]/g, m => {
    return e[m]
  })
}
